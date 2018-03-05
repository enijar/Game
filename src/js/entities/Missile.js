import Entity from "./Entity";

function log() {
    console.log('log');
}

export default class Missile extends Entity {
    constructor(props) {
        super(props);

        this.x = props.x || 0;
        this.y = props.y || 0;
        this.radius = 10;
        this.velocity = 25;
    }

    update() {
        this.y -= this.velocity;
    }

    draw() {
        this.game.ctx.beginPath();
        this.game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.game.ctx.stroke();
    }
}