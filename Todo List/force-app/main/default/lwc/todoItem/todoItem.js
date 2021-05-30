import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {
    @api task;

    handleClick() {
        const completedClicked = new CustomEvent('completedclicked', {detail : this.task.taskId})
        this.dispatchEvent(completedClicked);
    }

    get textStyle() {
        return this.task.completed ? 'strikethrough' : '';
    }
}