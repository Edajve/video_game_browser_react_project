import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9f281f311d2548dc9ddbb9994bfcac31"
    }
})