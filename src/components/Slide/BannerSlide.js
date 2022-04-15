import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlide({ bookListObj }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToshow: 3,
    slidesToScrill: 3,
  };
  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </StyledSlider>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  border-radius: 0.5rem;
  padding: 50px 20px;
  max-width: 1150px;
  min-height: 300px;
  background: linear-gradient(to right, #ccd1bd, #b3d5df, #e59f85);
  cursor: pointer;
`;

const StyledSlider = styled(Slider)``;
