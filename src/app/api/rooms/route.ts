import { roomsData } from './data';

export function GET() {
  return Response.json(roomsData);
}

export async function POST(request: Request) {
  const newRoom = await request.json();
  newRoom.id = roomsData.length + 1;
  roomsData.push(newRoom);
  return Response.json(roomsData);
}
