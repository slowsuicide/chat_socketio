export default class MsgProfile {
  constructor(user) {
    this.init(user);
  }
  init(user) {
    const currentDate = new Date();
    this.$src = this.newProfileTemplate(user);
  }
  newProfileTemplate({ photo, fullName, email, nickname }) {
    const currentDate = new Date();

    const msgProfile = this.generateNewBlock("section", "msgProfile");
    const profilePhoto = this.generateNewBlock("div", "profile_photo");
    const profileImg = document.createElement("img");
    profileImg.src = `data:image/jpeg;base64,${photo}`;

    profilePhoto.appendChild(profileImg);

    const profileMainInfo = this.generateNewBlock("div", "profile_main-info");
    const profileInfo = this.generateNewBlock("div", "profile_info");
    const profileName = this.generateNewBlock("div", "profile_name");
    profileName.innerHTML = `<span>${fullName}</span>`;

    profileInfo.append(profileName);

    const otherBlockData = [
      { name: "Username", value: nickname },
      { name: "Email", value: email },
      {
        name: "Timezone",
        value: currentDate.toLocaleTimeString() + " Local time",
      },
    ];

    otherBlockData.forEach((data) => {
      const block = this.generateNewBlock("div", "profile_other-info");
      block.append(
        this.generateNewBlock("div", "block_name", `<span>${data.name}</span>`),
        this.generateNewBlock(
          "div",
          "block_description",
          `<span>${data.value}</span>`
        )
      );
      profileInfo.append(block);
    });

    profileMainInfo.append(profileInfo);
    msgProfile.append(profilePhoto, profileMainInfo);

    return msgProfile;
  }
  generateNewBlock(blockName, className, html = null, value = null) {
    const block = document.createElement(`${blockName}`);
    block.className = className;
    if (html !== null) block.innerHTML = html;
    if (value !== null) block.innerText = value;
    return block;
  }
}
