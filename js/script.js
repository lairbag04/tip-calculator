function calcularGorjeta() {
    const preco = parseFloat(document.getElementById('valor').value);
    const porcen = parseFloat(document.getElementById('porcentagem').value);
    const tip = preco * (porcen / 100);
    const tipcal = preco + tip;

    if (!preco || !porcen){
        alert('Preencha os campos corretamente acima!!')
        return;
    }

    const resultado = document.getElementsByClassName('resultado')[0];
    resultado.innerHTML = 'Valor a ser pago: R$' + tipcal.toFixed(2);
    resultado.classList.add('mostrar');
    
    resultado.style.display = 'block';
}

function limpar() {
    document.getElementById('valor').value = '';
    document.getElementById('porcentagem').value = '';
    document.getElementById('resultado').textContent = '';
}