import React from "react";
import { Carousel } from "@material-tailwind/react";
import logo from "../assets/logo.svg";

const Home = () => {
  return (
    <>
      <Carousel className="lg:h-screen h-60" loop={true} autoplay={true}>
        <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="image 1" className="h-full w-full object-cover" />
        <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="image 2" className="h-full w-full object-cover" />
        <img src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80" alt="image 3" className="h-full w-full object-cover" />
      </Carousel>

      {/* Content */}
      <div className="h-max max-w-full bg-green-50 py-10">
        <div className="container mx-auto lg:px-36 px-5">
          <div className="flex flex-col items-center justify-center gap-8 py-12">
            <img src={logo} alt="logo-ct" className="w-48" />
            <h1 className="text-3xl font-extrabold text-center text-primary">HIMATIF UIR</h1>
            <p className="text-center text-blue-gray-500 font-bold">
              Himpunan Mahasiswa Teknik Informatika Universitas Islam Riau merupakan tempat bagi mahasiswa Teknik Informatika Universitas Islam Riau untuk berkarya, berinovasi serta mengabdi sebagai kewajiban seorang mahasiswa. Adapun dalam
              kepengurusan, HIMATIF dibagi menjadi 7 Divisi, yaitu: Kaderisasi, Humas, Kominfo, Ristek, Dispora, Kewirausahaan dan Kerohanian.
            </p>
          </div>
        </div>
        <div className="container mx-auto lg:px-36 px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-primary">Visi</h2>
              <p className="text-blue-gray-500">Menjadi himpunan mahasiswa teknik informatika yang unggul dalam bidang teknologi informasi dan mampu memberikan kontribusi positif bagi masyarakat.</p>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-primary">Misi</h2>
              <ul className="list-disc list-inside text-blue-gray-500">
                <li>Meningkatkan kualitas dan kuantitas sumber daya mahasiswa Teknik Informatika Universitas Islam Riau.</li>
                <li>Mengembangkan potensi mahasiswa dalam bidang teknologi informasi melalui kegiatan akademik dan non-akademik.</li>
                <li>Menjalin kerjasama dengan pihak internal dan eksternal untuk meningkatkan kualitas dan relevansi program studi Teknik Informatika.</li>
                <li>Menyelenggarakan kegiatan yang berorientasi pada pengembangan soft skills dan hard skills mahasiswa Teknik Informatika.</li>
                <li>Mengembangkan kreativitas dan inovasi dalam bidang teknologi informasi.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
