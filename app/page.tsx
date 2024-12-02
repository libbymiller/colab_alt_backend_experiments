'use client';

//import React from "react";
import React, { useState, useEffect } from "react";

import { useSyncedStore } from "@syncedstore/react";
import { store } from "./store";

export default function App() {

  const state = useSyncedStore(store);
  let myname = null;

  useEffect(() => {

    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name");
    myname = name;
    console.log("name",name, state.names);
    if(name!="" && state.names){
      state.names.push(name);
      console.log("state.names",state.names.toJSON());
    }
  }, []);

  const function1 = (event) => {
        const cursor = {name: myname, x: event.pageX, y: event.pageY };
        if(myname){
          state.presences[myname] = cursor;
          console.log(cursor);
        }else{
          console.log("name is null");
        }
  }

  return (

    <div>
      <div className="Shaded" onPointerMove={function1}>

hello
      </div>
  
      <div>
       {Object.keys(state.presences).map((key, index) => (
                        Object.keys(state.presences[key]).map((y, i) => (
                                <span key={i}>
                                  {key} : {y} : {state.presences[key][y]} : {name}
                                </span>
                        ))
       ))}

      </div>
    </div>
   
  );

}

