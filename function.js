function load() {
   console.log('loaded');
   document.getElementById("load-images-here").innerHTML = `<div class="col-12">
   <div class="row">
      <div class="col-6">
         <img class="p-3 gallery-image" src="./assets/gallery/gallery 1.jpg" height="301" width="585"
            alt="">

      </div>
      <div class="col-3">
         <img class="p-3 gallery-image" src="./assets/gallery/gallery 2.jpg" height="301" width="279"
            alt="">

      </div>
      <div class="col-3">
         <img class="p-3 gallery-image" src="./assets/gallery/gallery 3.jpg" height="301" width="279"
            alt="">

      </div>
   </div>

</div>
<div class="col-12">
   <div class="row">

      <div class="col-3">
         <img class="p-3 gallery-image" src="./assets/gallery/gallery 4.jpg" height="301" width="279"
            alt="">

      </div>
      <div class="col-3">
         <img class="p-3 gallery-image" src="./assets/gallery/gallery 5.jpg" height="301" width="279"
            alt="">

      </div>
      <div class="col-6">
         <img class="p-3 gallery-image" src="./assets/gallery/gallery 6.jpg" height="301" width="585"
            alt="">

      </div>
   </div>
</div>`;
}

var mySwiper = new Swiper('.swiper-container', {
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
})