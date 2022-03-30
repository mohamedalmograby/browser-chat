import {User} from 'src/app/types' ;

export class UserHandler {


    createUser(){
        var users = this.getAllUsers() ;
        var userId = users.length+1 +"" ;
        var userName = Math.random().toString(36).substr(2, 5) + " " + Math.random().toString(36).substr(2, 8) ;
        users.push({
            'name' :userName ,
            'id' : userId ,
            'img_src' : "https://picsum.photos/id/"+userId+"/200/300",
            'status' : "online"
        });
        localStorage.setItem('browser_chat_users',JSON.stringify(users));
        return userId;
    }
    getUser(userId:string):User{
        return this.getAllUsers().filter( (user:User)=>{
            if(user.id == userId)return true;
            return false
        })[0];
    }
    getAllUsers(){
        return JSON.parse(localStorage.getItem('browser_chat_users')|| '[]') ; 
    }
}