import { FooterContainer } from "./FooterStyle";
import { useSelector } from "react-redux";

export const Footer = () => {
  const pageValue = useSelector((state) => state.page);
  return (
    <FooterContainer>
      <p>
        FULLFLIX / {pageValue.value} / Page {pageValue.counter}
      </p>
    </FooterContainer>
  );
};
