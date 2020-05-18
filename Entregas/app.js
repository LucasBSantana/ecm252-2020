//pontuacao dos jogadores
var pontuacao = [0, 0];
//pontuacao da rodada atual
var pontuacaoRodada = 0;
//jogador atual
var jogadorAtual = 0;

//document.querySelector('#pontuacao-rodada-0').textContent = dado;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');

var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];

botaoLancarDado.addEventListener("click", function () {
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado == 1) {
        pontuacao[jogadorAtual] = 0;
        pontuacoesRodadas[jogadorAtual].textContent = 0;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual;
    }
    else {
        pontuacao[jogadorAtual] += dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesRodadas[jogadorAtual].textContent = dado;
        if (pontuacoesGlobais[jogadorAtual] >= 100){
            //Codigo para lancar modal (fiquei sem tempo)
        }
    }
})

botaoPassarVez.addEventListener("click", function (){jogadorAtual = 1 - jogadorAtual;})

botaoNovoJogo.addEventListener("click", function () {
    pontuacoesRodadas[0].textContent = 0;
    pontuacoesRodadas[1].textContent = 0;
    pontuacao[0] = 0;
    pontuacao[1] = 0;
    pontuacoesGlobais[0].textContent = pontuacao[0];
    pontuacoesGlobais[1].textContent = pontuacao[1];

    var starter = Math.round(Math.random() * 10);

    if(starter >= 5) {
        jogadorAtual = 1;
    }
    else {
        jogadorAtual = 0;
    }
})
