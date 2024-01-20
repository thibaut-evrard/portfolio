import * as React from "react";
import { Vector2, Vector3, Vector4, Color, ColorRepresentation } from "three";
import { ReactThreeFiber, useFrame, useThree } from "@react-three/fiber";
import {
    LineGeometry,
    LineSegmentsGeometry,
    LineMaterial,
    LineMaterialParameters,
    Line2,
    LineSegments2,
} from "three-stdlib";

import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";

export type LineProps = {
    points: Array<
        Vector3 | Vector2 | [number, number, number] | [number, number] | number
    >;
    vertexColors?: Array<
        Color | [number, number, number] | [number, number, number, number]
    >;
    lineWidth?: number;
    segments?: boolean;
} & Omit<LineMaterialParameters, "vertexColors" | "color"> &
    Omit<ReactThreeFiber.Object3DNode<Line2, typeof Line2>, "args"> &
    Omit<
        ReactThreeFiber.Object3DNode<LineMaterial, [LineMaterialParameters]>,
        "color" | "vertexColors" | "args"
    > & {
        color?: ColorRepresentation;
    };

export const CustomLine: ForwardRefComponent<LineProps, Line2 | LineSegments2> =
    /* @__PURE__ */ React.forwardRef<Line2 | LineSegments2, LineProps>(
        function Line(
            {
                points,
                color = "black",
                vertexColors,
                linewidth,
                lineWidth,
                segments,
                dashed,
                ...rest
            },
            ref,
        ) {
            const size = useThree((state) => state.size);
            const line2 = React.useMemo(
                () => (segments ? new LineSegments2() : new Line2()),
                [segments],
            );
            const [lineMaterial] = React.useState(() => new LineMaterial());
            const itemSize =
                (vertexColors?.[0] as number[] | undefined)?.length === 4
                    ? 4
                    : 3;
            const lineGeom = React.useMemo(() => {
                const geom = segments
                    ? new LineSegmentsGeometry()
                    : new LineGeometry();
                const pValues = points.map((p) => {
                    const isArray = Array.isArray(p);
                    return p instanceof Vector3 || p instanceof Vector4
                        ? [p.x, p.y, p.z]
                        : p instanceof Vector2
                          ? [p.x, p.y, 0]
                          : isArray && p.length === 3
                            ? [p[0], p[1], p[2]]
                            : isArray && p.length === 2
                              ? [p[0], p[1], 0]
                              : p;
                });

                geom.setPositions(pValues.flat());

                if (vertexColors) {
                    const cValues = vertexColors.map((c) =>
                        c instanceof Color ? c.toArray() : c,
                    );
                    geom.setColors(cValues.flat(), itemSize);
                }

                return geom;
            }, [points, segments, vertexColors, itemSize]);

            React.useLayoutEffect(() => {
                line2.computeLineDistances();
            }, [points, line2]);

            React.useLayoutEffect(() => {
                if (dashed) {
                    lineMaterial.defines.USE_DASH = "";
                } else {
                    // Setting lineMaterial.defines.USE_DASH to undefined is apparently not sufficient.
                    delete lineMaterial.defines.USE_DASH;
                }
                lineMaterial.needsUpdate = true;
            }, [dashed, lineMaterial]);

            React.useEffect(() => {
                return () => lineGeom.dispose();
            }, [lineGeom]);

            useFrame(() => {
                if (!line2) return;
                if (!line2.userData.newPoints) return;

                const points = line2.userData.newPoints;
                if (points.length < 6) return;

                const geom = new LineSegmentsGeometry();
                geom.setPositions(points.flat());
                line2.geometry = geom;
                line2.computeLineDistances();
            });

            return (
                <primitive object={line2} ref={ref} {...rest}>
                    <primitive object={lineGeom} attach="geometry" />
                    <primitive
                        object={lineMaterial}
                        attach="material"
                        color={color}
                        vertexColors={Boolean(vertexColors)}
                        resolution={[size.width, size.height]}
                        linewidth={linewidth ?? lineWidth}
                        dashed={dashed}
                        transparent={itemSize === 4}
                        {...rest}
                    />
                </primitive>
            );
        },
    );
