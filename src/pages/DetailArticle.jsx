import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

const DetailArticle = () => {
  const { id } = useParams();
  const articleId = parseInt(id);
  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{article.createdBy}</p>
      <img src={article.image} alt={article.title} className="w-full mb-4" />
      <p className="text-lg">{article.description}</p>
    </div>
  );
};

export default DetailArticle;
