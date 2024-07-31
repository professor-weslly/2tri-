const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Se sua casa estivesse pegando fogo o que|quem voce salvaria?",
        alternativas:[
          {
            texto: "Meus materiais de estudo, sem eles não passo de ano",
          afirmação: "Voce tem um coração de pedra, tente ser mais gentil",
          },
          {
            texto: "Meus animais de estimação, são mais importantes que tudo",
          afirmação: "Realmente eles são mais importantes. Materiais de estudos são substituiveis",
          },
        ]
    },
    {
        enunciado:"Voce se perdeu em uma floresta ao entardecer sem comida,água e sem celular, o que voce faria?",
        alternativas:[
           {
            texto: "Não sairia do lugar, alguém com certeza vai vir me proucurar",
           afirmação: "Até que não é uma má ideia mas algum animal pode te pegar",
           },
           {
            texto: "Sairia para proucurar comida e um lugar para se abrigar, enquanto tento pensar em um jeito de sair dali",
           afirmação: "Incrivel porem tente não ir muito longe do local inicial",
           },
        ]
    },    
    {
        enunciado:"Se voce tivesse só uma opção, qual escolheria?",
        alternativas:[
           {
            texto: "",
           afirmação: "afirmação",
           },
           { 
            texto: "Haikyuu",
           afirmação: "afirmação",
           },
        ]
    },
    {
         enunciado:"Qual anime eu nâo suporto?",
         alternativas:[
            { 
              texto: "One Piece",
            afirmação: "afirmação",   
            },
            {
              texto: "Attack on Titan",
            afirmação: "afirmação",
            },
        ]
    },
    {
         enunciado:"Qual meu ????",
         alternativas:[
            {   
             texto: ".....",
            afirmação: "afirmação", 
            },
            {
             texto: "....",
            afirmação: "afirmação",    
            },
        ]
    },      
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
         if(atual >= perguntas.lenght){
         mostraResultado();
         return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmação;
            historiaFinal = afirmacoes;
            atual++;
            mostraPergunta;
}

function mostraResultado(){
    caixasPerguntas.textContent = "Esse é a introdução para juntar todas as afirmações das respostas..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();


