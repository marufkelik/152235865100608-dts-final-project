import axios from "axios";

const newsDbIntance = axios.create({
  baseURL: "https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=5",
  // params: {
  //   apikey: "9bc8269604774895a0bd35296d246bc8",
  // },
  headers: {
    'x-api-key': "vAr8UCnd-NPXcWgaUApYgIONHcjsN5nr1QY8Igm5a0c",
  },
  
});

// const baseUrlForImage = "https://image.tmdb.org/t/p/w200";

export { newsDbIntance };

