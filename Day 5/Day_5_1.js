class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function(){
    return this.w*this.h;
}

class Square extends Rectangle {
    constructor(length){
        super(length);
        this.w = length;
        this.h = length;
    }
}
