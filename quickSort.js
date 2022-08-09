const listaLivros = require ('./livros')
const trocaLugar = require('./encontraMenor');

function quickSort (arr, esq, dir){
    if (arr.length > 1){
        let indiceAtual = particiona (arr, esq, dir);
        if (esq < indiceAtual - 1){
            quickSort(arr,esq,indiceAtual - 1);
        }
        if (indiceAtual < dir){
            quickSort(arr,indiceAtual,dir)
        }
    }
    return arr
}

function particiona (arr, esq, dir){
    let pivo = arr[Math.floor((esq+dir)/2)]
    let atualEsq = esq;
    let atualDir = dir;

    while (atualEsq <= atualDir){
        while(arr[atualEsq].preco < pivo.preco){
            atualEsq++;
        }

        while(arr[atualDir].preco > pivo.preco){
            atualDir--;
        }

        if (atualEsq <= atualDir){
            trocaLugar(arr, atualEsq, atualDir);
            atualEsq++;
            atualDir--;
        }
    }
    return atualEsq;
}

console.table(quickSort(listaLivros, 0, listaLivros.length - 1))