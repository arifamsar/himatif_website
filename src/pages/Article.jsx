import { useState } from "react";
import { articles } from "../data/articles";
import { Button, Input, Typography } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const sortedArticles = articles.sort((a, b) => {
    return new Date(b.dateAdded) - new Date(a.dateAdded);
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
      <div className="flex justify-center my-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button key={index + 1} size="sm" color={currentPage === index + 1 ? "green" : "blue-gray"} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    );
  };

  const listArticles = filteredArticles.map((article) => {
    const date = new Date(article.dateAdded);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear().toString().substring(-2)}`;

    return (
      <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary">{article.title}</h3>
          <p className="text-blue-gray-500 mt-2">{article.description}</p>

          <div className="flex justify-start mt-4">
            <Button size="sm" color="green" onClick={() => handleReadMore(article.id)}>
              READ MORE
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
      <div className="container px-4 py-8 mx-20">
        <Typography tag="h1" color="green" className="text-3xl font-bold mb-4 text-center">
          Article Page
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
    </>
  );
};

export default Article;
