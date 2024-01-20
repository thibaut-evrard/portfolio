import { useRef } from "react";
import Organism from "./Classes/Organism";
import { useFrame } from "@react-three/fiber";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { CustomLine } from "../CustomLine/CustomLine";

const OrganismMesh = () => {
    const organismRef = useRef(new Organism());
    const meshRef = useRef<LineSegments2>(null);
    const timeRef = useRef(new Date().getTime());

    useFrame(() => {
        const deltaMs = new Date().getTime() - timeRef.current;
        timeRef.current = new Date().getTime();

        organismRef.current.update(deltaMs / 1000);
        const positions = organismRef.current.getPositions();

        if (!meshRef.current) return;
        meshRef.current.userData = {
            newPoints: positions,
        };
    });

    return (
        <CustomLine
            ref={meshRef}
            points={[]}
            color="red"
            lineWidth={1}
            segments
            dashed={false}
            needsUpdate
        />
    );
};

export default OrganismMesh;
