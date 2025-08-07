// src/pages/Detail.tsx

import React from "react";
import { useLocation } from "react-router-dom";
import { Article } from "../components/ArticleCard";
import { Card } from "antd";

const Detail: React.FC = () => {
  const { state } = useLocation();

  if (!state) {
    return <p>Artikel tidak ditemukan atau halaman diakses langsung.</p>;
  }

  const article = state as Article;

  return (
    <div style={{ padding: "24px" }}>
      <Card
        title={article.title}
        cover={
          article.urlToImage && <img alt="cover" src={article.urlToImage} />
        }
      >
        <p>
          <strong>Deskripsi:</strong> {article.description}
        </p>

        <p>
          <strong>Konten:</strong>{" "}
          {article.content || "Tidak ada konten lengkap."}
        </p>
        <p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Baca Selengkapnya di Sumber Asli
          </a>
        </p>
      </Card>
    </div>
  );
};

export default Detail;
