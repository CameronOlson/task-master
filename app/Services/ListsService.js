import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";



class ListsService{
    constructor(){
        ProxyState.on('lists', saveState)
        console.log("hello from ListsService")
    }
    createList(listData){
        ProxyState.lists = [...ProxyState.lists, new List(listData)]
        console.log('List service create list', ProxyState.lists)
      }
      deleteList(listId){
        console.log('list delete', listId)
        ProxyState.lists = ProxyState.lists.filter(f => f.id !== listId) 
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
      }
      
}
export const listsService = new ListsService();