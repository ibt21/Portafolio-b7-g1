//alert("Hola mundo")

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Ivette Orihuela')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Junior front - end')
  .pauseFor(1000)
  .start();
