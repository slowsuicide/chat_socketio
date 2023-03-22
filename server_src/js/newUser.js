const fs = require('fs')
const CURR_PROFILE_PHOTOS_DIRECTION = './server_src/profiles_photo/'
const CURR_RANDOM_NAMES_DIRECTION ='./server_src/other_info/randomNames.txt';
const CURR_RANDOM_NICKNAMES_DIRECTION = './server_src/other_info/randomNicknames.txt';

const availablePhotos = getAvailablePhotosDirection(CURR_PROFILE_PHOTOS_DIRECTION)
const availableNickNames = getLineArrayFromFile(CURR_RANDOM_NICKNAMES_DIRECTION);
const availableNames = getLineArrayFromFile(CURR_RANDOM_NAMES_DIRECTION);

module.exports = {
    availablePhotos,
    availableNames,
    availableNickNames
}

function getAvailablePhotosDirection(path){
    const fs = require('fs') 
    const files = fs.readdirSync(path)
    
    const photos = files.map(element => {
        const actualPath = path+element;
        const imageData = fs.readFileSync(actualPath)
        const base64Image = Buffer.from(imageData).toString('base64');
        return base64Image
    })
    return photos
}

function getLineArrayFromFile(path){
    const array = fs.readFileSync(path).toString().split("\n");
    return  array.map(element=>{return element.replace('\r','')})
}
