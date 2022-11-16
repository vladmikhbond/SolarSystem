class Planet 
{
   x = 0; y = 0; vx = 0; vy = 0; 

   constructor(name, size, dist) {
      this.name = name;
      this.size = size;
      this.x = dist;
      this.y = 0;
      this.vx = 0;
      this.vy = Math.sqrt(SolSys.GM / dist);
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
      for (const element of this.planets) {
         element.step();
      }
   }

   createPlanet(name, size, dist) {
      let planet = new Planet(name, size, dist);      
      this.planets.push(planet);
      return planet;
   }
}







