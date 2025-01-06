'use client';

import React, { useState, useEffect } from "react";

import { useSyncedStore } from "@syncedstore/react";
import { store } from "./store";
import RoomProvider from './components/RoomProvider'


export default function App() {

  const syncState = useSyncedStore(store);

  const [myName, setMyName] = useState();

  useEffect(() => {

    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name");
    setMyName(name);
    console.log("name",name, myName);
    if(name!="" && syncState.names){
      syncState.names.push(name);
      console.log("syncState.names",syncState.names.toJSON());
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

  return  (

    <div>     
      <RoomProvider id="1234" username="{myName}"></RoomProvider>
      <div className="Shaded" onPointerMove={function1}>
      move <br />
      pointer <br />
      here 
      </div>

     <div>
      <h2>I am {myName}</h2>
      <div>
       {Object.keys(syncState.presences).map((key, index) => (
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

