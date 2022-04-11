import style from "./MainNav.module.css";

function MainNav() {
  return (
    <section className={style.mainNavWrap}>
      <div className={style.mainNavcontentWrap}>
        <div className={style.logo}>ALA</div>
        <ul className={style.inputWrap}>
          <li>
            <input type="text" className={style.mag} />
          </li>
          <li>
            <button>{}</button>
          </li>
          <li>
            <button>{}</button>
          </li>
          <li>
            <button>{}</button>
          </li>
          <li>
            <button>{}</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MainNav;
