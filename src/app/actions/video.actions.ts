import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { IVideo } from './../models/video.model'

export const ADD_VIDEO = '[VIDEO] Add'
export const REMOVE_VIDEO = '[VIDEO] Remove'
export const UPDATE_VIDEO = '[VIDEO] Update'

export class AddVideo implements Action {
    readonly type = ADD_VIDEO

    constructor(public payload: IVideo) { }
}

export class UpdateVideo implements Action {
    readonly type = UPDATE_VIDEO

    constructor(public payload: IVideo) { }
}

export class RemoveVideo implements Action {
    readonly type = REMOVE_VIDEO

    constructor(public payload: IVideo) { }
}
export type Actions = AddVideo | RemoveVideo | UpdateVideo;