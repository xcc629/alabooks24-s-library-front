import style from "./GreenButton.module.css";

function GreenButton({ span }) {
  return <button className={style.button}>{span}</button>;
}

export default GreenButton;
