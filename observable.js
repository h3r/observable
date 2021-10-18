//https://stackoverflow.com/questions/29333017/ecmascript-6-class-destructor

function Observable() {
    this.events = { open: new Set(), close: new Set() };
}

Observable.prototype.on = function (type, f) {
    if(!this.events.hasOwnProperty(type))
        this.events[type] = new Set();
    this.events[type].add(f);
};

Observable.prototype.emit = function (type, ...args) {
    if(this.events[type])
    this.events[type].forEach(f => f(...args));
};

Observable.prototype.off = function (type, f) {
    if(this.events[type])
    this.events[type].delete(f);
};

Observable.prototype.removeAll = function (type) {
    delete this.events[type];
};

window.Observable = Observable;
export default Observable;
