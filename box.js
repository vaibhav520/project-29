class Box {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.5,
            isStatic: false,
            friction: 0.6
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("red")
        rect(pos.x, pos.y, this.width, this.height);
    }
}