
onload = function() {
    let tarefas_local = JSON.parse(localStorage.getItem("listarefas"))

    if (tarefas_local){
        for (let index = 0; index < tarefas_local.length; index++) {

            let divtarefa = document.createElement('div')
            var li = document.createElement("li");
            li.textContent = tarefas_local[index];

            divtarefa.setAttribute('id',"divul")

            let icon = document.createElement('img')
            let pos = tarefas_local.indexOf(index)

            icon.setAttribute('onclick', `deletatarefa(${pos})`)
            icon.setAttribute('src', '../lista js/img/lixeira.png')

            divtarefa.appendChild(li)
            li.appendChild(icon)

            tarefas.unshift(tarefas_local[index])
            lista.appendChild(li)
        }
    }
}


const lista = document.getElementsByTagName("ul")[0]
const input = document.getElementsByTagName("input")[0]
const botao = document.querySelector("button")

const tarefas = []

function mostrartarefas(){

    lista.innerHTML = ""

    for (tarefa of tarefas) {

        const divtarefa = document.createElement('div')
        const litarefa = document.createElement('li')
        const textli = document.createTextNode(tarefa)

        divtarefa.setAttribute('id',"divul")

        let icon = document.createElement('img')
        const pos = tarefas.indexOf(tarefa)

        icon.setAttribute('onclick', `deletatarefa(${pos})`)
        icon.setAttribute('src', '../lista js/img/lixeira.png')

        divtarefa.appendChild(litarefa)
        litarefa.appendChild(textli)
        lista.appendChild(divtarefa)
        litarefa.appendChild(icon)
    }
}


function addtarefa() {
    const textipt = input.value

    if(textipt == null || textipt == ""){
        alert("Insira um item")}
    else {
    tarefas.unshift(textipt)
    input.value = ""

    mostrartarefas()

    savestorage()
    }
}

botao.addEventListener("click", addtarefa)

function deletatarefa(pos) {
    tarefas.splice(pos, 1)
    mostrartarefas()
    savestorage()
}

function savestorage(){
    localStorage.setItem("listarefas", JSON.stringify(tarefas))
}