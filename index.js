const {editoraGalho, editoraFolha} = require ('./livros')

function juntaListas (lista1, lista2){
    let listaFinal = [];
    let poAtualLista1 = 0;
    let poAtualLista2 = 0;
    let atual = 0;


    
    while (poAtualLista1 < lista1.length && poAtualLista2 < lista2.length){
        let pdtAtualLista1 = lista1[poAtualLista1];
        let pdtAtualLista2 = lista2[poAtualLista2];
        // console.log(`comparando ${pdtAtualLista1.titulo} com ${pdtAtualLista2.titulo}`)

        if (pdtAtualLista1.preco < pdtAtualLista2.preco){
            listaFinal[atual] = pdtAtualLista1;
            poAtualLista1++;
        }
        else {
            listaFinal[atual] = pdtAtualLista2;
            poAtualLista2++;
        }
       atual++
    }
    while (poAtualLista1 < lista1.length){
        listaFinal[atual] = lista1[poAtualLista1];
        poAtualLista1++;
        atual++;
    }
    while (poAtualLista2 < lista2.length){
        listaFinal[atual] = lista2[poAtualLista2];
        poAtualLista2++;
        atual++;
    }

    return listaFinal;
}

console.log(juntaListas(editoraGalho, editoraFolha))