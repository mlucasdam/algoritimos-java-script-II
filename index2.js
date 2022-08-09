const listaLivros = require('./livros')

function mergeSort(arr){
    if(arr.length > 1){
        const midle = Math.floor(arr.length/2);
        const pt1 = mergeSort(arr.slice(0, midle));
        const pt2 = mergeSort(arr.slice(midle, arr.length));
        arr = ordena(pt1,pt2);
    }

    return arr;
}

function ordena(pt1, pt2){
    let posicaoAtualpt1 = 0;
    let posicaoAtualpt2 = 0;
    const resultado = [];

    while (posicaoAtualpt1 < pt1.length && posicaoAtualpt2 < pt2.length){
        let produtoAtualpt1 = pt1[posicaoAtualpt1];
        let produtoAtualpt2 = pt2[posicaoAtualpt2];

        if (produtoAtualpt1.preco < produtoAtualpt2.preco){
            resultado.push(produtoAtualpt1);
            posicaoAtualpt1++;
        } else{
            resultado.push(produtoAtualpt2);
            posicaoAtualpt2++;
        }
    }

    return resultado.concat (posicaoAtualpt1 < pt1.length ? pt1.slice(posicaoAtualpt1) : pt2.slice(posicaoAtualpt2))
}





console.table(mergeSort(listaLivros));


