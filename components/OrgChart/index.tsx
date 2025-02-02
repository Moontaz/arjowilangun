import React from "react";

const OrgChart = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="relative mb-6 text-center text-3xl font-bold text-black dark:text-white xl:text-hero">
        Struktur{" "}
        <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
          Kepengurusan
        </span>
      </h2>
      {/* Tampilan Mobile - Tabel */}
      <div className="block overflow-x-auto lg:hidden">
        <table className="mx-10 w-full table-auto border-collapse border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-400 px-4 py-2">No</th>
              <th className="border border-gray-400 px-4 py-2">Nama</th>
              <th className="border border-gray-400 px-4 py-2">Jabatan</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Kuswianto ,S.Pd.", "Penasihat/Komisaris"],
              ["2", "Winadi", "Pengawas"],
              ["3", "Mateus Subowo ,S.Pd.", "Direktur"],
              ["4", "Joko Adi Praktika", "Sekretaris"],
              ["5", "Mudiyono", "Bendahara"],
              ["6", "Moch. Chafidz Baihaqi", "Ka. Unit Perdagangan dan Jasa"],
              ["7", "Prayudi", "Ka. Unit Jasa"],
              ["8", "Ririn Dwi Uswatun H", "Ka. Unit Simpan Pinjam"],
              ["9", "Mukri", "Ka. Unit Pasar Desa"],
              ["10", "Wahyu", "Ka. Unit Bank Sampah"],
              ["11", "Rizal Indianta", "Ka. Unit Pariwisata"],
              ["12", "Indian Siswo Pranoto", "Ka. Unit Pertanian"],
              ["13", "Didik Wahyudi", "Ka. Unit Peternakan"],
            ].map(([no, nama, jabatan], index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{no}</td>
                <td className="border border-gray-400 px-4 py-2">{nama}</td>
                <td className="border border-gray-400 px-4 py-2">{jabatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tampilan Desktop - Hirarki */}
      <div className="hidden flex-col items-center lg:flex">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-center">
            <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
              <div>Kuswianto ,S.Pd.</div>
              <div>Penasihat/Komisaris</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Winadi</div>
                <div>Pengawas</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Mateus Subowo ,S.Pd.</div>
                <div>Direktur</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Joko Adi Praktika</div>
                <div>Sekretaris</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Mudiyono</div>
                <div>Bendahara</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Moch. Chafidz Baihaqi</div>
                <div>Ka. Unit Perdagangan dan Jasa</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Prayudi</div>
                <div>Ka. Unit Jasa</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Ririn Dwi Uswatun H</div>
                <div>Ka. Unit Simpan Pinjam</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Mukri</div>
                <div>Ka. Unit Pasar Desa</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Wahyu</div>
                <div>Ka. Unit Bank Sampah</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Rizal Indianta</div>
                <div>Ka. Unit Pariwisata</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
                <div>Indian Siswo Pranoto</div>
                <div>Ka. Unit Pertanian</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded bg-[rgba(225,225,225,0.52)] px-4 py-2 dark:bg-[rgba(225,225,225,0.12)]">
              <div>Didik Wahyudi</div>
              <div>Ka. Unit Peternakan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
