import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/Firebase";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
const [user] = useAuthState(auth);
  return (
    <Card className="boxy">
      <Box>

      {user ? (
                  <Link
                    to={`/detail_news/${props.news.title}`}
                  >
                    <Typography variant="h6">
          {props.news.title}
          </Typography>
                  </Link>
                ) : (
                  <Typography variant="h6">
          {props.news.title}
          </Typography>
                )}
      </Box>

      <Box
        className="boxy"
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          sx={{ width: '40%' }}
          image={props.news.urlToImage}
        ></CardMedia>

        {user ? (<CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 1,
          }}
        >
          <Typography component="div" variant="body1">
            Sumber : {props.news.source.name}
          </Typography>

          <Typography variant="body2">
            Publish Date : {props.news.publishedAt}
          </Typography>
          <Typography variant="body2">
            Url Sumber : {props.news.url}
          </Typography>
          <Typography variant="body2">
            Deskripsi : {props.news.description}
          </Typography>
        </CardContent>) : (<CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 1,
          }}
        ><Typography variant="body2">
            Login Untuk Melihat Detail
          </Typography></CardContent>)}
        
      </Box>
    </Card>
  );
};

export default NewsCard;
