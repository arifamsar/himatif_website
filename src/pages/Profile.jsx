import logo from "../assets/logo.svg";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto mt-12">
        <h1 className="text-center font-bold text-3xl text-green-600">Profil Himpunan Mahasiswa Teknik Informatika</h1>

        <div className="flex flex-col items-center justify-center gap-8 mt-12 mx-3 lg:mx-20">
          <img src={logo} alt="logo-ct" className="w-48" />
          <h1 className="text-3xl font-extrabold text-center text-primary">HIMATIF UIR</h1>
          <p className="text-center text-blue-gray-500 font-bold">
            Himpunan Mahasiswa Teknik Informatika Universitas Islam Riau merupakan tempat bagi mahasiswa Teknik Informatika Universitas Islam Riau untuk berkarya, berinovasi serta mengabdi sebagai kewajiban seorang mahasiswa. 
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 my-8 mx-3 lg:mx-20 text-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-green-600">Visi</h2>
            <p className="text-blue-gray-500">Menjadi himpunan mahasiswa teknik informatika yang unggul dalam bidang teknologi informasi dan mampu memberikan kontribusi positif bagi masyarakat.</p>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-green-600">Misi</h2>
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
    </>
  );
};

export default Profile;
