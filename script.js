const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você saiu para comer em um restaurante Italiano, abriu o cardápio e essa são as suas opções de entrada, qual escolherá?",
        alternativas: [
            {
                texto: "Desejo comer um Raviolli",
                afirmacao: "Otima escolha!"
            },
            {
                texto: "Poderia ser uma Tábua com stracciatella",
                afirmacao: "Na tábua tinha um cabelo, mas estava gostoso"
            }
        ]
    },
    {
        enunciado: "O garçom pegunta o que você deseja beber, essas são as suas opções",
        alternativas: [
            {
                texto: "Água",
                afirmacao: "O garçom te julgou por ser muitosimples mas mesmo assim trouxe"
            },
            {
                texto: "Pepsi",
                afirmacao: "O garçom trouxe e cuspiu na sua cara porque ele prefere Coca-Cola"
            }
        ]
    },
    {
        enunciado: "Agora você terá que pedir a refeição principal",
        alternativas: [
            {
                texto: "Macarrão carbonara",
                afirmacao: "O garçom olha e fala resmungando: Até que a vaca tem bom gosto"
            },
            {
                texto: "Uma pizza margherita",
                afirmacao: "Ele manda preparar, mas na cozinha antes de te entregar gospe na pizza mas o que os olhos não veem o coração não sente. Você come e acha uma delicia"
            }
        ]
    },
    {
        enunciado: "Agoraa hora da sobremesa, escolha um:",
        alternativas: [
            {
                texto: "gelatto de chocolate",
                afirmacao: "Estava bom, mas você congela a cabeça e desmaia por 10 minutos e paga umataxa porter desmaiado e causado um tumutuo"
            },
            {
                texto: "Escolhe não comer pois a conta já está cara",
                afirmacao: "Todos te humilham falando pobre...,pobre...,pobre...,pobre..."
            }
        ]
    },
    {
        enunciado: "Você tem a opção de dar gorjeta",
        alternativas: [
            {
                texto: "Aceita",
                afirmacao: "O gorçom é gentil e decide pagarsua conta"
            },
            {
                texto: "recusar",
                afirmacao: "O garçom pega uma cadeirae taca na sua cabeça"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
