import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions(local)(frontend)
  // baseURL: "http://127.0.0.1:5001/clone-2024-91ab6/us-central1/api",
  //deployed version of firebase function(backend with function)
  baseURL: "https://api-7rn5uejhza-uc.a.run.app/",
  //deployed version of amazon server on render.com(backend with render)
  // baseURL: "https://amazon-api-deploy-ibq0.onrender.com/",
  //deployed on netlify
  // baseURL:"https://65ceb9cdf900a15db9f7a5f8--bespoke-lokum-52e97b.netlify.app/",
});

export { axiosInstance };
