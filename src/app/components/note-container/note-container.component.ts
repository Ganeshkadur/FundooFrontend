import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss']
})
export class NoteContainerComponent implements OnInit {
  notesList:any[]=[]
  constructor(public notesService:NoteService) { }

  ngOnInit(): void {
    this.notesService.fetchNotes().subscribe((res:any)=>{
      // console.log(this.notesList=res.data);
      
      this.notesList=res.data.filter((note:any)=>{
        return note.isArchive==false && note.isTrash==false
      })
      console.log(this.notesList);
    })
  }
  updateNoteList($event:any){
    if($event.action=="add"){
      this.notesList=[$event.data,...this.notesList]
    }else if($event.action==="archive"||$event.action==="trash") {
      this.notesList=this.notesList.filter(note=>note.noteID!=$event.data.noteID)
    } else if ($event.action=="color"||$event.action=="edit")
    {
      this.notesList=this.notesList.map(ele=>{
        if(ele.noteID==$event.data.noteID ){
          return $event.data
        }else{
          return ele
        }
      })
    }
  }

}
