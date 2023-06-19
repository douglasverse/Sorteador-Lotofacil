let gerarjogo = document.getElementById("gerarjogo");



gerarjogo.addEventListener("click", () => {
  let numerosdoJogo = [];
  function GerarDezenas() {
    while (numerosdoJogo.length < 15) {
      let aleatorio = Math.floor(Math.random() * 25 + 1);
      if (numerosdoJogo.indexOf(aleatorio) == -1) numerosdoJogo.push(aleatorio);
    }
    numerosdoJogo.sort(function (a, b) {
      return a - b;
    });
  }


  GerarDezenas();
  console.log(numerosdoJogo);
});
