import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {
@track tasklist = [
    {
        taskId: 0,
        task: "Finish programming Cybernine Systems AI",
        completed: false
    },
    {
        taskId: 1,
        task: "Release Cybernine onto the internet",
        completed: false
    }
]

    completedClicked(event) {
        this.tasklist[event.detail].completed = !this.tasklist[event.detail].completed
    }
    get areTasks() {
        return this.tasklist.length > 0;
    }

    addTask(event){
        console.log(event.detail)
        this.tasklist.push({
            taskId: this.tasklist.length,
            task: event.detail,
            completed:false
        })
        console.log(this.tasklist)
    }

}