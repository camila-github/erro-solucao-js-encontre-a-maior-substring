//SOLUCAO 1
const maiorString = (strUm, strDois) => {
    for (let tamanhoStr = strUm.length; tamanhoStr >= 0; tamanhoStr--) {
        for (let i = 0; i + tamanhoStr <= strUm.length; i++) {
            if ((strDois.indexOf((strUm.substr(i, tamanhoStr)), 0)) >= 0) return tamanhoStr;
        }
    }
    return 0;
}   

while((primeiraLinha = gets()) != '') console.log(maiorString(primeiraLinha, gets())); 

//SOLUCAO 2
let getsUm = gets();
while (getsUm != '') {
    let getsDois = gets();
    resultadoMaiorString = maiorString(getsUm, getsDois);
    console.log(resultadoMaiorString);
    getsUm = gets();
}

function maiorString(strUm, strDois) {
    for (let tamanhoStr = strUm.length; tamanhoStr >= 0; tamanhoStr--) {
        for (let i = 0; i + tamanhoStr <= strUm.length; i++) {
            var procurarSubString = strUm.substr(i, tamanhoStr);
            var idxString = strDois.indexOf(procurarSubString, 0);
            if (idxString >= 0) return tamanhoStr;
        }
    }
    return 0;
}