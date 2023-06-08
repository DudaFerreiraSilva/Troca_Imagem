var botao = document.getElementById('clique');
botao.onclick = function(){
    if(botao.value === 'troca'){
        pers1.src = 'Troca_Imagem/imagem/casepika.jpg';
        botao.value = 'Retornar';
        botao.innerHTML = '(Voltar)';
    }else{
        pers1.src = 'Troca_Imagem/imagem/FHLnYPZX0AUNKd3.jpg';
        botao.value = 'troca';
        botao.innerHTML = '(Trocar)';
    }
}