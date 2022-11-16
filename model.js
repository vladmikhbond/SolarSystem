class Planet 
{
   x = 0; y = 0; vx = 0; vy = 0; 

   constructor(name, size) {
      this.name = name;
      this.size = size;
   }

   step() {
      let dist = Math.sqrt(this.x**2 + this.y**2);
      let a = -SolSys.GM / dist**2;

      let ax = this.x * a / dist;
      let ay = this.y * a / dist;

      this.vx += ax;
      this.vy += ay;

      this.x += this.vx;
      this.y += this.vy;
   }
}

class SolSys {
   static GM = 1000;

   constructor() {
      this.planets = [];
   }

   step() {
      for (const planet of this.planets) {
         planet.step();
      }
   }

   addPlanet(planet, dist) {
      planet.x = dist;
      planet.y = 0;
      planet.vx = 0;
      planet.vy = Math.sqrt(SolSys.GM / dist);     
      this.planets.push(planet);
   }
}







