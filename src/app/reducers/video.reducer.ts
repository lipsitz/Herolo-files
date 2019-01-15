import { IVideo } from './../models/video.model'
import * as VideoActions from './../actions/video.actions'

const initialState: IVideo[] = []

export function reducer(state = initialState, action: VideoActions.Actions | any): IVideo[] {
    switch (action.type) {
        case VideoActions.ADD_VIDEO:
            return [...state, ...action.payload];
        case VideoActions.REMOVE_VIDEO:
            for (let i = 0; i < state.length; i++) {
                if (state[i].imdbID === action.payload.imdbID) {
                    state.splice(i, 1)
                }
            }

            return state;
        case VideoActions.UPDATE_VIDEO:
            for (let i = 0; i < state.length; i++) {
                if (state[i].imdbID === action.payload.imdbID) {
                    state[i] = action.payload
                }
            }
            return state;
        default:
            return state;
    }
}