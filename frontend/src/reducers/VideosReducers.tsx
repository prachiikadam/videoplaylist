import { VideoList ,Video } from "../store/store";



interface Action {
    type: string;
    videoObject?: Video;
}


const addVideo = (state :VideoList,videoObject ?:Video) =>{
    console.log('Add logic later',state,videoObject)
    return state
}





export const reducer = (state :VideoList , action :Action): VideoList => {
    switch (action.type) {
        case 'ADD_VIDEO':
            return addVideo(state, action?.videoObject);
        default:
            return state;
    }
};