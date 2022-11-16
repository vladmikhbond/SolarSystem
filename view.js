class View {
   constructor(solSys) {
      this.solSys = solSys;
   }    
  
   draw() {
      const ctx = canvas1.getContext("2d");
   
      // черное небо космоса
      ctx.fillRect(0, 0, canvas1.width, canvas1.height);
      
      // начало координат - в центр канваса  
      ctx.save();
      ctx.translate(canvas1.width / 2, canvas1.height / 2);

      // рисуем Солнце
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(0, 0, 10, 0, Math.PI * 2, true); 
      ctx.fill();

      // рисуем планеты

      for (const planet of this.solSys.planets) {
         ctx.beginPath();
         ctx.arc(planet.x, planet.y, planet.size / 2, 0, Math.PI * 2, true); 
         ctx.fill();            
      }
      ctx.restore();
   }
  
}