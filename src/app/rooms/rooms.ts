export interface Room {
  availableRooms: number
  bookedRooms: number
}

export interface RoomList {
  roomNumber: number
  roomType: string
  amenities: string[]
  price: number
}