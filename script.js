const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resulttado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas= [
    {
        enunciado:"Qual o meu anime favorito??",
        alternativas:[
          {
            texto: "Jujutsu Kaisen",
          afirmação: "afirmação",
          },
          {
            texto: "Kimetsu no yaiba",
          afirmação: "afirmação",
          },
        ]
    },
{
        enunciado:"Qual meu personagem preferido de JJK?",
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

let atual= 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
}

mostraPergunta();