import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

const DetailArticle = () => {
  const { id } = useParams();
  const articleId = parseInt(id);
  const articleIndex = articles.findIndex((article) => article.id === articleId);

  if (articleIndex === -1) {
    return <div>Article not found</div>;
  }

  const article = articles[articleIndex];
  const prevArticle = articles[articleIndex - 1];
  const nextArticle = articles[articleIndex + 1];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{article.createdBy}</p>
      <img src={article.image} alt={article.title} className="w-full mb-4 rounded-lg shadow-lg" />
      <p className="text-lg mb-8">{article.description}</p>

      <div className="flex justify-between">
        {prevArticle && (
          <Link to={`/article/${prevArticle.id}`} className="text-blue-500 hover:underline">
            &larr; {prevArticle.title}
          </Link>
        )}
        {nextArticle && (
          <Link to={`/article/${nextArticle.id}`} className="text-blue-500 hover:underline">
            {nextArticle.title} &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailArticle;