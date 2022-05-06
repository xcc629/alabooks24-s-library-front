import styled from "styled-components";

function GreenButton({ content, onClick }) {
  return <Button onClick={onClick}>{content}</Button>;
}

export default GreenButton;

const Button = styled.div`
  margin-bottom: 10px;
  text-align: center;
  border: 1px solid rgb(161, 202, 179);
  border-radius: 4px;
  padding: 16px 20px;
  background-color: hsl(166, 41%, 51%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.04em;
  cursor: pointer;
`;
