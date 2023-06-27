import React from "react";

const Whyus = () => {
    return (
      <section className="p-5">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Why Us</h1>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row gap-3 mt-5">
          <div className="card bg-base-100 shadow-xl p-5 w-full md:w-96 ">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body">
              <h2 className="card-title">Mobil Lengkap</h2>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl p-5 w-full md:w-96">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body">
              <h2 className="card-title">Harga Murah</h2>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl p-5 w-full md:w-96">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body">
              <h2 className="card-title">Layanan 24 Jam</h2>
              <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl p-5 w-full md:w-96">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body">
              <h2 className="card-title">Sopir Professional</h2>
              <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Whyus
