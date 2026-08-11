export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020409]">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#0b0f1a_0%,_#020409_100%)]" />

      {/* Star layers */}
      <div className="stars absolute inset-0 opacity-70" />
      <div className="stars2 absolute inset-0 opacity-50" />
      <div className="stars3 absolute inset-0 opacity-35" />
    </div>
  );
}
