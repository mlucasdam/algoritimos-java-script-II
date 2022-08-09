const listaLivros = require ('./livros')

function encontraMenor(pivo, arr){
    let menores = 0;

    for (let i = 0; i < arr.length; i++){
        produtoAtual = arr[i];
        if (produtoAtual.preco < pivo.preco){
            menores++;
        }
    }


    trocaLugar (arr, arr.indexOf(pivo), menores)
    return arr
}

function trocaLugar(arr, from, to){
    const elem1 = arr[from];
    const elem2 = arr[to];

    arr[to] = elem1;
    arr[from] = elem2;
}

function dividePivo(arr){
    let pivo = arr[Math.floor(arr.length/2)];
    let valorMenor = 0;
    console.log(pivo)
    encontraMenor(pivo, arr);

    for (let i = 0; i<arr.length; i++){
        let atual = arr[i];

        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(arr, i, valorMenor);
            valorMenor++;
        }

    }
    return arr;
}


// console.log(dividePivo(listaLivros))
// console.log(encontraMenor(listaLivros[2], listaLivros))

module.exports = trocaLugar;