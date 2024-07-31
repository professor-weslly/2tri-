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
        enunciado:"Voce se perdeu em uma florestas ",
        alternativas:[
           {
            texto: "Satoro Gojo",
           afirmação: "afirmação",
           },
           {
            texto: "Tanjiro Kamado",
           afirmação: "afirmação",
           },
        ]
    },    
    {
        enunciado:"Qual meu segundo anime favorito?",
        alternativas:[
           {
            texto: "Hunter X Hunter",
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


