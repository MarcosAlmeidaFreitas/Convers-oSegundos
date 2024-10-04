const btnCalcular = document.getElementById("btn_calcular");
let inputTime = document.getElementById("input_time");
let span = document.getElementById("span_resultado");

btnCalcular.addEventListener('click', calcular);
inputTime.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    calcular();
  }
});

function calcTime(time) {
  time = time - Math.trunc(time);
  time = time * 60;
  //console.log(time.toFixed(6))
  return time.toFixed(6);
}

function lerValorInput() {
  try {
    let valor = inputTime.value;
    valor = valor.replace(/[\D]/gm, "");
    return valor;
  } catch (err) {
    alert("Digite apenas números");
    console.log(err);
  }
}



function calcular() {
  let valorTotalHoras = lerValorInput() / 3600;
  let resposta = "Corresponde à ";

  //calculando os dias.
  if (valorTotalHoras >= 24) {
    let dias = Math.trunc(valorTotalHoras / 24);
    valorTotalHoras = valorTotalHoras - (dias * 24);
    resposta = resposta + `${dias} dia(s) `
  }

  //calculando as horas
  if (valorTotalHoras !== 0) {
    if (valorTotalHoras % 1 === 0) {
      if (valorTotalHoras >= 1) resposta = resposta + `${Math.trunc(valorTotalHoras)} hora(s) `;
      valorTotalHoras = 0;
    } else {
      if (valorTotalHoras >= 1) resposta = resposta + `${Math.trunc(valorTotalHoras)} hora(s) `;
      valorTotalHoras = calcTime(valorTotalHoras);
    } 
  }

  //calculando os minutos
  if (valorTotalHoras !== 0) {
    if (valorTotalHoras % 1 === 0) {
      if (valorTotalHoras >= 1) resposta = resposta + `${Math.trunc(valorTotalHoras)} minuto(s) `;
      valorTotalHoras = 0;
    } else {
      if (valorTotalHoras >= 1) resposta = resposta + `${Math.trunc(valorTotalHoras)} minuto(s) `;
      valorTotalHoras = calcTime(valorTotalHoras);
    }
  }

  //calculando os segundos
  if (valorTotalHoras !== 0) {
    if (valorTotalHoras % 1 === 0) {      
      if (valorTotalHoras >= 1) resposta = resposta + `${Math.trunc(valorTotalHoras)} segundo(s) `;
      valorTotalHoras = 0;
    } else {
      if (valorTotalHoras >= 1) resposta = resposta + `${Math.trunc(valorTotalHoras)} segundo(s) `;
    }
  }

  span.innerText = resposta;
}

