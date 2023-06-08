import useData from "./usseData";

interface Platforms {
    id: number;
    name: string;
    slug: string
}

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents")

export default usePlatforms;