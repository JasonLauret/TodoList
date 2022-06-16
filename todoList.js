// Selecteur
const todoChamp = document.querySelector(".todo-champ");
const todoBouton = document.querySelector(".todo-bouton");
const todoListe = document.querySelector(".todo-liste")

// Ecouteur
todoBouton.addEventListener("click", addTodo);
todoListe.addEventListener("click", deleteAndCheck)

// Function
function addTodo(event){
    event.preventDefault();
    //TODO Div
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    //Créer le li
    const newElement = document.createElement("li");
    newElement.innerText = todoChamp.value;
    newElement.classList.add("newItem");
    newDiv.appendChild(newElement);
    //Bouton fait
    const boutonFait = document.createElement("button");
    boutonFait.innerHTML = '<button class="voir"><i class="fa-solid fa-check"></i></button>';
    boutonFait.classList.add("btn-fait");
    newDiv.appendChild(boutonFait);
    //Bouton supprimer
    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerHTML = '<button class="supprimer"><i class="fa-solid fa-trash"></i></button>';
    boutonSupprimer.classList.add("btn-supprimer");
    newDiv.appendChild(boutonSupprimer);
    //Ajouter notre todo a todo-list
    todoListe.appendChild(newDiv);
    //Réinialisé le champ après envoie
    todoChamp.value = "";
}

function deleteAndCheck(e){
    const item = e.target;
    // Voir todo
    if(item.classList[0] === "btn-fait"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    // Supprimer todo
    if(item.classList[0] === "btn-supprimer"){
        const todo = item.parentElement;
        todo.remove();
    }
}
