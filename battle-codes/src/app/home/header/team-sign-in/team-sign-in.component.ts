import { Component, OnInit, Input } from '@angular/core';
import { roomService } from 'app/room.service';
@Component({
  selector: 'app-team-sign-in',
  templateUrl: './team-sign-in.component.html',
  styleUrls: ['./team-sign-in.component.css']
})
export class TeamSignInComponent implements OnInit {
@Input() onTeamSignIn: () => void;
  constructor(private roomService: roomService) {}
  room=this.roomService.room.name
  ngOnInit() {
  }
 joinRoom(room){
   let data ={
     room:room,
     name:'',
     message:''
   }
   this.roomService.joinRoom(data)
   this.roomService.roomCreated(data.room);
 }
}
