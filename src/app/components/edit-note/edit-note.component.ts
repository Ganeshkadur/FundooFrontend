import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  title:string=""
  desc:string=""
  noteId!:number
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title:string,description:string,noteID:number},public dialogRef: MatDialogRef<EditNoteComponent>,public noteService:NoteService) { 
    this.title=data.title
    this.desc=data.description
     this.noteId=data.noteID

  }

  ngOnInit(): void {
  }
  handleEditNote(){
    console.log(this.title,this.desc);
   this.noteService.editNote({...this.data,title:this.title,description:this.desc}).subscribe(res=>{
     this.dialogRef.close({...this.data,title:this.title,description:this.desc})
    // console.log(res);
    
   })

  }


}
