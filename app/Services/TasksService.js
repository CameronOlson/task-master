import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";


class TasksService{
    constructor(){
        ProxyState.on('tasks', saveState)
    }

        createTask(taskData){
            ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
        }

        deleteTask(taskId){
            console.log('task delete', taskId)
            ProxyState.tasks = ProxyState.tasks.filter(f => f.id !== taskId) 
          }

        markTask(taskId){
            console.log('task mark', taskId)
            let markedTask = ProxyState.tasks.length
            document.getElementById('markTask').innerHTML = markedTask

        }

}



export const tasksService = new TasksService()