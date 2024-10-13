
import io from 'socket.io-client';

const socket = io('ws://localhost:8000/ws/messages/room_name/');

export default socket;
