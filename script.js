function obterDados(){
    const url = "https://servicodados.ibge.gov.br/api/v2/censos/nomes"
    let req = new XMLHttpRequest()
    req.open("GET", url)
    req.responseType = "json"
    req.send()
    req.onload = function(){
        let users = req.response
        console.log(users)
    }
}

function exibirDados(jsonObj){
    let usuarios = jsonObj.data
    console.log(usuarios)
    //usuarios.forEach(element =>{
    //    element.id
        //document.body.innerHTML += `ID:$(element.id) </br>`
        //document.body.innerHTML += `Nome:$(element.first_name) </br>`
//})
}

function enviarDados(){
    const form = document.getElementById("formUser")

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data)

    fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes',{
        method:'POST',
        headers:{
            /* 'Content-Type: application/json' */
        },
    body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
}

function teste(){
    console.log('Chegando')
}