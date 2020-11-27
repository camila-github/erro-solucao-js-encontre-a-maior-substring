//SOLUÇÃO 1
/*Leitura dos gets, duas linhas por vez*/
let getsUm = gets();
while (getsUm != '') {
    let getsDois = gets();
    /*chama a função e imprime o resultado*/
    resultadoMaiorString = maiorString(getsUm, getsDois);
    console.log(resultadoMaiorString);
    getsUm = gets();
}

function maiorString(strUm, strDois) {
    /*leitura da 'strUm' de traz para frente*/
    for (let tamanhoStr = strUm.length; tamanhoStr >= 0; tamanhoStr--) {
        /*leitura da 'strUm' de frente para traz*/
        for (let i = 0; i + tamanhoStr <= strUm.length; i++) {
            /*procura parte da string, inicia no índice informado (let i) e 
            estendendo-se por um determinado número de caracteres informado no 'let tamanhoStr'*/
            var procurarSubString = strUm.substr(i, tamanhoStr);
            /*Procura a posição do indice da subString iniciando a procura na posição 0.
            retorna -1 se nao achar.*/
            var idxString = strDois.indexOf(procurarSubString, 0);
            /*Se achar a subString, retorna a subString informado no 'tamanhoStr'*/
            if (idxString >= 0) return tamanhoStr;
        }
    }
    return 0;
}



//SOLUÇÃO 2 - Resumido
/*Leitura dos gets, duas linhas por vez. Chama a função e imprime o resultado*/
while ((getsUm = gets()) != '') console.log(maiorString(getsUm, gets()));

function maiorString(strUm, strDois) {
    /*leitura da 'strUm' de traz para frente*/
    for (tamanhoStr = strUm.length; tamanhoStr >= 0; tamanhoStr--) {
        /*leitura da 'strUm' de frente para traz*/
        for (i = 0; i + tamanhoStr <= strUm.length; i++) {
            /*(strUm.substr(i, tamanhoStr) : procura parte da string, inicia no índice informado (i) e 
            estendendo-se por um determinado número de caracteres informado no 'tamanhoStr'.
            /*(strDois.indexOf((strUm.substr(i, tamanhoStr)), 0) : Procura a posição do indice da 
            subString iniciando a procura na posição 0.
            /* return tamanhoStr : retorna -1 se nao achar.Se achar a subString, retorna a quantidade 
            da substring*/
            if ((strDois.indexOf((strUm.substr(i, tamanhoStr)), 0)) >= 0) return tamanhoStr;
        }
    }
    return 0;
}