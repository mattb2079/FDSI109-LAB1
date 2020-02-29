export class Message {
    public text : string;
    public imageUrl : string;
    public from : string;
    public to : string;
    public createdOn : Date;

    constructor() {
        this.to = "Everyone";
        this.createdOn = new Date(); // sets current time
    }

}