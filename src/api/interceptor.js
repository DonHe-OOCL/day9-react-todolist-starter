import axios from "axios";

const instance = axios.create({
    baseURL: "https://67496974868020296630e5be.mockapi.io/todo1"
});

instance.interceptors.request.use(
    (config) => {
        config.startTime = new Date().getTime();
        console.log("Request:", config);
        return config;
    },
    (error) => {
        console.error("Request Error:", error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        const endTime = new Date().getTime();
        console.log(`Request duration: ${endTime - response.config.startTime}`);
        console.log("Response:", response);
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.href = "/not-found";
        }
        console.error("Response Error:", error);
        return Promise.reject(error);
    }
);

export default instance;