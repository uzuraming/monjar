
import { UserName } from './username'

export interface User{
    name:UserName;
    id:string;
    email:string;
}

export class User implements User{
    public username:UserName
   
    
    constructor(username:string){
        this.username = UserName.create(username)
    }

}