class View {
   constructor(solSys) {
      this.solSys = solSys;
   }    
  
   draw() {
      const ctx = canvas1.getContext("2d");
      const sunSize = 50;
      
   
      // чорне небо космосу
      ctx.fillRect(0, 0, canvas1.width, canvas1.height);
      
      // почток координат - у центрі канвасу  
      ctx.save();
      ctx.translate(canvas1.width / 2, canvas1.height / 2);

      // Сонце
      ctx.drawImage(Sun,  -sunSize / 2, -sunSize / 2, sunSize, sunSize);

      // планети
     
      for (const planet of this.solSys.planets) {
         const img = document.getElementById(planet.name);
         ctx.drawImage(img,  
         planet.x - planet.size / 2, 
         planet.y - planet.size / 2, 
         planet.size, planet.size);                   
      }
      ctx.restore();
   }
  
}