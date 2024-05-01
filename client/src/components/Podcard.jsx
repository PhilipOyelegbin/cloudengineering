import { FaHeadphones, FaHeart, FaPassport, FaPlay } from "react-icons/fa";
import styled from "styled-components";

const PlayIcon = styled.span`
    padding: 10px;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: #9000ff !important;
    color: white !important;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    position: absolute !important;
    top: 45%;
    right: 10%;
    display: none;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 16px 4px #9000ff50 !important;
`;
const Card = styled.figure`
    position: relative;
    text-decoration: none;
    background-color: ${({theme}) => theme.card};
    max-width: 220px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
    &:hover {
        cursor: pointer;
        transfor: translateY(-8px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
        filter: brightness(1.3);
    }
    &:hover ${PlayIcon} {
        display: flex;
    }
`;
const CardTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    position: relative;
`;
const Favourite = styled.span`
    color: white !important;
    top: 8px;
    right: 8px;
    padding: 8px !important;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: ${({theme}) => theme.text_secondary + 95} !important;
    position: absolute !important;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 16px 6px #222423 !important;
`;
const CardImage = styled.img`
    object-fit: cover;
    width: 220px;
    height: 140px;
    border-radius: 8px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    &:hover {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    }
`;
const CardBody = styled.figcaption`
    display: flex;
    align-items: flex-end;
    font-weight: 450;
    width: 100%;
`;
const CardInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
`;
const Title = styled.h3`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_primary};
`;
const Description = styled.p`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 12px;
`;
const CreatorInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`;
const Creator = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;
const CreatorName = styled.h6`
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_secondary};
`;
const Views = styled.p`
    font-size: 10px;
    color: ${({ theme }) => theme.text_secondary};
    width: max-content;
`;

export default function Podcard() {
  return <Card>
    <div>
        <CardTop>
            <Favourite>
                <FaHeart/>
            </Favourite>
            <CardImage src="https://img.freepik.com/free-photo/pov-man-woman-recording-live-discussion-camera-doing-podcast-episode-together-lifestyle-influencer-talking-female-guest-studio-with-rpg-neon-lights-equipment_482257-48353.jpg?t=st=1714465873~exp=1714469473~hmac=e9e2b0db769964868669670fc35b40121e30dea1039c9c3a8ec48f0240000582&w=740" />
        </CardTop>
        <CardBody>
            <CardInfo>
                <Title>The Fariy Serpent</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo incidunt facilis recusandae reprehenderit exercitationem rem sit necessitatibus ratione error, quibusdam hic et natus vero enim laborum vitae doloremque autem asperiores iusto. Tempore quam et nesciunt obcaecati porro, tenetur velit veniam odio sit temporibus! Nobis eligendi reiciendis labore tempore officiis magnam.
                </Description>
                <CreatorInfo>
                    <Creator>
                        <FaPassport style={{color: "white", borderRadius: "50%", width: "26px", height: "26px"}}/>
                        <CreatorName>Philip</CreatorName>
                    </Creator>
                    <Views>12 Views</Views>
                </CreatorInfo>
            </CardInfo>
        </CardBody>
    </div>
    <PlayIcon>
        {"video" === "video" ? <FaPlay style={{width: "28px", height: "28px"}}/> : <FaHeadphones style={{width: "28px", height: "28px"}}/>}
    </PlayIcon>
  </Card>
}
