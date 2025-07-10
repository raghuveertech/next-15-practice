import { roomsData } from '../data';

export function GET(_request: Request, props: { params: { id: string } }) {
  let roomId: string | number = props.params.id;
  roomId = Number(roomId);
  const singleRoom = roomsData.find((room) => {
    return roomId == room.id;
  });
  return Response.json(singleRoom);
}

export async function PATCH(
  request: Request,
  props: { params: { id: string } }
) {
  let roomId: string | number = props.params.id;
  roomId = Number(roomId);
  const data = await request.json();
  const allRooms = roomsData.map((room) => {
    if (room.id === roomId) {
      room.title = data.title;
      room.description = data.description;
    }
    return room;
  });
  return Response.json(allRooms);
}

export function DELETE(_request: Request, props: { params: { id: string } }) {
  let roomId: string | number = props.params.id;
  roomId = Number(roomId);
  const filteredRooms = roomsData.filter((room) => {
    return room.id !== roomId;
  });
  return Response.json(filteredRooms);
}
