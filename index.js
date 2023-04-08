let addButton = document.getElementById('addTodo');
let inputBox = document.getElementById('inputBox');
let todoList = document.getElementById('todoList');

addButton.addEventListener('click', function(){

const todoValue = inputBox.value

if(todoValue){

  const listItem = document.createElement('div')
  listItem.className = 'list-split' 

  const paragraph = document.createElement('P')
  paragraph.innerText = todoValue
  
  //to clear input box
  inputBox.value = '';

  listItem.appendChild(paragraph);
  todoList.appendChild(listItem)

  // completeButton
  var completeButton = document.createElement("button");
    completeButton.innerText = 'completed'
    completeButton.addEventListener('click', function(e){
        paragraph.style.textDecoration = 'line-through';
    })
    listItem.appendChild(completeButton);

    // delete Button
    var deleteButton = document.createElement("button");
    deleteButton.innerText = 'delete'
    deleteButton.addEventListener('click', function(e) {
       e.target.parentNode.remove();

      })
      listItem.appendChild(deleteButton);

      // edit BUTTON
    const editButton = document.createElement("button");
    editButton.innerText = "edit"

    editButton.addEventListener("click", (e) =>{
      var editDiv = document.createElement('div')
      editDiv.className = 'editItem'
      var editInput = document.createElement('input')
      editInput.value = e.target.parentNode.firstChild.innerText;
      e.target.parentNode.firstChild.innerText = ""
      var saveButton = document.createElement('button')
      saveButton.innerText = 'save';
      
      saveButton.addEventListener('click', function(e){
        // get new value
        const newValue = e.target.parentNode.firstChild.value;
        e.target.parentNode.parentNode.innerText = newValue;
        e.target.parentNode.remove();
      })

      editDiv.appendChild(editInput);
      editDiv.appendChild(saveButton);

      e.target.parentNode.firstChild.appendChild(editDiv);
    }
    );
    
    listItem.appendChild(editButton);

}
    })

      // console.log(newValue)

      //  var  t = e.target.parentElement.firstChild.setAttribute('contentEditable', 'true')
      //   console.log(t)
 
    //    firstchild -> p -> oldvalue 
    // p -> ""
    //  p -> input box with btn rap with div -> enter btn click lisiner.
    //  at enter -> new value

      // const old value = p.innertext

        
//     todoList.appendChild(listItem);

// })

// let ui;

// function() {
//  ui = 'ertyui'
// }

// ui

//  save the new value and empty the old value 