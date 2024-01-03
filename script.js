 function obterDados() {
  const url = "https://jsonplaceholder.typicode.com/users";
  let req = new XMLHttpRequest();
  req.open("GET", url);
  req.responseType = "json";
  req.send();

  req.onload = function () {

    let users = req.response;
    console.log(users);
    exibirDados(users);
  };
}

function exibirDados(jsonObj) {
  let usuarios = jsonObj;

  usuarios.forEach((element) => {


    let usuarioDiv = document.createElement("div");
    usuarioDiv.classList.add("usuarioInfo");

    usuarioDiv.innerHTML = `
        <p>ID: ${element.id}</p>
        <p>Nome: ${element.name}</p>
        <p>Email: ${element.email}</p>
        <p>---------------------------------</p>
      <input class="button-confirmar" type="button" value="Confirmar presença" onclick="confirmacao()">`;
    document.getElementById("listaUsuarios").appendChild(usuarioDiv);
  });
}

function enviarDados() {
  const formulario = document.getElementById("formUser");
  const formData = new FormData(formulario);

  const data = Object.fromEntries(formData);
  console.log(data);

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  alert('Atendimento solicitado')
}

function autenticar(){
  const form = document.getElementById("autenticacao");
  const formData = new FormData(form);
  let data = Object.fromEntries(formData);
  
  if (data.identificador == 'admin' && data.senha == '123'){
          console.log('Logado')
          window.location.href = "solicitacoes.html";
  }
  else{
    alert('Usuário ou senhas invalidos')
  }
}

function confirmacao() {
  alert(`A mensagem chegará ao usuário via E-mail`);
  const data = prompt("Digite a confirmação da data para enviar ao solicitante")
  alert(`Confirmado para a data ${this.data}`);
}
