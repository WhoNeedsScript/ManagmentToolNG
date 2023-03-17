export class User{
    public id?: number;
    public username?:string = "";
    public password?:string = "";
    public firstName?:string = "";
    public lastName?:string = "";
    public email?:string = "";

    public constructor(_id?:number,_username?:string,_password?:string,_firstName?:string,_lastName?:string,_email?:string)
    {
        this.id = _id;
        this.username = _username;
        this.password = _password;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.email = _email;
    }
}