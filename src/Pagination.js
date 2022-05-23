import styled from "styled-components";
import { colors } from "./colors";
import usePagination from "./hooks/usePagination";
import IconArrow from "./icons/IconArrow";

const Bg = styled.div`
  border-radius: 1000px;
  background: #fff;
  z-index: -1;
`;
const Container = styled.div`
  z-index: 1;
  position: fixed;
  width: 40px;
  display: flex;
  flex-direction: column;
  right: 20px;
  bottom: 20px;
  align-items: center;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 1000px;
    z-index: -1;
    left: -10px;
    top: 10px;
    background: #000;
  }
`;
const ContainerArrow = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  aspect-ratio: 1;
  transition: 0.2s;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  margin: 0px 7px;
  display: flex;
  :hover {
    color: #fff;
    background: ${colors.teal};
  }
`;
const Text = styled.input`
  color: #000;
  font-size: 1.1rem;
  text-align: center;
  border: none;
  background: none;
  display: block;
  border-radius: 5px;
  margin-top: 7px;
  margin-bottom: 7px;
  padding: 3px 0px;
  font-family: UrbaneAdscriptBoldItalic, sans-serif;
  width: calc(100% - 8px);
`;

const min = 1;

const Pagination = ({ max }) => {
  const [section, onInput, btnScroll, onPrev, onNext] = usePagination(min, max);
  const iconShared = {
    width: "50%",
    margin: "auto",
    overflow: "visible",
  };
  return (
    <Container>
      <Bg className={"pos-full"} />
      <ContainerArrow
        style={{ marginTop: 7 }}
        disabled={section === min || btnScroll}
        onClick={onPrev}
      >
        <IconArrow
          style={{
            transform: "scaleY(-1)",
            ...iconShared,
          }}
        />
      </ContainerArrow>
      <Text
        key={section}
        defaultValue={section}
        onKeyUp={(e) => {
          if (e.key === "Enter") onInput(e);
        }}
        onBlur={onInput}
      />
      <ContainerArrow
        disabled={section === max || btnScroll}
        style={{ marginBottom: 7 }}
        onClick={onNext}
      >
        <IconArrow style={iconShared} />
      </ContainerArrow>
    </Container>
  );
};

export default Pagination;
