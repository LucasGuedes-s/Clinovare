function obterDados(){
    const url = "https://jsonplaceholder.typicode.com/users"; 
    let req = new XMLHttpRequest(); // Inicializa uma nova requisição HTTP
    req.open("GET", url); // Abre uma conexão para fazer uma solicitação GET na URL especificada
    req.responseType = "json"; // Define o tipo de resposta esperada como JSON
    req.send(); // Envia a solicitação HTTP

    req.onload = function(){ // Define um evento a ser executado quando a requisição for carregada com sucesso
        let users = req.response; // Armazena a resposta da requisição na variável 'users'
        //console.log(users);
        exibirDados(users)
    }
}

function exibirDados(jsonObj){
    let usuarios = jsonObj;
    //console.log(usuarios);

    usuarios.forEach(element =>{ // Itera sobre cada elemento da lista 'usuarios'
      
        let usuarioDiv = document.createElement('div'); //Criação de uma nova DIV
        usuarioDiv.classList.add('usuarioInfo'); //Adição de uma classe a essa div
      
        usuarioDiv.innerHTML = `
        <p>ID: ${element.id}</p>
        <p>Nome: ${element.name}</p>
        <p>Email: ${element.email}</p>
        <p>---------------------------------</p>
        <input type="button" value="Confirmar presença">`;  
    document.getElementById('listaUsuarios').appendChild(usuarioDiv);

    });
}

function enviarDados() {
  const formulario = document.getElementById('01');
    
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
    .then(response => response.json()).then(data => console.log(data));
}

obterDados();
enviarDados(); 
