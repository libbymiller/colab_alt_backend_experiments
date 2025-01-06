'use client';

import React, { useState, useEffect } from "react";
import LiveList from './LiveList'
import LiveObject from './LiveObject'
import LiveMap from './LiveMap'


export default function RoomProvider(roomId) {

	return <div id={roomId} 
		initialStorage={{
			metadata: new LiveObject(),
			layerIds: new LiveList(),
			layers: new LiveMap()
		}}

        />
      
}     


