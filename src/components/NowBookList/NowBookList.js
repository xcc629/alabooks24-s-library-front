import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NowBookList({ bookListObj }) {
  console.log(bookListObj);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
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
                <CoverWrapper>
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
    transform: translate3d(5px, 0px, 0px);
    .slick-track {
      width: 100%;
    }
  }
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

const InfoWrapper = styled.div``;

const InfoTitle = styled.h2`
  text-align: center;
  margin: 10px 24px;
  font-size: 18px;
`;

const InfoAuthor = styled.h2`
  text-align: center;
  margin: 10px;
`;
