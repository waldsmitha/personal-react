import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};

/* 
  
  //OR

  export const loadGames = () => (dispatch) =>{
    //FETCH AXIOS
    const popularData = axios.get(popularGamesURL())
    .then(data => {
        
    })
  };
   */
