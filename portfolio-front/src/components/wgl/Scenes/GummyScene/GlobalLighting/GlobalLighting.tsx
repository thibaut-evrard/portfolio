const GlobalLighting = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 1, 1]} intensity={0.5} />
    </>
  );
};

export default GlobalLighting;
