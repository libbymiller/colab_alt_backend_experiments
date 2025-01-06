'use client';

import React from "react";

// see https://github.com/liveblocks/liveblocks/blob/main/packages/liveblocks-core/src/crdts/LiveObject.ts
// trying simplest possible thing
// they don't do their own storage, that happens in the store, e.g. const layers = storage.get('layers')

export default class LiveObject {

  constructor(obj: O = {} as O) {
     this._map = obj;
  }

  toObject(): O {
    return Object.fromEntries(this._map) as O;
  }

      
}     


