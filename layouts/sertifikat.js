import React from "react";
import Image from "next/image";

function Sertifikat({ data }) {
  const { title, description, content } = data;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6">
      {/* Container */}
      <div className="max-w-6xl w-full text-center bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          {title}
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-600">{description}</p>

        {/* Sertifikat Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Sertifikat 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Perizinan Berusaha Lampiran 1
            </h2>
            <Image
              src="/images/legal1.png" // Path dari folder public
              alt="Logo"
              width={500} // Lebar gambar
              height={350} // Tinggi gambar
              priority // Memastikan logo dimuat lebih awal
            />
          </div>

          {/* Sertifikat 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Perizinan Berusaha Lampiran 2
            </h2>
            <Image
              src="/images/legal2.png" // Path dari folder public
              alt="Logo"
              width={500} // Lebar gambar
              height={350} // Tinggi gambar
              priority // Memastikan logo dimuat lebih awal
            />
          </div>

          {/* Sertifikat Tambahan */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">NPWP</h2>
            <Image
              src="/images/legal3.png" // Path dari folder public
              alt="Logo"
              width={500} // Lebar gambar
              height={350} // Tinggi gambar
              priority // Memastikan logo dimuat lebih awal
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sertifikat;
