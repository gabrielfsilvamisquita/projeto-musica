$(function(){
    //Botão de Gerar
    $("#gerar").click(function(){
        GerarSonata();
    });
});

function GerarSonata(){
    //Pegando as notas do Input
    let notas = [];
    notas = $("#notas").val();

    let tempos = [2, 4, 4, 8]; //Todos os tipos de compasso

    //Gera o tema 1 e 2 e armazena
    let tema01 = compass(notas, tempos[random(4)]);
    let tema02 = compass(notas, tempos[random(4)]);

    //Mostra visualmente toda a música 
    $("#musica").html("");
    $("#musica").append(
        '𝄞 ' + '⁴⁄₄  ' + tema01 + ' 𝄀 ' + tema02 + ' 𝄇 ' + compass(notas, tempos[random(4)]) + ' 𝄀 '  + tema01 + ' 𝄀 ' + tema02 + ' 𝄀 ' + compass(notas, 1) + ' 𝄂'
    );
}


//MINI BIBLIOTECA
function compass(notas, quantidade){
    //Cria um compasso de notas
    let tema = [];
    for(let i = 0; i < quantidade; i++){
        tema[i] = notas[random(notas.length)]; //aleatorio
    }
    return tema;
}
function random(quantidade){
    //Gera um número aleatório
    return parseInt(Math.random() * quantidade);
}