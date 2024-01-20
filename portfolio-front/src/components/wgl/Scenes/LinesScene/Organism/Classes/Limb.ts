import { Vector3 } from "three";

class Limb {
    _children: Limb[] = [];
    _start: Vector3;
    _direction: Vector3;
    _points: Vector3[] = [];
    _time: number = 0;

    // consts
    _segmentLength = 0.2;
    _maxSegments = 10;
    _growthFrequency = 0.01;
    _birthFactor = 0.1;

    constructor(start: Vector3, direction: Vector3, birthFactor = 0.1) {
        this._start = start;
        this._direction = direction;
        this._points = [];
        this._birthFactor = birthFactor;
    }

    update(dt: number) {
        this._time += dt;
        this.updateChildren(dt);
        this.updateLimb();
    }

    updateChildren(dt: number) {
        for (const child of this._children) {
            child.update(dt);
        }
    }

    updateLimb() {
        // do nothing if the branch is full
        if (this._points.length > this._maxSegments * 2) return;

        // do nothing if we have not reached the growth frequency
        if (this._time < this._growthFrequency) return;

        this.addPoint();
        if (Math.random() < this._birthFactor) this.addLimb();
        this._time = 0;
    }

    addLimb() {
        const lastPoint = this._points[this._points.length - 1];
        const lastDirection = this.getLastDirection();
        const newLimb = new Limb(
            lastPoint,
            lastDirection,
            this._birthFactor / 2,
        );
        this._children.push(newLimb);
    }

    addPoint() {
        if (this._points.length === 0) {
            this._points.push(
                this._start.clone(),
                this._start
                    .clone()
                    .add(
                        this._direction
                            .clone()
                            .multiplyScalar(this._segmentLength),
                    ),
            );
            return;
        }

        const lastIndex = this._points.length - 1;
        const lastPoint = this._points[lastIndex];
        const directionOffset = new Vector3(
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
        );

        const newDirection = this.getLastDirection()
            .clone()
            .add(directionOffset.multiplyScalar(0.5))
            .normalize()
            .multiplyScalar(this._segmentLength);

        const newPoint = lastPoint.clone().add(newDirection);
        this._points.push(lastPoint, newPoint);
    }

    getLastDirection() {
        return this._points[this._points.length - 1]
            .clone()
            .sub(this._points[this._points.length - 2].clone())
            .normalize();
    }

    getPoints(): Vector3[] {
        const childrenPoints = [];
        for (const child of this._children) {
            childrenPoints.push(...child.getPoints());
        }
        return [...this._points, ...childrenPoints];
    }
}

export default Limb;
