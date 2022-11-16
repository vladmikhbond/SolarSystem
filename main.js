const model = new SolSys()
model.addPlanet(new Planet('Venus', 12), 100);
model.addPlanet(new Planet('Earth', 15), 150);
model.addPlanet(new Planet('Mars', 10), 200);

const view = new View(model);
controller(model, view);
view.draw();
