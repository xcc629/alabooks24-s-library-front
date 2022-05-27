import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

function BestSeller(props) {
  const { bestSellerList } = props;

  return (
    <Wrapper>
      <div className="imageWrapper">
        <img
          src="https://user-images.githubusercontent.com/85507868/167162230-66b790ba-4104-42d5-bb41-6667c218c7ac.png"
          alt="plancard"
        />
      </div>
      <div className="header">베스트셀러</div>
      {bestSellerList.map(
        (data, index) =>
          index <= 9 && <BestSellerCard key={index} rank={index} data={data} />
      )}
      <button className="moreView">더보기 ▶︎</button>
    </Wrapper>
  );
}

function BestSellerCard(props) {
  const navigate = useNavigate();
  const { rank, data } = props;
  const { id, title } = data;

  const goToDetail = (bookId) => {
    navigate(`/books/${bookId}`, {
      state: { bookId: bookId },
    });
  };

  return (
    <CardWrapper onClick={() => goToDetail(id)}>
      <p>{rank + 1}위</p>
      <p>{title.length >= 9 ? title.slice(0, 9) + "..." : title}</p>
    </CardWrapper>
  );
}

export default BestSeller;

const Wrapper = styled.div`
  font-size: 13px;
  margin: 10px 20px;
  border-left: 1px solid ${theme.borderColor};
  cursor: pointer;
  .imageWrapper {
    width: 207px;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }

  .header {
    font-weight: bold;
    margin-left: 20px;
    padding-bottom: 10px;
    color: #333;
  }
  .moreView {
    margin-left: 15px;
    width: 100%;
    font-size: 11px;
    border-top: 1px solid ${theme.borderColor};
    border-bottom: 1px solid ${theme.borderColor};
    border-left: none;
    border-right: none;
    padding: 3px 0;
    color: gray;

    :hover {
      background-color: ${theme.borderColor};
      cursor: pointer;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  margin-left: 15px;
  width: 160px;
  border-top: 1px solid ${theme.borderColor};
  padding: 8px;
  font-size: 12px;

  p:first-child {
    color: #e64938;
    padding-right: 10px;
    font-weight: 500;
    width: 34px;
  }

  p:last-child {
    color: gray;
  }
`;
