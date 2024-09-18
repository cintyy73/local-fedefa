import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

interface Link {
  label: string;
  to: string;
  external?: boolean;
}

interface IHamburgerMenuProps {
  links: Link[];
}

export default function HamburgerMenu(props: IHamburgerMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Default activeIndex to 0 if it's null (when the menu is initially rendered)
  const defaultActiveIndex = activeIndex === null ? 0 : activeIndex;

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            fontSize="1.5rem"
            background="none"
            _hover={{ background: "none" }}
            _active={{ background: "none" }}
          >
            {isOpen ? (
              <CloseIcon fontSize="0.9rem" color="#027bb5" />
            ) : (
              <HamburgerIcon color="#027bb5" />
            )}
          </MenuButton>
          <MenuList
            width={{ base: "xs" }}
            background="white"
          >
            {props.links.map((link, index) => (
              <MenuItem
                key={index}
                as="a"
                href={link.to}
                target={link.external ? "_blank" : undefined}
                onClick={() => setActiveIndex(index)}
                _hover={{ background: "#025b94", color: "white" }}
                _active={{ background: "#025b94", color: "white" }}
                bg={index === defaultActiveIndex ? "#027bb5" : "transparent"}
                color={index === defaultActiveIndex ? "white" : "#027bb5"}
              >
                {link.label}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
