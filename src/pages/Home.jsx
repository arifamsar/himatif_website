import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import logo from "../assets/logo.svg";
import { articles } from "../data/articles";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  const listArticles = currentArticles.map((article) => {
    const date = new Date(article.dateAdded);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear().toString().substring(-2)}`;

    return (
      <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary">{article.title}</h3>
          <p className="text-blue-gray-500 mt-2">{article.description}</p>
          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <UserCircleIcon className="w-8 h-8 text-blue-gray-500" />
              <p className="text-blue-gray-500 ml-2">{article.createdBy}</p>
            </div>
            <p className="text-blue-gray-500">{formattedDate}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Carousel className="lg:h-screen md:h-72 h-60" loop={true} autoplay={true}>
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

      {/* Article */}
      <div className="container mx-auto lg:px-36 px-5">
        <div className="py-12">
          <h2 className="text-2xl font-bold text-primary">Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">{listArticles}</div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-3 py-2 mr-2 rounded-lg text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${currentPage === pageNumber ? "bg-gray-200 text-primary" : ""}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
};

export default Home;
