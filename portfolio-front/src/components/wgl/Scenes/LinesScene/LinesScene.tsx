import { OrbitControls } from "@react-three/drei";
import OrganismMesh from "./Organism/OrganismMesh";

const LinesScene = () => {
    return (
        <>
            <OrbitControls />
            <OrganismMesh />
        </>
    );
};

export default LinesScene;
