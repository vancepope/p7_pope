import { Users } from '../models/users';

export class UsersService{
    private users: Users[] = [];

    addUser(email: string, password: string){
        this.users.push(new Users(email,password));
        console.log(this.users);
    }
    addUsers(user: Users[]){
        this.users.push(...user);
    }
    getUsers(){
        return this.users.slice();
    }
    removeUser(index: number){
        this.users.splice(index, 1);
    }
}