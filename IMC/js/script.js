document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('imc-form');
  const resultadoDiv = document.getElementById('resultado');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      resultadoDiv.textContent = 'Por favor, insira valores válidos para altura e peso.';
      resultadoDiv.style.color = 'red';
      return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(1);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    resultadoDiv.innerHTML = `Seu IMC é <strong>${imcFormatado}</strong> – ${classificacao}`;
    resultadoDiv.style.color = '#333';
  });
});
