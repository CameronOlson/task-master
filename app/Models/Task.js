import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Task{
    constructor(taskData){
        this.id = taskData.id || generateId()
        this.name = taskData.name
        this.listId = taskData.listId
        this.countUp = 0

    }

    get Template(){
        return /*html*/`
        
        
        <div>
        <input class="form-check-input" type="checkbox" onclick="app.tasksController.markTask('${this.id}')" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          ${this.name}
          <i class="mdi mdi-delete selectable" onclick="app.tasksController.deleteTask('${this.id}')"></i>
        </label>
        </div>
    `
        }
}