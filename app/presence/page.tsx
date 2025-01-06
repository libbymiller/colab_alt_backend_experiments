'use client';

import React, { useState, useEffect } from "react";

import { useSyncedStore } from "@syncedstore/react";
import { store } from "../store";
import RoomProvider from '../components/RoomProvider'


export default function Page() {

  const syncState = useSyncedStore(store);

  const [myName, setMyName] = useState();
  const [roomId, setRoomId] = useState();
  const [metadata, setMetadata] = useState();

  useEffect(() => {

    const queryParams = new URLSearchParams(window.location.search);
    let name = queryParams.get("name");
    let room = queryParams.get("room");
    const suffix = Date.now();
    if(name==null || name==""){
       name = "tmp";
       console.log("no user id, setting one");
    }
    
    const rawUsername = name+"-"+suffix.toString();

    setMyName(rawUsername);
    setMetadata({"creator":rawUsername,"created":suffix});
    if(room==null || room==""){
      room = "1234";
      console.log("no room id, setting one");
    }
    setRoomId(room)

    console.log("name",name, myName, rawUsername,"room",roomId);

    if(name!="" && syncState.names){
        console.log("Adding name",name,"to",syncState.names);
        syncState.names.push(rawUsername);
    }
  }, []);

  const function1 = (event) => {
        const cursor = {name: myName, x: event.pageX, y: event.pageY };
        if(myName){
          syncState.presences[myName] = cursor;
          console.log(cursor);
        }else{
          console.log("name is null");
        }
  }


  const function2 = (event) => {
        const sticky = {name: myName, x: event.pageX, y: event.pageY, text:"foo" };
        console.log("clicked");
  }

  return  (

    <div>     
      <RoomProvider id="{roomId}" username="{myName}" metadata="{metadata}">


      </RoomProvider>

      <div className="Shaded" onClick={function2} onPointerMove={function1}>
      move <br />
      pointer <br />
      here 
      </div>

     <div>
      <h2>I am {myName}</h2>
      <p>Room is {roomId}</p>
      <div>
       {Object.keys(syncState.presences).map((key, index) => (

///                        myArray.map((y, i) => myArray[myArray.length - 1 - i]);

                        Object.keys(syncState.presences[key]).map((y, i) => (
                                <span key={i}>
                                  {key} : {y} : {syncState.presences[key][y]} <br />
                                </span>
                        ))
       ))}

      </div>
     </div>
    </div>
  )   
}

