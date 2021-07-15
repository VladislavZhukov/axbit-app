import hm from "./Header.module.css";

const Header = () => {
  return (
    <div className={hm.header}>
      <div className={hm.header__generalName}>AXBIT TEST TASK</div>
    </div>
  );
};

export default Header;