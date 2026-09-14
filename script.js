const botoes = document.querySelectorAll("button")
botes.forEach(function (botao) {
  let curtiu= false;
  botao.addEventListener("click" , botaoClicado);
  function botaoClicado() {
    console.log("fui clicado");
    let texto = botao.querySelector("span");
    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else{
      texto.textContent --;
      curtiu = false; 
    }
  }
  ))
