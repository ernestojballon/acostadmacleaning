// <div class="parallax-container" data-parallax="scroll" data-position="top" data-bleed="10"
// data-natural-width="2200" data-natural-height="1342" data-z-index="0">
// <div class="parallax-slider">

//   <img src="images/customer-handshake-p-2000.webp" alt="Customer handshake" class="parallax-image" srcset="
//         images/customer-handshake-p-2000.webp  500w,
//         images/customer-handshake-p-2002.jpg  2000w
//       " />
// </div>
// I want to change the image and data-natural-width="2200" data-natural-height="1342" to the new image width and height
// depending onthe screen size 198 * 430 for mobile and 2200 * 1342 for desktop
document.addEventListener('DOMContentLoaded', function () {
  const parallaxContainer = document.querySelector('.parallax-container');
  if (parallaxContainer === null) {
    return;
  }
  function updateParallaxDimensions() {
    if (window.innerWidth >= 1300) {
      // Mobile dimensions

      parallaxContainer.setAttribute('data-position', 'center');
      return;
    }
    parallaxContainer.setAttribute('data-position', 'top -600');
    // }
  }
  updateParallaxDimensions();
  window.addEventListener('resize', updateParallaxDimensions);
});
