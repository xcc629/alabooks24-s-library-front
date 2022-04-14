import style from "./GreenButton.module.css";

function GreenButton({ span, forwrdedref, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {span}
    </button>
  );
}

export default GreenButton;
