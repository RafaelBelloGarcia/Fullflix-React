import axios from "axios";

const api = {
  UrlBase: "https://api.themoviedb.org/3/movie/",
  UrlEnd: "?api_key=e1afc2d97a345bb7d46701ad777080b7&language=pt-BR"
};

export const getList = (setState, counter) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e1afc2d97a345bb7d46701ad777080b7&language=pt-BR&page=${counter}`
    )
    .then((response) => {
      setState(response.data.results);
    })
    .catch((Error) => {
      console.log(Error);
    });
};

export const getDetail = (id, setState) => {
  axios
    .get(api.UrlBase + id + api.UrlEnd)
    .then((response) => {
      setState(response);
    })
    .catch((Error) => {
      console.log(Error);
    });
};
