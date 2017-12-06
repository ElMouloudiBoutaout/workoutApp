export class Workout {
    id: number;
    title: String;
    note: String;
    done: boolean;
    

    constructor(id:number,title:string,note:string,done:boolean){
        this.id=id;
        this.title = title;
        this.note = note;
        this.done = done;
    }
 

}
