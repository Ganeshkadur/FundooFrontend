import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(public httpService:HttpService) { }
  fetchNotes(){

    return this.httpService.fetchNotesCall("Notes_/GetAllNotes1")
  }
  addNote(data:object){
    return this.httpService.addNotesCall("Notes_/CreateNotes",data)
  }

  toggleArchiveAndTrash(endPoint:string){
    return this.httpService.toggleArchiveAndTrash(endPoint)
  }
  addColor(endPoint:string){
    return this.httpService.addColor(endPoint)
  }
  editNote(data:{noteID:number,title:string,description:string}){
    return this.httpService.editNote(`Notes_/UpdateNote?noteId=${data.noteID}`,data)

  }
  deleteNote(data:any){
    return this.httpService.deleteNote(`Notes_/DeleteNote?noteid=${data.noteID}`)

  }
}
