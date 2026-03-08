const sitekey =
  window.location.hostname === 'www.acostadmacleaning.com'
    ? '6Ldk-cMpAAAAAKJroYU9le0_JgWOFsBFsMGkW_F6'
    : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

export const loadRecaptcha = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`;
    script.async = true;

    script.onerror = () => {
      reject(
        new Error(
          'reCAPTCHA failed to load. Please check your connection and try again.'
        )
      );
    };

    script.onload = () => {
      // The script has loaded, but we need to wait for grecaptcha to be ready
      const checkRecaptchaReady = () => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(() => {
            // reCAPTCHA is fully loaded and ready
            resolve(true);
          });
        } else {
          // grecaptcha is not available yet, check again in 100ms
          setTimeout(checkRecaptchaReady, 100);
        }
      };

      checkRecaptchaReady();
    };

    // This line should be at the end, outside of any callback
    document.head.appendChild(script);
  });
};

export const getRecaptchaToken = () => {
  return new Promise((resolve, reject) => {
    // Ensure grecaptcha.ready is used correctly by providing a callback function directly.
    window.grecaptcha.ready(() => {
      // Inside this callback, it's safe to call window.grecaptcha.execute

      window.grecaptcha
        .execute(sitekey, {
          action: 'homepage',
        })
        .then((token: string | null) => {
          resolve(token);
        })
        .catch((error: Error) => {
          // Handle any errors that occur during execution, reject the promise
          console.error('Error executing reCAPTCHA:', error);
          reject(error);
        });
    });
  });
};
