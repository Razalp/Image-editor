import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Navbars() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar className="bg-black text-white ">
      <NavbarBrand>
        <p className="text-white mr-4">PS</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem></NavbarItem>
        <NavbarItem isActive></NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem>
          <Button onClick={logout} color="primary" href="#" variant="bordered">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
