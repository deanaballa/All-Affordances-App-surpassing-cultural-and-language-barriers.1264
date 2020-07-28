(function($){
  $(function(){
    $(document).ready(function(){
      $('.slider').slider();
      $('.modal').modal();
    });

    for (let i = 0 ; i < document.querySelectorAll("img").length ; i++){
      document.querySelectorAll("img")[i].addEventListener("click" , orderDone ) ;
    }


    function orderDone(event){
      document.querySelector(".modal-content").innerText  =  "Ju porositet " + event.currentTarget.nextElementSibling.innerText;
      $('.modal').modal("open");

    }

    let dots = document.querySelector(".dots");
    for (let i = 0; i < 2; ++i) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
      //dot.addEventListener("click", handleTouchMove.bind(null, i), false);
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      return evt.touches ||             // browser API
          evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          document.getElementById("firstSlider").classList.add("hide" , true);
          document.getElementById("secondSlider").classList.remove("hide");
          document.querySelectorAll(".dot")[1].classList.add("active-dot");
          document.querySelectorAll(".dot")[0].classList.remove("active-dot");
          /* left swipe */
        } else {
          document.getElementById("secondSlider").classList.add("hide" , true);
          document.getElementById("firstSlider").classList.remove("hide");
          document.querySelectorAll(".dot")[0].classList.add("active-dot");
          document.querySelectorAll(".dot")[1].classList.remove("active-dot");
          /* right swipe */
        }
      } else {
        if ( yDiff > 0 ) {
          /* up swipe */
        } else {
          /* down swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space
