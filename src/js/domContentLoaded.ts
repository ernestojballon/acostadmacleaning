import { loadRecaptcha } from './recaptcha';
import { getGoogleReviews } from './getGoogleReviews';

document.addEventListener('DOMContentLoaded', async function () {
  await loadRecaptcha();
  await getGoogleReviews();
});
