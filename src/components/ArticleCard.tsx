

import React from 'react';
import { Card } from 'antd';


export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string | null; 
}

interface ArticleCardProps {
  article: Article;
  onClick?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {

  const imageUrl = article.urlToImage || 'https://via.placeholder.com/150';

  return (
    <Card
      hoverable
      cover={<img alt={article.title} src={imageUrl} />}
      onClick={onClick}
      style={{ width: '100%', height: '100%', marginBottom: '16px' }}
    >
      <Card.Meta
        title={article.title}
        description={article.description}
      />
    </Card>
  );
};

export default ArticleCard;