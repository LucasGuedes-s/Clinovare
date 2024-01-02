function obterDados(){
    const url = "https://jsonplaceholder.typicode.com/users"; // Define a URL da API do IBGE para obter dados de nomes
    let req = new XMLHttpRequest(); // Inicializa uma nova requisição HTTP
    req.open("GET", url); // Abre uma conexão para fazer uma solicitação GET na URL especificada
    req.responseType = "json"; // Define o tipo de resposta esperada como JSON
    req.send(); // Envia a solicitação HTTP

    req.onload = function(){ // Define um evento a ser executado quando a requisição for carregada com sucesso
        let users = req.response; // Armazena a resposta da requisição na variável 'users'
        console.log(users); // Exibe os dados recebidos no console
        exibirDados(users)
    }
}

function exibirDados(jsonObj){
    //console.log(jsonObj); // Exibe a lista de usuários no console

    let usuarios = jsonObj; // Extrai a propriedade 'data' do objeto JSON recebido e armazena em 'usuarios'
    console.log(usuarios); // Exibe a lista de usuários no console

    usuarios.forEach(element =>{ // Itera sobre cada elemento da lista 'usuarios'
        let usuarioDiv = document.createElement('div');
        usuarioDiv.innerHTML = `
        <p>ID: ${element.id}</p>
        <p>Nome: ${element.name}</p>
        <p>Email: ${element.email}</p>
        <input type="button" value="chamar">
        <p>---------------------------------</p>`;  
    document.getElementById('listaUsuarios').appendChild(usuarioDiv);

    });
}

obterDados()