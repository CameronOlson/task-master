import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { tasksService } from "../Services/TasksService.js";



export class TasksController{
    constructor(){
        console.log("this is the tasks controller")
    }
    createTask(listId){
        console.log("help")
        // debugger
        event.preventDefault()
        let form = event.target

        let taskData = {
            name: form.task.value,
            listId: listId
            
        }
        tasksService.createTask(taskData)
        console.log(taskData)
        markTask()
    
    }
    deleteTask(taskId){
        tasksService.deleteTask(taskId)
        Swal.fire({
            icon: 'success',
            title: 'Your task has been deleted',
            showConfirmButton: false,
            timer: 1500
          })
    }
    markTask(taskId){
        // let countUp = (app.task.countUp +=1)
        // console.log(task.countUp)
        // if(countUp % 2 == 0){

        // }
        console.log( taskId , "markTask in TasksController")
        tasksService.markTask(taskId)
    }
}

