import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Number of Articles',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesCollection = collection(db, "posts");
        const snapshot = await getDocs(articlesCollection);
        const articles = snapshot.docs.map(doc => doc.data());

        setArticlesData(articles);

        const dates = articles.map(article => article.createdAt.toDate().toLocaleDateString());
        const dateCounts = dates.reduce((acc, date) => {
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(dateCounts),
          datasets: [
            {
              label: 'Number of Articles',
              data: Object.values(dateCounts),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-3">Dashboard</h2>
      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Articles Per Day' },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
