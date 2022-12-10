import "./NavBarItem.css";

const NavBarItem = ({ label, extraClasses, href, onClick }) => {
  return (
    <a className={`link ${extraClasses}`} href={href} onClick={onClick}>
      {label}
    </a>
  );
};

export default NavBarItem;
