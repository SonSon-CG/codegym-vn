class Phone {
    name; battery; sent; inbox; draft; powerStatus

    constructor(name) {
        this.name = name;
        this.battery = 50;
        this.sent = [];
        this.inbox = [];
        this.draft = "";
        this.powerStatus = true;
    }

    sendMessage(newPhone) {
        newPhone.inbox.push(this.draft);
        this.sent.push(this.draft);
        this.draft = "";
        this.battery -= 1;
    }

    writeDraft (newMessage) {
         this.draft = newMessage;
        this.battery -= 1;

    }

    checkPower(){
        if (this.powerStatus === true) {
            alert("Phone dang bat")
        } else {
            alert("Phone dang tat")
        }
        this.battery -= 1;

    }

    powerSwitch(){
        this.powerStatus=!this.powerStatus;
        this.battery -= 1;

    }

    charge(){
        if (this.battery != 100) {
            this.battery = 100;
        }
        this.battery -= 1;
        return this.battery
    }

    readInbox(){
        for (let i = 0; i < this.inbox.length; i++) {
            console.log(this.inbox[i]);
        }
        this.battery -= 1;

    }

    readSent(){
        for (let j = 0; j <this.sent.length ; j++) {
            console.log(this.sent[j]);
        }
        this.battery -= 1;

    }


















}