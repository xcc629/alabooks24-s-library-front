import styled from "styled-components";

function SilverBorderRoundButton({ content }) {
  return <Button onClick={() => {}}>{content}</Button>;
}

export default SilverBorderRoundButton;

const Button = styled.button`
  border: 1px solid #a09fab;
  border-radius: 0.3rem;
  padding: 5px 10px;
  color: #7e7e87;
  background-color: transparent;
  font-size: 12px;
  font-weight: 600;

  :hover {
    background-color: #f0f0f0;
  }
`;
