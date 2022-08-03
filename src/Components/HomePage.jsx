import React from "react";
import { Box} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/Firebase";
// import ListMeal from "../containers/Listmeal";
import ListNews from "../containers/ListNews";

const Home = () => {

  const [user] = useAuthState(auth);
  return (
    <>
      <Box style={{minHeight:'50em', display:'flex', justifyContent:'center', marginTop:'1em'}}>
        {/* <VideoPreview /> */}
      {/* {user ? (<VideoPreview />) : ("")} */}
      <ListNews />

      </Box>
    </>
  );
};

export default Home;
