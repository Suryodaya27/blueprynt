
const AnimatedBackground = () => (
  <div
    className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
    style={{
      zIndex: -10,
      backgroundImage: 'url(/src/assets/background-image.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    aria-hidden="true"
  >
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'rgba(18, 28, 44, 0.55)',
        pointerEvents: 'none',
      }}
    />
  </div>
);

export default AnimatedBackground;