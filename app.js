
const btnAddJogar = document.getElementById("jogar");


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function verOpcao(){
    const escolha = document.getElementsByName("opcoes");
    console.log(escolha[0].checked);
    if(escolha[0].checked == true){
        return "par";
    }else{
        return"impa";
    }
}

btnAddJogar.onclick = function(e) {
    e.preventDefault()
    const valorInput = document.getElementById("numerojogador01");
    
    let valorescolha = verOpcao();
    console.log(valorescolha);
    //============================
    let valorJogador01 = parseInt(valorInput.value, 10);
    console.log(typeof valorJogador01);
    alert("O numero que voce jogou:  " + valorJogador01);
    let valorJogador02 = getRandomInt(1,5);
    alert("Numero do jogador 02:  " +valorJogador02);
    let soma = valorJogador01 + valorJogador02;
    //alert("soma = "+ soma);
    if(soma%2 ==0 && valorescolha == "par"){
        alert("Voce foi o ganhado!!!");
    } else if (soma%2 !=0 && valorescolha == "impa") {
        alert("Voce foi o ganhado!!!");
    } else {
        alert("A maquina ganhou!!!");
    }


}








