const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resulttado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas= [
    {
        enunciado:"Qual o meu anime favorito??",
        alternativas:[
            "Jujutsu Kaisen",
            "Kimetsu no yaiba",
        ]
    },
{
        enunciado:"Qual meu personagem preferido?",
        alternativas:[
            "Satoro Gojo",
            "Tanjiro Kamado",
        ]
    },    
{
        enunciado:"Qual meu segundo anime favorito?",
        alternativas:[
            "Hunter X Hunter",
            "Haikyuu",
        ]
    },
{
         enunciado:"Qaul anime eu nâo suporto?",
         alternativas:[
                "One Piece",
                "Attack on Titan",
            ]
        },
{
         enunciado:"????",
         alternativas:[
                "One Piece",
                "Attack on Titan",
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