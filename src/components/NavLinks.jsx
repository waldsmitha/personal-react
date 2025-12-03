const NavLinks = ({ navActive, setNavActive, desktop }) => {
  const links = ["home", "portfolio", "about", "experience"];
  const navToggle = () => {
    if (!desktop) setNavActive(!navActive);
  };

  return (
    <ul>
      {links.map((item) => (
        <li key={item} onClick={() => navToggle()}>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
