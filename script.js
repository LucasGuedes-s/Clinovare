function obterDados(){
    const url = "https://servicodados.ibge.gov.br/api/v2/censos/nomes"; // Define a URL da API do IBGE para obter dados de nomes
    let req = new XMLHttpRequest(); // Inicializa uma nova requisição HTTP
    req.open("GET", url); // Abre uma conexão para fazer uma solicitação GET na URL especificada
    req.responseType = "json"; // Define o tipo de resposta esperada como JSON
    req.send(); // Envia a solicitação HTTP

    req.onload = function(){ // Define um evento a ser executado quando a requisição for carregada com sucesso
        let users = req.response; // Armazena a resposta da requisição na variável 'users'
        console.log(users); // Exibe os dados recebidos no console
        //exibirDados(users)
    }
}

function exibirDados(jsonObj){
    //console.log(jsonObj); // Exibe a lista de usuários no console

    let usuarios = jsonObj.data; // Extrai a propriedade 'data' do objeto JSON recebido e armazena em 'usuarios'
    console.log(usuarios); // Exibe a lista de usuários no console

    usuarios.forEach(element =>{ // Itera sobre cada elemento da lista 'usuarios'
        //element.id; // Acessa a propriedade 'id' do elemento (não utilizado)
        document.body.innerHTML += `ID:${element.id} </br>`; // Adiciona o ID do elemento ao corpo do documento HTML
        document.body.innerHTML += `Nome:${element.first_name} </br>`; // Adiciona o nome do elemento ao corpo do documento HTML
        document.body.innerHTML += `--------------------------------- </br>`; // Adiciona o nome do elemento ao corpo do documento HTML

    });
}
/*function teste(){
  console.log('Teste realizado')
}

teste()*/

obterDados()