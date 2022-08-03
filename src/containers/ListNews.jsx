// di sini kita harus menggunakan axios
// import axios from "axios";
import { newsDbIntance } from "../api/NewsDb";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./ListNews.css";
import NewsCard from "../Components/NewsCard";

const ListNews = () => {
  const [Berita, setNews] = useState([]);
  
  useEffect(
    () => {
      const fetchDataNews = async () => {
        try {
          const responseNewsDB = await newsDbIntance.get(
            ""
          );

          setNews(responseNewsDB.data.articles);
        } catch (err) {
          console.log(err);
        }
      };

      fetchDataNews();
    },
    []
  );

  return (
    <Box className="boxy">
      <Typography variant="h5"></Typography>

      {Berita.map((news) => {
        return <NewsCard news={news} />;
      })}
    </Box>
  );
};

export default ListNews;
