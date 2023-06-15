import platform from "../data/Platform";

export interface Platform {
    id: number;
    name: string;
    slug: string
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents")
const usePlatforms = () => ({data: platform, error: null})

export default usePlatforms;