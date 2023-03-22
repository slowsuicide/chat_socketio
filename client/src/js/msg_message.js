export default class MsgMessage{
    constructor(){
    }
    newMessage(user,message){
        this.$src = document.createElement('div');
        this.$src.classList = 'msgMessage';
        const currentDate = new Date();
        const newMessage = 
        `
        <div class="profile_photo">
        <img src="data:image/jpeg;base64,${user.photo}" alt="" srcset="">
       </div>
       <div class="message-info">
          <div class="message-header">
               <div class="name">
                ${user.nickname}
               </div>
               <div class="time">
                ${currentDate.toLocaleTimeString()}
              </div>
            </div>
          <div class="text-info">
           ${message}
          </div>
        </div>`
        this.$src.innerHTML = newMessage;

    };
    newNotification(text){
      this.$src = document.createElement('div');
      this.$src.classList = 'msgMessage';
      const currentDate = new Date();
      const newMessage = 
      `<div class="date-info">
        <span class="left-line"></span>
        <span class="date-text">${text}</span>
        <span class="right-line"></span>
      </div>`
    this.$src.innerHTML = newMessage;
    }
}