'use client';

import React from "react";

// see https://github.com/liveblocks/liveblocks/blob/main/packages/liveblocks-core/src/crdts/LiveList.ts
// trying simplest possible thing

export default class LiveList {

  constructor(items: TItem[]) {
    this._items = [];
  }

  get length(): number {
    return this._items.length;
  }

  clear(): void {
     this._items = [];
  }

  push(element: TItem): void {
    //is this a good idea? who knows
    //but I need a unique list not just an ever increasing one
    if(this._items.includes(TItem)){
      console.log("[LL] not adding item",TItem,"as alreday have it in array",this._items);
      return null;
    }else{
      console.log("[LL] adding item",TItem,"to",this._items);
      return this.insert(element, this.length);
    }

//    return this.insert(element, this.length);
  }


  toArray(): TItem[] {
    return this._items.map(
      (entry) => liveNodeToLson(entry) as TItem
    );
  }

}     


