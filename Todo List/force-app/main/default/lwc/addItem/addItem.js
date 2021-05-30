import { LightningElement } from 'lwc';

export default class AddItem extends LightningElement {
    submitTask(){
        let task = this.template.querySelector('input').value
        const submit_task = new CustomEvent('submittask', {detail: task});
        this.dispatchEvent(submit_task);
        this.template.querySelector('input').value = ''
    }
}