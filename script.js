const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Sua casa está pegando fogo e escuta uma garota de cabelo prateado gritando para um anão o chamando de astúpido, você?",
        alternativas:[
          {
            texto: "Pediria ajuda para a menina pois ela parece ser mais responsável apesar de também parecer ignorante",
          afirmação: "Arriscado porém a menina bufa, tira um livro de sua bolsa e com o folear de algumas páginas ela apaga o fogo com um jato de água",
          },
          {
            texto: "Pediria ajuda para esse tal de astúpido pois ele parece ser mais capaz ",
          afirmação: "Péssima escolha pois depois de pegar uma espada do seu livro, ele corre em sua direção destruindo algumas paredes e te salva porém a casa cai",
          },
        ]
    },
    {
        enunciado:"Você acorda misteriosamente em uma praia e vê duas pessoas jogando futebol chutando uma coisa que parece ser um vulcão com um olho, você...?",
        alternativas:[
           {
            texto: "Achou divertido e pede pra jogar com eles",
           afirmação: "você vai acabar perdendo o jogo e sua vida, sendo devorado por um crustácio bombado que estava por lá",
           },
           {
            texto: "Você pede ajuda para o garoto com cara costurada que parece ser bem amigável",
           afirmação: "Ele acceita aceita e te leva misteriosamente até sua residência e fala que te encontrará depois.... sinto lhe dizer mais diga adeus a sua vida",
           },
        ]
    },    
    {
        enunciado:"Você está em casa tranquilamente fazendo tarefa de progamação até que escuta batidas na sua janela, abrindo-a entra um corvo diznedo exigir sua presença em mansão,você...?",
        alternativas:[
           {
            texto:"Segurando uma biblia e orando, você coloca o corvo para fora",
           afirmação: "Vemos que você não é um(a) amante de animes e perde uma grande oportunidade.",
           },
           { 
            texto: "Escuto cuidadosamente o corvo arrumando minhas malas e com muito animo vou junto a ele realizar um sonho abandonando tudo e todos sem olhar olhar para trás",
           afirmação: "Você sabe das coisas, terá uma vidaa de riscos mas no final valerá a pena virando uma pessoa respeitada e de grande poder ",
           },
        ]
    },
    {
         enunciado:"Você se perdeu na floresta e está procurando um abrigo e se depara entre uma caverna e uma grande árvore porém enquanto decide o que fazer você ver um raio dourado caindo seguido de um grande estrondo, você...?",
         alternativas:[
            { 
              texto: "Sabendo do que se trata e que naõ há perigo maior que ficar lá fora, você corre para dentro da caverna como se não houvesse amanhã",
            afirmação: "Ainda bem que você correu como se não houvesse amanhã pois em seguida em pé gigante pisa onde você estava, assim confirmando suas suspeitas",   
            },
            {
              texto: "Escalaria a árvore para saber o que está acontecendo",
            afirmação:"Assim que termina de subir a árvore você olha em volta não vendo nada porém quando estava descndo sua visão é tampada por uma grande somnbra e antes que possa olhar para trás você é pego por uma grande mão e é devorando pelo o que parece ser um humano gigante",
            },
        ]
    },
    {
         enunciado:"Você conseguiu sair da floresta porem tromba com um cara suspeito com uma mascara de mãos e ele está te observando detalhadamente, o que você faria?",
         alternativas:[
            {   
             texto: "Você gritaria por ajuda para o menino fantasiado de verde do outro lado da rua ",
            afirmação: "Voê é burro e diga adeua a sua vida pois o menino fantasiado está muito longe", 
            },
            {
             texto: "Se curva e pede mil desculpas e segue em frente",
            afirmação: "Você o reconhece de algum lugar e com amor a sua vida segue sem olhar para trás",    
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


