$(function () {

   // active menu
   var path = window.location.href;
   $('.navbar-nav .nav-link').each(function () {
      if (this.href === path) {
         $(this).addClass('active').siblings().removeClass('active');
      }
   });
   $('.navbar-nav .nav-link').on('click', function (e) {
      $(this).addClass('active').siblings().removeClass('active');
   })

   // gallery img load
   $('#loadMore').on('click', function () {
      $(".load-images-here").html(`<div class="col-12">
   <div class="row">
      <div class="col-12">
         <div class="row">
         <div class="col-12 col-lg-6 mb-4">
            <img src="./assets/gallery/gallery_1.jpg" class="gallery-image" height="100%" width="100%" alt="">
         </div>
         <div class="col-lg-3 col-6 mb-4">
            <img src="./assets/gallery/gallery_2.jpg" class="gallery-image" height="100%" width="100%" alt="">
         </div>
         <div class="col-lg-3 col-6 mb-4">
            <img src="./assets/gallery/gallery_3.jpg" class="gallery-image" height="100%" width="100%" alt="">
         </div>
         </div>
      </div>
      <div class="col-12">
         <div class="row">
         <div class="col-lg-3 col-6 mb-4">
            <img src="./assets/gallery/gallery_4.jpg" class="gallery-image" height="100%" width="100%" alt="">
         </div>
         <div class="col-lg-3 col-6 mb-4">
            <img src="./assets/gallery/gallery_5.jpg" class="gallery-image" height="100%" width="100%" alt="">
         </div>
         <div class="col-lg-6 col-12 mb-4">
            <img src="./assets/gallery/gallery_6.jpg" class="gallery-image" height="100%" width="100%" alt="">
         </div>
         </div>
      </div>
   </div>
</div>`);
   })

   // swiper
   var clientSwiper = new Swiper('.client-swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      spaceBetween: 10,
      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      },
      breakpoints: {
         780: {
            slidesPerView: 2,
            spaceBetween: 10
         },
         200: {
            slidesPerView: 1,
            spaceBetween: 0
         }
      }
   })

   // swiper
   var welcomeSwiper = new Swiper('.welcome-swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      spaceBetween: 30,
      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      },
   })


   $('#chat-button').on('click', function () {
      if ($('.chat-box').hasClass('d-none')) {
         $('.chat-box').removeClass('d-none')
      }
      else {
         $('.chat-box').addClass('d-none')
      }
   })

});

