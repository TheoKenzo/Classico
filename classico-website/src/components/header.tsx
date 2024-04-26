import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex min-w-full max-w-1920px h-24 p-6">
            <Navbar>
                <NavbarBrand>
                    <Image
                        src="/images/MainIcon.svg"
                        width={56}
                        height={56}
                        alt="Clássico"
                    />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="/">
                            Descobrir
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/Sobre">
                            Sobre
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/Contato">
                            Contato
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="default" href="#" variant="flat" radius="full">
                            Algum Texto
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </header>
    );
}
