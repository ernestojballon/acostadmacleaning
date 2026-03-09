import { getRecaptchaToken } from './recaptcha';

const contactForm = document.getElementById('contact-form') as HTMLFormElement;

const successfulBanner = document.getElementById(
  'contact-form-success'
) as HTMLDivElement;
const failBanner = document.getElementById(
  'contact-form-fail'
) as HTMLDivElement;
const submitButton = document.getElementById(
  'contact-form-submit'
) as HTMLButtonElement;

const onSubmitContactForm = async (event: Event) => {
  try {
    // set waiting state form
    event.preventDefault();
    submitButton.textContent = submitButton.getAttribute('data-wait');
    submitButton.disabled = true;
    //check agree
    const agree = document.getElementById('agree') as HTMLInputElement;
    if (!agree.checked) {
      throw new Error('You must agree to the terms and conditions');
    }
    //get recaptcha
    const token = await getRecaptchaToken();

    // Create a FormData object, passing the form as a parameter
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formData = new FormData(contactForm) as FormData;
    const formFields: Record<string, string | boolean> = {
      token: token as string,
    };
    // Log the form data to the console (or you could send it to a server)
    formData.forEach((value, key) => {
      if (key === 'agree') {
        //
        return value === 'on'
          ? (formFields[key] = true)
          : (formFields[key] = false);
      }
      formFields[key] = value as string;
    });
    const requestBody = {
      to: 'acostadma@gmail.com',
      from: 'info@essentialstatesllc.com',
      subject: 'Page Contact Form - acostadmacleaning.com',
      text: `Name: ${formFields.name || 'Anonymus'} says: ${formFields.message}`,
      replyTo: formFields.email,
      token,
    };
    // return dummy answer that the form was successful submitted
    return fetch('https://api.ernestoballon.com/email/contact', {
      method: 'POST', // Specifies the request method
      headers: {
        'Content-Type': 'application/json', // Sets the content type header
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          successfulBanner.style.display = 'block';
          failBanner.style.display = 'none';
          submitButton.textContent = submitButton.getAttribute('data-success');
          // redirect to thank-you.html page
          window.location.href = 'thank-you.html';
        } else {
          successfulBanner.style.display = 'none';
          failBanner.style.display = 'block';
          submitButton.textContent = submitButton.getAttribute('data-fail');
        }
      })
      .catch(() => {
        throw new Error('Error submitting the form');
      });
  } catch (error) {
    successfulBanner.style.display = 'none';
    failBanner.style.display = 'block';
    submitButton.textContent = submitButton.getAttribute('data-fail');
  }
};
contactForm?.addEventListener('submit', onSubmitContactForm);

// Exports the function to be used in other modules
