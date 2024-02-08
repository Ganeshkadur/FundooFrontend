import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteService } from 'src/app/services/noteService/note.service';

import { ARCHIVE_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, DELETE_FOREVER_ICON, IMG_ICON, LIST_VIEW_ICON, REMINDER_ICON, RESTORE_ICON, TICK_ICON, UNARCHIVE_ICON } from 'src/assets/svgicons/svg-icons';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { title } from 'process';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() noteObj:any={}
  @Input() container!:string
  // containers:boolean=true

  @Output() updateList=new EventEmitter<{}>()
  

  constructor(public noteService:NoteService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog:MatDialog) {
     iconRegistry.addSvgIconLiteral("image-icon", sanitizer.bypassSecurityTrustHtml(IMG_ICON))
     iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("collab-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('threedot-icon', sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
     iconRegistry.addSvgIconLiteral('color-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
     iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))
     iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))
     iconRegistry.addSvgIconLiteral('delete-forever', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON))
     iconRegistry.addSvgIconLiteral('tick-icon', sanitizer.bypassSecurityTrustHtml(TICK_ICON))
  }

  
  ngOnInit(): void {
  }
handleNoteOperations(action:string){
  if(action==="archive"){

    this.noteService.toggleArchiveAndTrash(`Notes_/ToggleArchive?noteId=${this.noteObj.noteID}`).subscribe(res=>{
      console.log(res);
      this.updateList.emit({action:"archive",data:{noteID:this.noteObj.noteID}})
      
    })
  }else if(action==="trash"){
    this.noteService.toggleArchiveAndTrash(`Notes_/ToggleTrash?noteId=${this.noteObj.noteID}`).subscribe(res=>{
      this.updateList.emit({action:"trash",data:{noteID:this.noteObj.noteID}})
    
    })
  }else if(action==="unarchive"){
    this.noteService.toggleArchiveAndTrash(`Notes_/ToggleArchive?noteId=${this.noteObj.noteID}`).subscribe(res=>{
      this.updateList.emit({action:"unarchive",data:{noteID:this.noteObj.noteID}})
    
    })
  }else if(action==='deletePermanent'){
  this.noteService.deleteNote({noteID:this.noteObj.noteID}).subscribe(res=>{
    this.updateList.emit({action:"deletePermanent",data:{noteID:this.noteObj.noteID}})
  })
  }
  else if(action==="restore"){
    this.noteService.toggleArchiveAndTrash(`Notes_/ToggleTrash?noteId=${this.noteObj.noteID}`).subscribe(res=>{
      this.updateList.emit({action:"restore",data:{noteID:this.noteObj.noteID}})
    
    })
  }
  else{
    const encodedColor = encodeURIComponent(action);
    this.noteService.addColor(`Notes_/AddColor?noteId=${this.noteObj.noteID}&color=${encodedColor}`).subscribe((res:any)=>{
     
      this.updateList.emit({action:"color",data:res.data})
    })
  }

}
openEditNote() {
  const dialogRef = this.dialog.open(EditNoteComponent,{data:this.noteObj});

  dialogRef.afterClosed().subscribe(result => {
    console.log(result.title,result.description);
    this.updateList.emit({action:"edit",data:result})
    // console.log(`Dialog result: ${result.title,result.description}`);
  });

}
}
