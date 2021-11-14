## Exercicio - Encontre a maior substring

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Introdução a busca e substituição em JavaScript. [https://digitalinnovation.one](https://digitalinnovation.one)


#### Descrição do Desafio:

Encontre a maior substring comum entre as duas strings informadas. A substring pode ser qualquer parte da string, inclusive ela toda. Se não houver subseqüência comum, a saída deve ser “0”. A comparação é case sensitive ('x' != 'X').


#### Entrada:

A entrada contém vários casos de teste. Cada caso de teste é composto por duas linhas, cada uma contendo uma string. Ambas strings de entrada contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').


#### Saída:

O tamanho da maior subsequência comum entre as duas Strings.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
abcdef | 2
cdofhij | 1
TWO | 0
FOUR | 7
abracadabra |
open |
Hey This java is hot |
Java is a new paradigm |


```javascript
//SOLUCAO 1
const maiorString = (strUm, strDois) => {
    //leitura da 'strUm' de traz para frente
    for (let tamanhoStr = strUm.length; tamanhoStr >= 0; tamanhoStr--) {
       //leitura da 'strUm' de frente para traz
        for (let i = 0; i + tamanhoStr <= strUm.length; i++) {
            /*(strUm.substr(i, tamanhoStr) : procura parte da string, inicia no índice informado (i) 
            e estendendo-se por um determinado número de caracteres informado no 'tamanhoStr'.
            /*(strDois.indexOf((strUm.substr(i, tamanhoStr)), 0) : Procura a posição do indice 
            da subString iniciando a procura na posição 0.
            /* return tamanhoStr : retorna -1 se nao achar.Se achar a subString, retorna 
            a quantidade da substring*/
            if ((strDois.indexOf((strUm.substr(i, tamanhoStr)), 0)) >= 0) return tamanhoStr;
        }
    }
    return 0;
}   
/*Leitura dos gets, duas linhas por vez. Chama a função e imprime o resultado*/
while((primeiraLinha = gets()) != '') console.log(maiorString(primeiraLinha, gets())); 

//SOLUCAO 2
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
```
