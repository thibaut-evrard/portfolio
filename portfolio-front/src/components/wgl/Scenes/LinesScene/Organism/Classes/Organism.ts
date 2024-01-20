import { Vector3 } from "three";
import Limb from "./Limb";

class Organism {
    _points: Vector3[] = [];
    _time: number = 0;
    _limbs: Limb[] = [];

    constructor() {
        this.setup();
    }

    setup() {
        const initialLimb = new Limb(
            new Vector3(0, 0, 0),
            new Vector3(1, 0, 0),
            0.5,
        );
        this._limbs.push(initialLimb);
    }

    update(dt: number) {
        this._time += dt;
        for (const limb of this._limbs) {
            limb.update(dt);
        }
    }

    getPositions() {
        this._points = this._limbs[0].getPoints();
        // console.log(this._points);

        const computedPositions = [];
        for (const point of this._points) {
            computedPositions.push(point.x, point.y, point.z);
        }
        return computedPositions;
    }
}

export default Organism;
