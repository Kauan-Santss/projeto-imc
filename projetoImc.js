const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');




    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let resultadoImc = '';

        if (valorIMC < 18.5){
            resultadoImc = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            resultadoImc = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            resultadoImc = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            resultadoImc = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            resultadoImc = 'com obesidade grau II';
        }else {
            resultadoImc = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} o valor seu IMC é ${valorIMC}, portanto você está ${resultadoImc}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);