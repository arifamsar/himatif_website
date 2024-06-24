import { useEffect, useState } from "react";
import { Button, Carousel } from "@material-tailwind/react";
import logo from "../assets/logo.svg";
import { articles } from "../data/articles";
import { coreteams } from "../data/coreteams";
import { divisions } from "../data/divisions";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; // Import required modules

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage] = useState(1);
  const articlesPerPage = 3;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedArticles = articles.sort((a, b) => {
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  });

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  const listcoreteams = coreteams.map((coreteams) => {
    return (
      <div key={coreteams.id} className="bg-white rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center">
            <img src={coreteams.avatar} alt={coreteams.name} className="w-10 h-10 rounded-full" />
            <div className="ml-4">
              <h3 className="text-xl font-bold text-primary">{coreteams.name}</h3>
              <p className="text-blue-gray-500">{coreteams.position}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const listdivisions = divisions.map((divisions) => {
    return (
      <div key={divisions.id} className="bg-white rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary">{divisions.name}</h3>
          <p className="text-blue-gray-500">{divisions.description}</p>
        </div>
      </div>
    );
  });

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
      <Carousel className="lg:h-[600px] md:h-64 h-60" loop={true} autoplay={true}>
        <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="image 1" className="h-full w-full object-cover" />
        <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="image 2" className="h-full w-full object-cover" />
        <img src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80" alt="image 3" className="h-full w-full object-cover" />
      </Carousel>

      {/* Content */}
      <div className="h-max max-w-full py-10">
        <div className="container mx-auto lg:px-36 px-5">
          <div className="flex flex-col items-center justify-center gap-8 py-12">
            <img src={logo} alt="logo-ct" className="w-48" />
            <h1 className="text-3xl font-extrabold text-center text-primary">HIMATIF UIR</h1>
            <p className="text-center text-blue-gray-500 font-bold">
              Himpunan Mahasiswa Teknik Informatika Universitas Islam Riau merupakan tempat bagi mahasiswa Teknik Informatika Universitas Islam Riau untuk berkarya, berinovasi serta mengabdi sebagai kewajiban seorang mahasiswa. Adapun dalam
              kepengurusan, HIMATIF dibagi menjadi 7 Dinas, yaitu: Kaderisasi, Humas, Kominfo, Ristek, Dispora, Kewirausahaan dan Kerohanian.
            </p>
          </div>
        </div>
        <hr className="my-8 border-green-800 mx-20" />
        <div className="container mx-auto lg:px-36 px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
            <div className="w-full lg:w-1/2 text-center lg:text-justify">
              <h2 className="text-2xl font-bold text-primary mb-3">Visi</h2>
              <p className="text-blue-gray-500">Menjadi himpunan mahasiswa teknik informatika yang unggul dalam bidang teknologi informasi dan mampu memberikan kontribusi positif bagi masyarakat.</p>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-justify">
              <h2 className="text-2xl font-bold text-primary mb-3">Misi</h2>
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

      {/* Core Team */}
      <div className="h-max max-w-full bg-blue-gray-50 py-10">
        <div className="container mx-auto lg:px-36 px-5">
          <div className="py-12">
            <h2 className="text-2xl font-bold text-primary text-center lg:text-left">Pengurus Himatif</h2>
            <p className="text-blue-gray-500 mb-8 text-center lg:text-left">Pengurus inti dari himatif</p>
            {isMobile ? (
              <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}>
                {listcoreteams.map((division, index) => (
                  <SwiperSlide key={index}>{division}</SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">{listcoreteams}</div>
            )}
          </div>
        </div>

        {/* Dinas */}
        <div className="container mx-auto lg:px-36 px-5">
          <div className="py-12">
            <h2 className="text-2xl font-bold text-primary text-center lg:text-left">Dinas Himatif</h2>
            <p className="text-blue-gray-500 mb-8 text-center lg:text-left">Macam-macam dinas Himatif</p>
            {isMobile ? (
              <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}>
                {listdivisions.map((division, index) => (
                  <SwiperSlide key={index}>{division}</SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">{listdivisions}</div>
            )}
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="h-max max-w-full py-10 bg-green-50">
        <div className="container mx-auto lg:px-36 px-5 ">
          <div className="py-12">
            <h2 className="text-2xl font-bold text-primary">Berita</h2>
            <p className="text-blue-gray-500 mb-8">Temukan berita terbaru seputar HIMATIF UIR di sini!</p>
            {isMobile ? (
              <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}>
                {listArticles.map((article, index) => (
                  <SwiperSlide key={index}>{article}</SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">{listArticles}</div>
            )}
          </div>
        </div>

        {/* Read full on article page */}
        <div className="flex justify-center">
          <Button color="green">
            <a href="/article">Baca artikel selengkapnya</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
