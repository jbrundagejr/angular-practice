import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = 'Hilton'

  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 10
  }

  roomlist: RoomList[] = [
    {
      roomNumber: 34,
      price: 20,
      amenities: ['AC'],
      roomType: 'King'
    },
    {
      roomNumber: 24,
      price: 200,
      amenities: ['HDTV'],
    roomType: 'Queen'
    }
  ]

  toggle(){
    console.log("Hello World!")
  }
}
