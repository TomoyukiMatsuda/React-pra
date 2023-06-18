import styled from "styled-components";

export default function Page() {
  const handleClick = (element: string) => {
    window.alert(element + "からクリック");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <MainContainer>
        <DivElement onClick={() => handleClick("div")}>div</DivElement>
        <ButtonElement tabIndex={5} onClick={() => handleClick("button")}>
          Button
        </ButtonElement>
        <TabIndexContainer handleClick={() => handleClick("div")} />
      </MainContainer>
    </div>
  );
}

const TabIndexContainer = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <>
      <DivElement
        tabIndex={3}
        role="button"
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      >
        div tabIndex 3 onKeyDown
      </DivElement>
      <DivElement tabIndex={2} role="button" onClick={handleClick}>
        div tabIndex 2
      </DivElement>
      <DivElement tabIndex={1} role="button" onClick={handleClick}>
        div tabIndex 1
      </DivElement>
    </>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const DivElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 48px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;

  :focus {
    border: 2px solid blue;
  }
`;

const ButtonElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 48px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;

  :focus {
    border: 2px solid blue;
  }
`;

const VideoElement = styled.video`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 24px;
  border: 1px solid black;
  background: white;
  border-radius: 8px;
  cursor: pointer;

  :focus {
    border: 2px solid blue;
  }
`;
