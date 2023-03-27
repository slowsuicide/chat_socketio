export default class MsgMessage{
    constructor(){
    }
    newMessage(user,message){
        this.$src = this.newMessageTemplate(user,message);
    };
    newNotification(text){
      this.$src = document.createElement('div');
      this.$src.classList = 'msgMessage';
      this.$src.append(this.newNotificationTemplate(text));
    }
    newMessageTemplate({photo,nickname},message){
      const currentDate = new Date();

      const msgMessage = document.createElement('div');
      msgMessage.classList = 'msgMessage';

      const profilePhoto = document.createElement('div');
      profilePhoto.className = 'profile_photo';

      const profileImg = document.createElement('img');
      profileImg.src = `data:image/jpeg;base64,${photo}`;
      profilePhoto.appendChild(profileImg);

      const messageInfo = document.createElement('div');
      messageInfo.className = 'message-info';

      const messageInfoText = document.createElement('div');
      messageInfoText.className = 'text-info';
      messageInfoText.innerText=message;

      const messageHeader = document.createElement('div');
      messageHeader.className = 'message-header';

      const messageHeaderName = document.createElement('div');
      messageHeaderName.className = 'name';
      messageHeaderName.innerText = nickname;

      const messageHeaderTime = document.createElement('div');
      messageHeaderTime.className = 'time';
      messageHeaderTime.innerText = currentDate.toLocaleTimeString();

      messageHeader.append(messageHeaderName,messageHeaderTime);
      messageInfo.append(messageHeader,messageInfoText)
      msgMessage.append(profilePhoto,messageInfo)

      return msgMessage;
    }
    newNotificationTemplate(text){
      const currentDate = new Date();
      
      const divInfo = document.createElement('div');
      divInfo.className = 'date-info';
      const leftLine = document.createElement('span');
      leftLine.className = 'left-line';
      const rightLine = document.createElement('span');
      rightLine.className = 'right-line';
      const dateText = document.createElement('span');
      dateText.className = 'date-text';
      dateText.innerText = `${currentDate.toLocaleTimeString()} ${text}`;

      divInfo.append(leftLine,dateText,rightLine);
      return divInfo

    }
}