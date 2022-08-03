import axios from "axios";

const newsDbIntance = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines?country=id",
  params: {
    apikey: "9bc8269604774895a0bd35296d246bc8",
  },
});

// const baseUrlForImage = "https://image.tmdb.org/t/p/w200";

export { newsDbIntance };

