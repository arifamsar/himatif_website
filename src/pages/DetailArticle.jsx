import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";

const DetailArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setArticle({ id: docSnap.id, ...docSnap.data() });
      } else {
        setArticle(null);
      }
      setLoading(false);
    };

    const fetchArticles = async () => {
      const articlesCollection = collection(db, "posts");
      const snapshot = await getDocs(articlesCollection);
      const articlesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articlesData);
    };

    fetchArticle();
    fetchArticles();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  const currentIndex = articles.findIndex((a) => a.id === id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-20 flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-4">Di buat oleh: {article.createdBy}</p>
        <p className="text-gray-600 mb-4">Tanggal: {article.createdAt.toDate().toLocaleDateString()}</p>
        <img src={article.imageUrl} alt={article.title} className="w-[1200px] mb-4 rounded-lg" />
        <div
          className="text-base mb-8"
          dangerouslySetInnerHTML={{ __html: article.description }}
        ></div>
      </div>
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
