import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

// (optional, define types for TypeScript)
//type Todo = { completed: boolean, title: string };
//type Presence = [{ x: int, y: int }];
// https://codesandbox.io/p/sandbox/elegant-faraday-l1jkk?file=%2Fsrc%2Fstore.ts%3A8%2C3-8%2C14

// Create your SyncedStore store
export const store = syncedStore({presence: []});

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsDoc(store);
export const webrtcProvider = new WebrtcProvider("syncedstore-presence1", doc);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();

