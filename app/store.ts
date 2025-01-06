import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";
import {LiveObject, LiveList, LiveMap} from "../some_types";


// (optional, define types for TypeScript)
//type Todo = { completed: boolean, title: string };
//type Presence = [{ name: string, x: int, y: int }];
//type Room = [ {metadata: {} }];
//type LiveObject = [{}];
//type LiveList = [[]];

//names it at the top level
//but maybe it shoudl be a livelist? no idea
const names: string[] = [];

// Create your SyncedStore store
export const store = syncedStore({
  names: names,
  presences: {} as Presence,
  rooms: {} as Room,
  liveObjects: {} as LiveObject,
  liveLists: [] as LiveList,
  fragment: "xml"
});


// Create a document that syncs automatically using websockets
const doc = getYjsDoc(store);
export const wsProvider = new WebsocketProvider("ws://localhost:1234", "syncedstore", doc);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();

