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
const manipularDadosJSON = function(){
    //Criando um objeto JSON
        //A estrutura do JSON é Chave (atributo) : Valor(conteúdo)
    let aluno = {"id": 1, "nome":"Shaolin Matador de Porco", "ra": 123456, "email":"Shaolin@gmail.com"}

    //Exibe  objeto JSON
    console.log(aluno)
    console.table(aluno)

    aluno.telefone = "(11) 4002-8922"
    aluno.data_nascimento = '11/09/2010'

     //Exibe o conteúdo de um atributo do JSON
     console.log(aluno.nome, "🤙")
     console.log(aluno.email)

    console.log(aluno)
    console.table(aluno)

    delete aluno.email
    console.log(aluno)

    aluno.ra = 123456789
    console.log(aluno)

    aluno.nota = null
    console.log(aluno)
}
const cadastroDeProdutos= function(){ 
    let cores =[
        
            {"id":1, "cor":"Branco", "Hexa": "#ffffff"}, //0
            {"id":2, "cor": 'Preto', "Hexa": "000000"}, //1
            {"id":3, "cor": 'Azul', "Hexa": "0000ff"}, //2
            {"id":4, "cor": 'Amarelo', "Hexa": "ffff00"}, //3
            {"id":5, "cor": 'Rosa', "Hexa": "ffb5c0"}, //4
               ]
               //console.log(cores[2].cor)

               cores.forEach(function(itemCor){
                console.log(itemCor.cor)
               })

               console.log("----------------------------------------------")

               for(cor in cores){
                console.log(cores[cor].cor)
               }

               let marcas =[
        
                {"id":1, "marca":"Maça velha mordida", "telefone":"(11) 92012-2133", "email":"maça@gmail.com"},//0
                {"id":2, "marca": 'Samsungo', "telefone":"(11) 96490-9001", "email":"sansungo@gmail.com"},//1
                {"id":3, "marca": 'Xing-ling', "telefone":"(11) 92444-9849", "email":"xingling@gmail.com"},//2
                {"id":4, "marca": 'Moto e rola', "telefone":"(11) 97392-2133", "email":"rola@gmail.com"},//3
                {"id":5, "marca": 'Positivo 👍', "telefone":"(11) 72392-1234", "email":"joia@gmail.com"},//4
                {"id":6, "marca": 'LG', "telefone":"(11) 98323-0923", "email":"real@gmail.com"}//5
                   ]

                   console.table(marcas)
                   for(marca in marcas){
                    console.log(marcas[marca].marca)
                }

                   console.log("----------------------------------------------")



                let produtos = [

                    {
                        "id":1,
                        "Produto":"Celular",
                        "Modelo":"Iphone 12",
                        "Valor":"R$ 2000,59",
                        "Quantidade":90,
                        "Cor": [
                            cores[2],
                            cores[4]],
                        "Marca": [marcas[0].marca]},

                    {
                        "id":2,
                        "Produto":"Celular",
                        "Modelo":"Samsung Galaxy Pro",
                        "Valor":"R$ 230,59", 
                        "Quantidade":290,
                        "Cor": [
                            cores[0],
                            cores[1],
                            cores[2],
                            cores[3],
                            cores[4],],
                        "Marca": [marcas[1].marca]},




                    {
                        "id":3,
                        "Produto":"Celular",
                        "Modelo":"Xiaomi 17 Pro" ,
                        "Valor":"R$ 1230,59",
                        "Quantidade":400,
                        "Cor": [
                            cores[1], 
                            cores[0]],
                        "Marca": [marcas[2].marca]},
                    
                ]
                console.table(produtos)

                   console.log("----------------------------------------------")

                produtos.forEach(function(listarTudo){
                    console.log("----------------------------------------------")
                    console.log(`ID: ${listarTudo.id}`)
                    console.log(`Produto:  ${listarTudo.Produto}`)
                    console.log(`Modelo:  ${listarTudo.Modelo}`)
                    console.log(`Valor: ${listarTudo.Valor}`)
                    console.log(`Quantidade: ${listarTudo.Quantidade}`)
                    listarTudo.Cor.forEach(function(itemCor){
                        console.log(`Cor: ${itemCor.cor}`)
                    })
                    listarTudo.Marca.forEach(function(itemMarca){
                        console.log(`Marca: ${itemMarca}`)
                    })
                    console.log("----------------------------------------------")

                })
  
}


cadastroDeProdutos()
//manipularDadosJSON()
//verificarItem('Marcelinho do grau')
//console.table(listaDeFornecedores)
//removerItem('Jose')
//



