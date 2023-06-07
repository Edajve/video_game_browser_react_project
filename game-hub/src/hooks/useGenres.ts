import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchGamesResponse, Game } from "./useGames";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count : number;
    results: Genre[]

}

const useGenres= () => {
//grab the genres 
const [genres, setGenre] = useState<Genre[]>([]);
const [error, setError] = useState("");
const [isLoading, setLoading] = useState(false)


useEffect(() => {
  setLoading(true)
  const controller = new AbortController()
  apiClient
    .get<FetchGenresResponse>("/genres", {signal: controller.signal})
    .then((res) => {
      setGenre(res.data.results)
      setLoading(false)
    })
    .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message)
      setLoading(false)
  });

    return () => controller.abort()
}, []);

return {genres, error, isLoading}
}

export default useGenres;