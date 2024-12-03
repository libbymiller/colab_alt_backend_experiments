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


  push(element: TItem): void {
    return this.insert(element, this.length);
  }

  toArray(): TItem[] {
    return this._items.map(
      (entry) => liveNodeToLson(entry) as TItem
    );
  }

}     


