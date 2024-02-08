import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {
  title:string=""
  desc:string=""
  toggleClose:boolean=true
  public notes:object={}
  @Output() updatedList=new EventEmitter<{}>()

  constructor(public noteService:NoteService) { }

  ngOnInit(): void {
  }

  toggle(oc:string){
    console.log(this.title,this.desc);
    this.toggleClose=!this.toggleClose
   
    if(oc==='close'&& (this.title!=""||this.desc!="")) {
      this.noteService.addNote({title:this.title,description:this.desc,color:""}).subscribe((res:any)=>{
        console.log(res);  
      this.updatedList.emit({action:"add",data:{noteID:res.data.noteID,title:this.title,description:this.desc,}})
      })
     
    }
    
  }
      
}
