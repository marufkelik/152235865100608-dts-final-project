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
                    to={`/detail_news/${props.news._id}`}
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
          image={props.news.media}
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
            Sumber : {props.news.rights}
          </Typography>

          <Typography variant="body2">
            Publish Date : {props.news.published_date}
          </Typography>
          <Typography variant="body2">
            Url Sumber : {props.news.link}
          </Typography>
          <Typography variant="body2">
            Deskripsi : {props.news.summary}
          </Typography>
        </CardContent>) : (<CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 1,
          }}
        ><Typography variant="body2">
            Login For Infomation Detail
          </Typography></CardContent>)}
        
      </Box>
    </Card>
  );
};

export default NewsCard;
