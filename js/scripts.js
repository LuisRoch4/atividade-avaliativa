function validarDados() {
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.style.display = 'none';
    mensagemErro.innerHTML = '';

    const data = document.getElementById('inData').value;
    const cliente = document.getElementById('inCli').value.trim();
    const telefone = document.getElementById('inFone').value.trim();
    const email = document.getElementById('inMail').value.trim();
    const produto = document.getElementById('inProd').value.trim();
    const quantidade = document.getElementById('inQtd').value;
    const valorUnitario = document.getElementById('inVal').value;

    let erro = false;

    // Validação dos campos
    if (!data) {
        mostrarErro('O campo data não pode estar vazio!');
        erro = true;
    }
    if (cliente.length < 5) {
        mostrarErro('O campo nome do cliente deve ter pelo menos 5 caracteres!');
        erro = true;
    }
    if (telefone.length < 5) {
        mostrarErro('O campo telefone deve ter pelo menos 5 caracteres!');
        erro = true;
    }
    if (email.length < 5) {
        mostrarErro('O campo e-mail não pode estar vazio e deve ter pelo menos 5 caracteres!');
        erro = true;
    }
    if (produto.length < 5) {
        mostrarErro('O campo nome do produto deve ter pelo menos 5 caracteres!');
        erro = true;
    }
    if (quantidade <= 0) {
        mostrarErro('O campo quantidade deve ser positivo!');
        erro = true;
    }
    if (valorUnitario <= 0) {
        mostrarErro('O campo valor unitário deve ser positivo!');
        erro = true;
    }

    if (!erro) {
        console.log('Formulário enviado com sucesso!'); 

    }
}

function mostrarErro(mensagem) {
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.style.display = 'block';
    mensagemErro.innerHTML += mensagem + '<br>';
}

/********Atiidade 2 ********/


/*******Atividade 3 *******/
function alterarLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    let btnEnviar = document.getElementById("btnEnviar");

    // Fazendo a troca da imagem
    if (arquivo === 'acesa.jpg') {
        imagem.src = 'img/apagada.jpg';
        btnEnviar.textContent = 'Acender'; // Muda o texto do botão
    } else {
        imagem.src = 'img/acesa.jpg';
        btnEnviar.textContent = 'Apagar'; // Muda o texto do botão
    }
}

/******Atividade 4 *******/
document.getElementById('btnEnviar').addEventListener('click', calcularDesconto);

function calcularDesconto() {
    const valorPedido = parseFloat(document.getElementById('inValorPedido').value);
    let percentualDesc = 0;

    if (valorPedido >= 2000) {
        percentualDesc = 1.5;
    } else if (valorPedido >= 1500) {
        percentualDesc = 1.0;
    } else if (valorPedido >= 1000) {
        percentualDesc = 0.8;
    } else if (valorPedido >= 500) {
        percentualDesc = 0.5;
    }

    const valorDesconto = (valorPedido * percentualDesc) / 100;
    const valorFinal = valorPedido - valorDesconto;

    document.getElementById('inPercDesc').value = percentualDesc.toFixed(2);
    document.getElementById('inValDesc').value = valorDesconto.toFixed(2);
    document.getElementById('inValFinal').value = valorFinal.toFixed(2);
}



