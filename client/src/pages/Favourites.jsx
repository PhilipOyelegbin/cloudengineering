import styled from "styled-components"
import Podcard from "../components/Podcard"

const FavouriteContainer = styled.section`
  padding: 20px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  gap: 20px;
`;
const Topic = styled.h3`
  color: ${({theme}) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const Podcasts = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  padding: 18px 8px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

function Favourites() {
  return <FavouriteContainer>
    <Topic>
      Favourites
    </Topic>  
    <Podcasts>
      <Podcard/>
      <Podcard/>
      <Podcard/>
    </Podcasts>
  </FavouriteContainer>
}

export default Favourites
