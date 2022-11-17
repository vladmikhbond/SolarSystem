function controller(model, view) {
   const INTERVAL = 50;
   let timer = null;

   canvas1.addEventListener('mousedown', function (e) {
      if (timer) {
         clearInterval(timer);
         timer = null;   
         view.draw(); 
      } else {
         setPlanet(e);  //////////
         timer = setInterval(function () {
            model.step();
            view.draw();
         }, INTERVAL);
      }
   });


///////////////////////// 2  /////////////////                    
   function setPlanet(e) {
      let x = e.offsetX - canvas1.width / 2;
      let y = e.offsetY - canvas1.height / 2;
      let planet = model.getPlanetByCoords(x, y);
      if (!planet) 
         return;
      let s = `{"x": ${planet.x},  "y": ${planet.y},   "vx": ${planet.vx},   "vy": ${planet.vy} }`;
      s = prompt(planet.name, s);
      try {
         Object.assign(planet, JSON.parse(s));
      } catch {
         alert("fault");
      }; 
 
   }

}



