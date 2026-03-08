/* eslint-disable @typescript-eslint/no-explicit-any */
import '../css/index.scss';
import './domContentLoaded';
import './recaptcha';
import './blurry-image';
import './contactFormCall';
import './scrollReveal';
import './parallax';
import './particles';
// import './getGoogleReviews';

// import './nav';
declare global {
  interface Window {
    grecaptcha: any;
    ScrollReveal: any;
    particlesJS: any;
    debounce: any;
    Parallax: any;
    getRecaptchaToken: () => Promise<string>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // ,make to propagate click
  // document.querySelectorAll('.js-propagate-click').forEach((el) => {
  //   el.addEventListener('click', (e) => {
  //     console.log('click');
  //     e.preventDefault();
  //   });
  // });
});
