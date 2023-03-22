import MsgMessage from './msg_message.js';
import { socket } from './index.js';

export default class MsgHistory{
  constructor(){
    this.init()
  }
  init(){
    this.$src = document.createElement('div');
    this.$src.classList = 'msgHistory';
    socket.on('chat message',(user,msg)=>{
      this.addMessage(user,msg);
    });
    socket.on('chat notification',(msg)=>{
      this.addNotification(msg);
    });
  }
  addMessage(user,text){
    const newMessage = new MsgMessage()
    newMessage.newMessage(user, text)
    this.$src.appendChild(newMessage.$src)
  }
  addNotification(text){
    const newMessage = new MsgMessage()
    newMessage.newNotification(text)
    this.$src.appendChild(newMessage.$src)
  }

}