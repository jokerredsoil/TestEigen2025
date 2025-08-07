import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard, { Article } from '../components/ArticleCard';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
           `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error('Error fetching articles:', err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        {articles.map((article, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <ArticleCard
              article={article}
              onClick={() => navigate(`/detail/${index}`, { state: article })}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
