import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class List {
constructor(listData){
    this.id = listData.id || generateId()
    this.name = listData.name
    this.color = listData.color
}

get Template(){
    return /*html*/`
    <div class="col-4">
    <div class="card my-2 d=flex space-between">
    <div class="card-header" style="background-color: ${this.color}">
    <h5>${this.name} <i class="mdi mdi-delete selectable" onclick="app.listsController.deleteList('${this.id}')"></i></h5>
    </div>
       <div class="card-body">
      <div id="markTask">Tasks - </div>
      <div>Completed -<div id="completedTask"></div></div>
        <ul>
          <li class="list-group-item">${this.Tasks}</li>
        </ul>
            <form onsubmit="app.tasksController.createTask('${this.id}')">
            <label for="task" class="sr-only"></label>
            <input type="text" name="task" minlength="3" maxlength="50" required placeholder="Add Task" />
            <button type="submit" class="btn btn-secondary">Add</button>
          </form>
      </div>
     </div>
  </div>`
}

get Tasks(){
        let template = ''
        let foundTasks = ProxyState.tasks.filter(i => i.listId == this.id)
        // console.log('after filter', foundTasks)
        foundTasks.forEach(t => template += t.Template)
        return template

}
}