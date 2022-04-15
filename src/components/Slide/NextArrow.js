import styled from "styled-components";

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        size: 300,
      }}
      onClick={onClick}
    />
  );
}
