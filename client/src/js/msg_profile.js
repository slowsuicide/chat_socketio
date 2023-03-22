export default class MsgProfile{
  constructor(user){
    this.init(user)
  }
  init(user){
    const currentDate = new Date();
    this.$src = document.createElement('section');
    this.$src.classList = 'msgProfile';
    this.$src.innerHTML = 
    `<div class="profile">
    <div class="profile_photo">
     <img src="data:image/jpeg;base64,${user.photo}" alt="" srcset="">
    </div>
    <div class="profile_main-info">
        <div class="profile_info">
          <div class="profile_name">
            <span>${user.fullName}</span>
          </div>
           <div class="profile_other-info">
             <div class="block_name">
              <span>Username</span>
            </div>
            <div class="block_description">
              <span>@${user.nickname}</span>
            </div>
          </div>
          <div class="profile_other-info">
            <div class="block_name">
             <span>Email</span>
           </div>
           <div class="block_description">
             <span>${user.email}</span>
           </div>
         </div>
       <div class="profile_other-info">
        <div class="block_name">
         <span>Timezone</span>
       </div>
       <div class="block_description">
         <span> ${currentDate.toLocaleTimeString()} Local time</span>
       </div>
     </div>
      </div>
    </div>
  </div>`

  }

}