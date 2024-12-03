import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";

// (optional, define types for TypeScript)
//type Todo = { completed: boolean, title: string };
type Presence = [{ name: string, x: int, y: int }];

const names: string[] = [];

// Create your SyncedStore store
export const store = syncedStore({
  names: names,
  presences: {} as Presence,
  fragment: "xml"
});


// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsDoc(store);
export const wsProvider = new WebsocketProvider("ws://localhost:1234", "syncedstore", doc);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();

