import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { listsService } from "../Services/ListsService.js"
import { tasksService } from "../Services/TasksService.js"





function _drawList(){
    let template = ''
    ProxyState.lists.forEach(i => template += i.Template)
    document.getElementById("list").innerHTML = template
}


export class ListsController{
    constructor(){
        console.log("hello from the lists Controller")
        ProxyState.on('lists', _drawList)
        ProxyState.on('tasks', _drawList)
        _drawList()
    }

    createList(){
        event.preventDefault()
        let form = event.target
    
        let listData = {
          name: form.name.value,
          color: form.listColor.value,
        }

        listsService.createList(listData)
        // form.reset()
      }

      deleteList(listId){
          listsService.deleteList(listId)
          Swal.fire({
            icon: 'success',
            title: 'Your list has been deleted',
            showConfirmButton: false,
            timer: 1500
          })
          }
          
      }
