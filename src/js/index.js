
const resposta = document.getElementById('respostas');

const pergunta = document.getElementById('pergunta');

const perguntar = document.getElementById('perguntar')

const respostas = ["Certeza!", "Não tenho tanta certeza.", "E decididamente assim.", "Não conte com isso.", "Sem dúvidas!", "Pergunte novamente mais tarde.", "Sim, definitivamente!", "Minha resposta é não.", "Você pode contar com isso.", "Melhor não te dizer agora.", "A meu ver, sim.", "Minhas fontes dizem não.", "Provavelmente.", "Não é possível prever agora.", "Perspectiva boa.", "As perspectivas não são tão boas.", "Sim.", "Concentre-se e pergunte novamente.", "Sinais apontam que sim."];

function fazerPergunta() {
    if (pergunta.value == '') {
        alert('Digite a sua pergunta!');
        return
    }
    
    perguntar.disabled = true;

    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random()*totalRespostas);
    
    resposta.innerHTML = respostas[numeroAleatorio];

    resposta.style.opacity = 1;

    setTimeout(function() {
        resposta.style.opacity = 0;
        perguntar.disabled = false;
    }, 3000)
}
perguntar.addEventListener('click', fazerPergunta);

