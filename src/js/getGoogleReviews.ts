export const getGoogleReviews = async () => {
  const placeId = 'ChIJw_UXRzznwokRu82njaYqAmk';

  const rsp = await fetch(
    `https://api.ernestoballon.com/reviews/google-reviews/${placeId}`
  );
  const response = await rsp.json();

  const myComponent = document.querySelector('reviews-widget ') as any;

  if (!myComponent) {
    return;
  }

  myComponent.reviews = response.googleReviews;
};
