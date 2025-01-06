'use client';

import React, { useState, useEffect } from "react";
import {LiveObject, LiveList, LiveMap} from "../some_types";

export default function RoomProvider(roomId) {

       const initialStorage = {
          metadata: LiveObject,
          layerIds: LiveList,
          layers: LiveMap
       }


	return <div id={roomId} 

        />
      
}     


