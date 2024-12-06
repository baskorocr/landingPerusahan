import React from "react";

function Cta({ cta }) {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen text-white px-4"
      style={{ backgroundColor: "#0aa8a7" }}
    >
      {/* Container */}
      <div className="max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Visi dan Misi</h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Visi */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Visi</h2>
            <p className="text-lg">
              Diakui dan dipercaya sebagai salah satu perusahaan dalam industri
              minyak goreng kelapa sawit.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Misi</h2>
            <p className="text-lg">
              Menyediakan minyak goreng kelapa sawit berkualitas tinggi yang
              akan memuaskan pelanggan kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
