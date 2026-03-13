/***************
 * 
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * autor: Kaique
 * Versão: 1.0
 */


/* [] --> representa um objeto do tipo array
   {} --> representa um objeto tipo json

   Array -> é um objeto na memória que permite tranalhar com varios valores 
            em um único objeto

        let nome    = 'jose'
        let nome2   = 'maria'
        let nom3    = 'carlos'

                indice      0       1        2
        let nome    =   ['jose', 'maria', 'carlos']        

    JASON -> É um objeto na memoria que permite trabalhar com chave e valor

    let nome     =   'jose'
    let telefone =   '1234567'
    let email    =   'jose@gmail.com'


    let cliente = { 'nome': 'jose'
                    'telefone': '1234567'
                    'email': 'jose@gmail.com'
    
    }
*/
//exibe um nome 
const listaDeNome = ['Jose', 'Maria', 'Joao', 'Andre', 'Alex'] // Ja Atribuindo os valores dentro dele
const listaDeClientes = []   // Atribuindo valores conforme o tempo
const listaDeFornecedores = []

const exibirDados = function () {
    //Exibe o objeto array e seu conteúdo
    console.table(listaDeNome)  // Exibe o array em formato em tabela em indices

    console.log(listaDeNome[1]) // Exibe apenas o valor do respectivo do indic do array


//---------------------------------------------------------------------------------------------------------------------------

    console.log(typeof (listaDeNome[3])) // Retorna oo tipo de dados de um indice do array

    console.log(`O nome do cliente é: ${listaDeNome[0]}`)
    console.log(`O nome do cliente é: ${listaDeNome[1]}`)
    console.log(`O nome do cliente é: ${listaDeNome[2]}`)
    console.log(`O nome do cliente é: ${listaDeNome[3]}`)
    console.log(`O nome do cliente é: ${listaDeNome[4]}`)

    //Estruturas de repetição
    //while

    console.log('------[WHILE]--------')
    let cont = 0
    while (cont <= 4) {
        console.log(`O nome do cliente é ${listaDeNome[cont]}`)
        cont += 1
    }

    console.log('------[FOR]--------')
    
    for (let contador = 0; contador < listaDeNome.length; contador++) {
        console.log(`O nome do cliente é ${listaDeNome[contador]}`)
    }


    console.log('------[FOR EACH]--------')

    listaDeNome.forEach(function(cliente){  // Retorna o conteudo de cada elemento através de uma Call Back

        console.log(`O nome do cliente é ${cliente}`)

    })

    console.log('------[FOR IN]--------') // Retorna o Indice do elemento, e será preciso colocar dentro do array
    //  Ex: listaNome[item] Pratiamente igual ao For e While
                                                
    for(item in listaDeNome){
        console.log(`O nome do cliente é ${listaDeNome[item]}`)
        
    }


    //Percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido com o ForEach
    console.log('------[FOR Off]--------')

    for(cliente of listaDeNome){
        console.log(`O nome do cliente é ${cliente}`)
        
    }


    console.log(listaDeNome.length)  // Para saber quantas entidades tem dentro de um
}
const manipularDados = function(){
    //Adicionando Valores novos no array através de indices
    listaDeClientes[0]= 'Jose da Silva'
    listaDeClientes[1]= 'Maria da Silva'
    listaDeClientes[2]= 'João da Silva'
    listaDeClientes[4]= 'Alex da Silva' 
    console.log(listaDeClientes)

    //Permite adicionar novos valores no array sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luisinho da Silva','Andre da Silva', 'Carlos da Silva')

    console.log(listaDeFornecedores)


// o unshift sempre add novos valores sempre no inicio da lista
listaDeFornecedores.unshift('Lilian cardosa')
console.table(listaDeFornecedores)


// Ele remove elementos do final da lista
listaDeFornecedores.pop()
console.table(listaDeFornecedores)

// Permite remover o primeiro elemento da lista
// Após ele remover, ira reorganizar todos os elementos
listaDeFornecedores.shift()
console.table(listaDeFornecedores)

//Permite adicionar um novo elemento em uma determinada posição do ARRAY
    //Splice(indice, qtde de elementos a ser removido, 'novo conteúdo')

listaDeFornecedores.splice(3,0, "Ney")

console.table(listaDeFornecedores)

// permite remover um elemento baseado no indice da lista
// splice (indice, qtde elementos)
listaDeFornecedores.splice(2,1)
console.table(listaDeFornecedores)

}
const removerItem = function(nome){

    listaDeNome.splice(listaDeNome.indexOf(nome,1))
}

const verificarItem = function(nome){
    //Verifica se o conteúdo existe dentro do ARRAY e retorna (True/False)
    console.log(listaDeNome.includes(nome))
}

verificarItem('Marcelinho do grau')
//console.table(listaDeFornecedores)
//removerItem('Jose')
//



