import { Component, OnInit } from '@angular/core';
import { access } from 'fs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit {
  notesList:any[]=[]
  state:boolean=true
  constructor(public notesService:NoteService) { }


  ngOnInit(): void {
    this.notesService.fetchNotes().subscribe((res:any)=>{
      this.notesList=res.data
      console.log(this.notesList)
      
       this.notesList=this.notesList.filter(note=>note.isTrash)
       console.log(this.notesList)
    })
  }

  updatedTrashList($event:any){
    if($event.action=='trash'){
      
      this.notesList=this.notesList.filter(res=>res.noteID!=$event.data.noteID)
    }else if($event.action=="restore"){
      this.notesList=this.notesList.filter(res=>res.noteID!=$event.data.noteID)
    }
    else if($event.action=='deletePermanent'){
      this.notesList=this.notesList.filter(res=>res.noteID!=$event.data.noteID)
    }
    
  }
  





}


