import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Modals from "./ModalFortext/Modals";

export default function Option() {
  return (
    <Navbar className="bg-black text-white">
      <NavbarBrand>
     
     
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
     <Modals></Modals>
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
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
