import { Cards } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import { MainContainer, Part1, Part2, Part3, ButtonPrincipal } from "../home/HomeStyled";
import { getCounter } from "../../components/assets/redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const counter = useSelector((state) => state.page.counter);

  const dispatch = useDispatch();

  const sumNumber = (counter) => {
    const total = counter + 1;
    dispatch(getCounter(total));
    window.scrollTo(0, 600);
  };

  const subNumber = (counter) => {
    if (counter > 1) {
      const total = counter - 1;
      dispatch(getCounter(total));
      window.scrollTo(0, 600);
    }
  };

  return (
    <MainContainer>
      <Part1 />
      <Part2>
        <p>Filmes Populares</p>
      </Part2>
      <Part3>
        <Cards />
      </Part3>
      <div className="containerbutton">
        <ButtonPrincipal onClick={() => subNumber(counter)}>Previous</ButtonPrincipal>
        <ButtonPrincipal onClick={() => sumNumber(counter)}>Next</ButtonPrincipal>
      </div>
      <Footer />
    </MainContainer>
  );
};
