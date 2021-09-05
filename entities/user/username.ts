

export class UserName{
    private username:string;
    get value(){
        return this.username;
    }

    private static isValidName(name: string) {
        const limit_length = 20;
        return (name.length < limit_length);
    }

    private constructor(username: string) {
        this.username = username
    }

    static create(name:string):UserName{
        if (this.isValidName(name)){
            return new UserName(name)
        }else{
            throw 'username is too long!';
        }

    }


}
