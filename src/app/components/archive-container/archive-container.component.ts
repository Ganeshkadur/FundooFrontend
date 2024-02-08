import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {
  notesList:any[]=[]
  constructor(public notesService:NoteService) { }

  ngOnInit(): void {
    this.notesService.fetchNotes().subscribe((res:any)=>{
      this.notesList=res.data
      console.log(this.notesList)
      
       this.notesList=this.notesList.filter(note=>note.isArchive&&!note.isTrash)
       console.log(this.notesList)
    })
  }
  // this.updateList.emit({action:"archive",data:{noteID:this.noteObj.noteID}})
  updateArchiveNoteList($event:any){
    // this.notesList=this.notesList.filter(res=>res.isArchieve!=$event.data.noteID)
    if($event.action=='unarchive'){
      this.notesList=this.notesList.filter(note=>note.noteID!=$event.data.noteID)
    }
     
     
  }


}
