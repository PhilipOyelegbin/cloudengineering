import { Link } from "react-router-dom";
import styled from "styled-components"
import Podcard from "../components/Podcard";

const DashboardMain = styled.div`
  padding: 20px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  gap: 20px;
  @media (min-width:768px) {
    padding: 20px 80px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${({theme}) => theme.bg};
  border-radius: 8px;
  padding: 20px 30px;
`;
const Topic = styled.h4`
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
const Span = styled.span`
  color: ${({theme}) => theme.primary};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Podcasts = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 14px;
  padding: 18px 8px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

function Dashboard() {
  return <DashboardMain>
    <FilterContainer>
      <Topic>
        Most Popular
        <Link to="/showpodcasts/mostpopular" style={{textDecoration: "none"}}>
          <Span>Show All</Span>  
        </Link>
      </Topic>  
      <Podcasts>
        <Podcard/>
        <Podcard/>
        <Podcard/>
      </Podcasts>
    </FilterContainer>

    <FilterContainer>
      <Topic>
        Comedy
        <Link to="/showpodcasts/comedy" style={{textDecoration: "none"}}>
          <Span>Show All</Span>  
        </Link>
      </Topic>  
      <Podcasts>
        <Podcard/>
        <Podcard/>
        <Podcard/>  
      </Podcasts>
    </FilterContainer>

    <FilterContainer>
      <Topic>
        Most Popular
        <Link to="/showpodcasts/mostpopular" style={{textDecoration: "none"}}>
          <Span>Show All</Span>  
        </Link>
      </Topic>  
      <Podcasts>
        <Podcard/>
        <Podcard/>
        <Podcard/>
      </Podcasts>
    </FilterContainer>
  </DashboardMain>
}

export default Dashboard
