import MsgWindow from './msg_window.js';

export let user = {};
export const socket = io();



const onEnter = new Promise(function(resolve,reject){
    socket.on('new user', user_info =>{
        user =  Object.freeze(user_info);
        resolve();
    });

}).then(()=>{
    console.log('USERINFO:',user)
    const msgWindow = new MsgWindow('body');
    msgWindow.init();
})

