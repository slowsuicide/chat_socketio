import MsgProfile from './msg_profile.js';
import MsgHistory from './msg_history.js';
import MsgInputForm from './msg_inputform.js';
import {user} from './index.js'

export default class MsgWindow{
   constructor(parentId)
   {
    this.$parent = parentId==='body' ? document.getElementsByTagName('body')[0] : document.getElementById(`#${parentId}`);
    this.objects = [];
   }
   init(){
    this.$src = document.createElement('div');
    this.$src.classList = 'msgChatWindow'
    this.$parent.append(this.$src);
    const profileWindow = new MsgProfile(user);
    this.$src.append(profileWindow.$src)

    this.$mainMessagesWindow = document.createElement('section');
    this.$mainMessagesWindow.classList = 'msgWindow';
     
    this.objects.push(
                      new MsgHistory(),
                      new MsgInputForm()
    );

    this.objects.forEach(obj => this.$mainMessagesWindow.append(obj.$src));
    this.$src.append(this.$mainMessagesWindow)

   }
 
}
