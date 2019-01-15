export var ADD_VIDEO = '[VIDEO] Add';
export var REMOVE_VIDEO = '[VIDEO] Remove';
export var UPDATE_VIDEO = '[VIDEO] Update';
var AddVideo = /** @class */ (function () {
    function AddVideo(payload) {
        this.payload = payload;
        this.type = ADD_VIDEO;
    }
    return AddVideo;
}());
export { AddVideo };
var UpdateVideo = /** @class */ (function () {
    function UpdateVideo(payload) {
        this.payload = payload;
        this.type = UPDATE_VIDEO;
    }
    return UpdateVideo;
}());
export { UpdateVideo };
var RemoveVideo = /** @class */ (function () {
    function RemoveVideo(payload) {
        this.payload = payload;
        this.type = REMOVE_VIDEO;
    }
    return RemoveVideo;
}());
export { RemoveVideo };
//# sourceMappingURL=video.actions.js.map