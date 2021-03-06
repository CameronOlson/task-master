import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";

export function saveState(){
    localStorage.setItem('tasks', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
    }))
}

export function loadState(){
    let data = JSON.parse(localStorage.getItem('tasks'))
    console.log('load state', data)
    if (data != null){
        ProxyState.lists = data.lists.map(f => new List(f))
        ProxyState.tasks = data.tasks.map(t => new Task(t))
    }
    console.log(loadState)
}