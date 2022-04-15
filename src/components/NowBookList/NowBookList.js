import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NowBookList({ bookListObj, onClickBook }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    scrollToShow: 1,
    speed: 500,
  };
  return (
    <Wrapper>
      <Title>사람들이 지금 많이 읽고 있는 책</Title>
      <StyledSlider {...settings}>
        {bookListObj.map((data) => {
          return (
            <BooksWrapper key={data.id}>
              <Book key={data.id}>
                <CoverWrapper
                  onClick={() => {
                    onClickBook(data.id);
                  }}
                >
                  <Cover src={data.imgUrl} alt="booksCover" />
                </CoverWrapper>
                <Rank>{}</Rank>
                <InfoWrapper>
                  <InfoTitle>{data.title}</InfoTitle>
                  <InfoAuthor>{data.author}</InfoAuthor>
                </InfoWrapper>
              </Book>
            </BooksWrapper>
          );
        })}
      </StyledSlider>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 10px auto;
  padding: 10px 40px;
  max-width: 1150px;
  height: max-content;
  object-fit: hidden;
`;

const Title = styled.h1`
  margin: 10px 0 30px 0;
  font-size: 22px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    transform: translate3d(, 0px, 0px);
    .slick-track {
      width: 100%;
    }
  }
 {
    font-size: 2rem;
    color: black;
    z-index: 10;
  }
  .slick-prev{
    left: -2.1rem;
  }

  .slick-prev,
  .slick-next{
    top: 39%;
    transform: translate(0, 0);
    z-index: 10;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 2rem;
    color: black;
  
  }
`;

const BooksWrapper = styled.div``;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  align-items: center;
`;

const CoverWrapper = styled.div`
  width: 180px;
`;

const Cover = styled.img`
  border-radius: 0.5rem;
  width: 100%;
`;

const Rank = styled.div``;

const InfoWrapper = styled.div`
  width: 200px;
  padding-left: 15px;
`;

const InfoTitle = styled.h2`
  text-align: left;
  margin: 20px auto 10px 0;
  width: max-content;
  font-size: 16px;
  font-weight: 400;
`;

const InfoAuthor = styled.h2`
  text-align: left;
  font-size: 16px;
  color: gray;
  font-weight: 300;
`;
