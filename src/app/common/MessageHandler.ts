import {Message ,LocalStorageMessage} from 'src/app/types' ;

export class MessageHandler {

    saveMessage(message: Message ){
        var key = message.from+'__'+message.to ;
        var chat = JSON.parse(localStorage.getItem(key) || '[]') ; 
        chat.push({
            'content' : message.content , 
            'time' : message.time
        })
        localStorage.setItem(message.from+'__'+message.to , JSON.stringify(chat));
        window.dispatchEvent( new Event('storage') )
    }
    getChatHistory(userId:string,receiverId:string){
        var result:Array<Message> =[] ;
        var key = userId+'__'+receiverId ;
        var chat = JSON.parse(localStorage.getItem(key) || '[]') ; 
        chat.forEach( (mess:LocalStorageMessage) => {
            result.push({
                from:userId,
                to:receiverId,
                content:mess.content,
                time:mess.time
            })
        });
        if(userId == receiverId)return result;

        key = receiverId+'__'+userId ;
        chat = JSON.parse(localStorage.getItem(key) || '[]') ; 
        chat.forEach( (mess:LocalStorageMessage) => {
            result.push({
                from:receiverId,
                to:userId,
                content:mess.content,
                time:mess.time
            })
        });
        return this.sortByDate(result);
    }
    private sortByDate(chat :Array<Message>){
        chat.sort((message1 : Message , message2 :Message)=>{
            var date1 = new Date(message1.time);
            var date2 = new Date(message2.time);
            console.log(date1);
            
            if(date1>date2)return -1 ;
            return 1 ;
        })
        return chat;
    }
}