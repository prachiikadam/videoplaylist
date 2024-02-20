

import React, { createContext, useReducer } from 'react';

import { reducer } from "../reducers/index.tsx";



export interface Video {
    description: string;
    sources: string[];
    subtitle: string;
    thumb: string;
    title: string ,
    playbackPosition : number
  }


  
export  interface PlayList {
    playlistName : string,
    playlistId : string,
    videos: Video[];
  }

const initialState  : PlayList [] = []


export const Store = createContext<{ playListsState : PlayList []; dispatch: React.Dispatch<any> }>({ playListsState : initialState, dispatch: () => null });

export const StoreProvider = ({ children } : { children: React.ReactNode} ) => {
    const [playListsState, dispatch] = useReducer(reducer, initialState);
    

    return <Store.Provider value={{ playListsState , dispatch }}>{children}</Store.Provider>;
};


