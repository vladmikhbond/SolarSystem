function controller(model, view) {
   let timer = null;

   canvas1.addEventListener('click', function () {
      if (timer) {
         clearInterval(timer);
         timer = null;
      } else {
         timer = setInterval(function () {
            model.step();
            view.draw();
         }, 50);
      }
   });


}



