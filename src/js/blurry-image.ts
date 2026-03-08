document.addEventListener('DOMContentLoaded', () => {
  // Define the URL of your actual background image

  // Determine the appropriate image based on screen width
  const screenSizeMatch = window.matchMedia('(max-width: 700px)');
  const actualBackgroundImageUrl = screenSizeMatch.matches
    ? './images/customer-handshake-focus-p-30.webp'
    : './images/customer-handshake-p-500.webp';

  // Preload the image
  const img = new Image();
  img.src = actualBackgroundImageUrl;

  img.onload = () => {
    // // Once the image is loaded, apply it as a background to your div
    const actualBackgroundDiv = document.querySelector(
      '.background-img'
    ) as HTMLDivElement;
    if (actualBackgroundDiv) {
      actualBackgroundDiv.style.backgroundImage = `url('${actualBackgroundImageUrl}')`;
    }
  };
});
