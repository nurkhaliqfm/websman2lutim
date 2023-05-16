import React, { useState, useEffect } from "react";
import NavbarTransparent from "components/Navbar/Transparent";
import NavbarDefault from "components/Navbar/Default";

const Header = (navbar) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function updatePosition() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <div>
      {navbar.navstyle === "transparent" ? (
        <NavbarTransparent position={scrollPosition} />
      ) : (
        <NavbarDefault />
      )}
    </div>
  );
};

export default Header;
