import { socket } from './index.js';
import { user } from './index.js';

export default class MsgInputForm{

    constructor(){
        this.init()
    }
    init(){
        this.$src = document.createElement('form');
        this.$src.classList = 'msgInputForm';
        this.$input = this.createInputTag();
        this.$src.append(this.$input);
        this.$src.addEventListener('submit',this.onSubmit.bind(this))
    }
    createInputTag(){
        const input = document.createElement('input')
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Message in #general');

        return input;
    }
    onSubmit(e)
    {
        e.preventDefault();
        if(this.$input.value){
            socket.emit('chat message',user,this.$input.value);
            this.$input.value = '';
        }
    }
}