import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button} from "@nextui-org/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Navbars() {
const navigate =useNavigate()
  const logout =()=>{
    localStorage.clear()

  }



  return (
    
    <Navbar className="bg-black text-white ">
    <NavbarBrand>

                        <p className="text-white mr-4">PS</p>
                   
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        {/* <Link color="foreground" href="#">
          Features
        </Link> */}
      </NavbarItem>
      <NavbarItem isActive>
        {/* <Link href="#" aria-current="page">
          Customers
        </Link> */}
      </NavbarItem>
      <NavbarItem>
        {/* <Link color="foreground" href="#">
          Integrations
        </Link> */}
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        {/* <Link href="#">Login</Link> */}
      </NavbarItem>
      <NavbarItem>
        <Button onClick={logout} color="primary" href="#" variant="bordered">
          Log out
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
 
  );
}
