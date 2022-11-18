class Planet 
{
   x = 0; y = 0; vx = 0; vy = 0; 

   constructor(name, size) {
      this.name = name;
      this.size = size;
   }

   step() {
      let r = Math.sqrt(this.x**2 + this.y**2);
      let a = -System.GM / r**2;

      let ax = this.x * a / r;
      let ay = this.y * a / r;

      this.vx += ax;
      this.vy += ay;

      this.x += this.vx;
      this.y += this.vy;
   }
}

class System {
   static GM = 10000;

   constructor() {
      this.planets = [];
   }

   step() {
      for (const planet of this.planets) {
         planet.step();
      }
   }

   addPlanet(planet, r) {
      Object.assign(planet, 
         {x:r, y:0, vx:0, vy: Math.sqrt(System.GM / r) });    
      this.planets.push(planet);
   }

   /////////////////// 2 ////////////////////////
   getPlanetByCoords(x, y) {
      const eps = 5;
      let planet = this.planets.find(p => Math.abs(p.x - x) < eps && Math.abs(p.y - y) < eps);
      return planet;
   }
}







