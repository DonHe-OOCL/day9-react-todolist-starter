import axios from "axios";

const instance = axios.create({
    // baseURL: "https://67496974868020296630e5be.mockapi.io/todo"
    baseURL: "http://127.0.0.1:8080"
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
        if (error.response && error.response.status === 500) {
            window.location.href = "/hard-stop";

        }
        console.error("Response Error:", error);
        return Promise.reject(error);
    }
);

export default instance;