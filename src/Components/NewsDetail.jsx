import React, { useEffect, useState } from "react";
import { newsDbIntance } from "../api/NewsDb";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";


const DetailNews = () => {
  // const [Berita, setNews] = useState([]);

  // const params = useParams();

  // useEffect(() => {
  //   const fetchDataNews = async () => {
  //     try {
  //       const response = await newsDbIntance.get(
  //         "/_id" + params.idNews
  //       );

  //       setNews(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchDataNews();
  // }, [params.idNews]);

  // return (
  //   <Card className="boxy">
  //     <Box>
  //       <Typography variant="h6">Detail News</Typography>
  //     </Box>
  //     <Box
  //       className="boxy"
  //       sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
  //     >
  //       <CardMedia
  //         component="img"
  //         sx={{ width: 1 }}
  //         image={Berita.media}
  //         alt={Berita.title}
  //       ></CardMedia>
  //       <CardContent
  //         sx={{
  //           display: "flex",
  //           flexDirection: "column",
  //           gap: 2,
  //           width: 1,
  //         }}
  //       >
  //         <Typography component="div" variant="body1">
  //           {Berita.title}
  //         </Typography>
  //         <Typography variant="body2">
  //           Release date: {Berita.published_date}
  //         </Typography>
  //         <Typography variant="body2">{Berita.title}</Typography>
  //       </CardContent>
  //     </Box>
  //   </Card>
  // );
};

export default DetailNews;
