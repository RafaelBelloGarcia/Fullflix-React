import { useState, useEffect } from "react";
import { getDetail, getList } from "./assets/API/req";
import { CardContainer, Containerflex } from "./CardsStyle";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails, goToDetails } from "./assets/redux/counterSlice";
import { useNavigate } from "react-router-dom";
import "./Img.css"

export const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState();
  const counter = useSelector((state) => state.page.counter);

  useEffect(() => {
    getList(setMovies, counter);
  }, [counter]);

  useEffect(() => {
    dispatch(getMovieDetails(details));
  }, [details, dispatch]);

  const onHoverDetail = (e) => {
    getDetail(e.target.id, setDetails);
  };

  return (
    <Containerflex>
      {movies.map((movie) => {
        return (
          <CardContainer
            key={movie.id}
            id={movie.id}
            onClick={() => {
              dispatch(goToDetails());
              navigate("/detail");
            }}
            onMouseEnter={onHoverDetail}
          >
            <img
              className="imagem"
              src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              id={movie.id}
            />
            <div className="infocontainer" id={movie.id}>
              <h4>Título: {movie.title}</h4>
              <h4>Nota: {movie.vote_average}</h4>
            </div>
          </CardContainer>
        );
      })}
    </Containerflex>
  );
};
