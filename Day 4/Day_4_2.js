function getCount(objects) {
    var cnt = 0;
    for(let element in objects){
        if(objects[element].x == objects[element].y){
            cnt++;
        }
    }
    return cnt;
}
