export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="blob-1 absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #8b7cff, transparent 70%)" }}
        />
        <div
          className="blob-2 absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(circle, #5ee6c4, transparent 70%)" }}
        />
        <div
          className="blob-1 absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full opacity-15 blur-[130px]"
          style={{ background: "radial-gradient(circle, #8b7cff, transparent 70%)" }}
        />
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
      </div>
      <div className="grain" />
    </>
  )
}
