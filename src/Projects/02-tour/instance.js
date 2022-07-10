import axios from "axios";

const fetchData = axios.create({
    baseURL: "https://course-api.com/react-tours-project",
    timeout: 1000,
    headers: {
        Accept: "*/*",
    },
});

export default fetchData;
