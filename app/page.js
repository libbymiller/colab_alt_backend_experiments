'use client';
import React from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store } from "../store";

export default function App() {
  const state = useSyncedStore(store);


  const function1 = (event) => {
        const cursor = {x: event.pageX, y: event.pageY };
        state.presence.splice(0, state.presence.length, cursor);
        console.log(cursor);
  }


  return (

    <div>
      <div className="Shaded" onPointerMove={function1}>

hello 

        {(state.presence || []).map((pres, i) => {
          return <p key={i}>{pres.x},{pres.y}</p>;
        })}

      </div>
    </div>

  );

}

