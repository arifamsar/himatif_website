import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";
import { Button, Input, Typography } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, "posts");
      const snapshot = await getDocs(articlesCollection);
      const articlesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
      }));
      setArticles(articlesData);
    };

    fetchArticles();
  }, []);

  const handleReadMore = (id) => {
    console.log(id);
    navigate(`/article/${id}`);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + "...";
  };

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const sortedArticles = articles.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredArticles = currentArticles.filter((article) => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const renderPaginationButtons = () => {
    return (
      <div className="flex justify-center items-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            color="green"
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 mr-2 rounded-lg hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${currentPage === index + 1 ? "bg-gray-200 text-primary" : ""}`}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    );
  };

  const listArticles = filteredArticles.map((article) => {
    const date = new Date(article.createdAt);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear().toString().substring(-2)}`;

    return (
      <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden h-[500px] flex flex-col">
        <img src={article.imageUrl} alt={article.title} className="w-full h-52 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-primary">{article.title}</h3>
          <div className="text-blue-gray-500 mt-2 flex-grow" dangerouslySetInnerHTML={{ __html: truncateText(article.description, 150) }}></div>
          <div className="flex justify-start mt-4">
            <Button size="sm" color="green" onClick={() => handleReadMore(article.id)}>
              Selengkapnya
            </Button>
          </div>
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
      <div className="container px-4 py-8 mx-auto  h-screen">
        <div className="mx-3 lg:mx-20">
          <Typography tag="h1" color="green" className="text-3xl font-bold mb-4 text-center">
            Halaman Artikel
          </Typography>
          <div className="relative flex w-full justify-center my-5">
            <Input
              type="text"
              color="green"
              value={inputValue}
              onChange={handleInputChange}
              className="pr-20"
              label="Search articles"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button size="sm" onClick={handleSearchClick} color={inputValue ? "green" : "blue-gray"} disabled={!inputValue} className="!absolute right-1 top-1 rounded">
              SEARCH
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{listArticles}</div>
          {renderPaginationButtons()}
        </div>
      </div>
    </>
  );
};

export default Article;
