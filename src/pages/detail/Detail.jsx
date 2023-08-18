import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { goToIndex } from "../../components/assets/redux/counterSlice";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { MainContainer, ButtonPrincipal } from "../home/HomeStyled";
import { format } from "date-fns";
import { Container } from "./DetailStyled";

function Detail() {
  const state = useSelector((state) => state.page.value2.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <MainContainer key={state.id}>
      <div className="containerbutton">{state.title}</div>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w300${state.poster_path}`}
          alt={state.title}
        />
        <div style={{ padding: "50px" }}>
          <br />
          Lançamento:
          {format(new Date(state.release_date), "dd/MM/yyyy")}
          <br />
          <br />
          Genero:
          {state.genres.map((genre) => (
            <span key={genre.id}> {genre.name}</span>
          ))}
          <h5>Sinopse: {state.overview}</h5>
          <br />
          <strong>Nota:{state.vote_average.toFixed(2)}</strong>
        </div>
      </Container>
      <div className="containerbutton">
        <ButtonPrincipal
          to="/"
          key={state.id}
          onClick={() => {
            dispatch(goToIndex());
            navigate("/");
          }}
        >
          Back to Principal
        </ButtonPrincipal>
      </div>
      <Footer />
    </MainContainer>
  );
}

export default Detail;
