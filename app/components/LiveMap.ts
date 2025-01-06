'use client';

import React from "react";

// see https://github.com/liveblocks/liveblocks/blob/main/packages/liveblocks-core/src/crdts/LiveMap.ts
// trying simplest possible thing
// they don't do their own storage, that happens in the store, e.g. const layers = storage.get('layers')

export default class LiveMap {

  constructor(entries?: readonly (readonly [TKey, TValue])[] | undefined) {
    this.unacknowledgedSet = new Map<TKey, string>();

    if (entries) {
      const mappedEntries: [TKey, LiveNode][] = [];
      for (const [key, value] of entries) {
        const node = lsonToLiveNode(value);
        node._setParentLink(this, key);
        mappedEntries.push([key, node]);
      }
      this._map = new Map(mappedEntries);
    } else {
      this._map = new Map();
    }
  }


  get size(): number {
    return this._map.size;
  }

  toObject(): O {
    return Object.fromEntries(this._map) as O;
  }

      
}     


