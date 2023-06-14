import { GameQuery } from "../App";
import useData from "./usseData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    rating: string;
    background_image: string
    //code smell from the rawg api. 
    //array of objects, where each object has a platform property,
    //which is a 
    parent_platforms: {platform: Platform}[]
    metacritic: number
  }
  
export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = (gameQuery: GameQuery) =>
 {
  return useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
       platforms: gameQuery.platform?.id,
       ordering: gameQuery.sortOrder
      }
    }, [gameQuery])
}

export default useGames;