const listaLivros = require ('./livros')

function quickSort (arr, esq, dir){
    if (arr.length > 1){
        let varTemp = particiona (arr, esq, dir)
    }




    return arr
}

function particiona (arr, esq, dir){
    let pivo = arr[Math.floor((esq+dir)/2)]
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))