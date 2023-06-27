import React from "react";

const Searchcar = ()=> {
    return (
        <div className="flex justify-center">
      <div className="w-11/12 h-[140px] flex justify-center bg-gray-800 rounded-lg shadow">
        <div className="w-full flex justify-center items-center gap-5 px-5">
          <div className="flex flex-col w-1/5">
            <label htmlFor="input1" className="text-white mb-2 ms-2">
              Nama
            </label>
            <input
              type="text"
              id="input1"
              placeholder="Ketik nama/tipe mobil"
              className="input w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col w-1/5">
            <label htmlFor="input2" className="text-white mb-2 ms-2">
              Kategori
            </label>
            <input
              type="text"
              id="input2"
              placeholder="Masukan Kapasitas Mobil"
              className="input w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col w-1/5">
            <label htmlFor="input3" className="text-white mb-2 ms-2">
              Harga
            </label>
            <input
              type="text"
              id="input3"
              placeholder="Masukan Harga Sewa per Hari"
              className="input w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col w-1/5">
            <label htmlFor="input4" className="text-white  mb-2 ms-2 ">
              Status
            </label>
            <input
              type="text"
              id="input4"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
          </div>
          <div  className="flex-col justify-end items-center mt-7">
          <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded">
            Cari Mobil
          </button>
          </div>
        </div>
      </div>
    </div>
     
    )
}
export default Searchcar