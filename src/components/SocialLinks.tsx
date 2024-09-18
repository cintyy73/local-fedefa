import { Product } from "../types";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaLink,
} from "react-icons/fa6";

import { HStack, IconButton } from "@chakra-ui/react";

export default function SocialLinks({
  socialLinks,
}: {
  socialLinks: Product | null;
}) {
  /* ARRAY PARA UNIR TODA LA INFO A TRATAR*/
  const socialIcons = [
    {
      profile: socialLinks.web_profile,
      icon: <FaLink />,
      label: "Website",
    },
    {
      profile: socialLinks.facebook_profile,
      icon: <FaFacebook />,
      label: "Facebook",
    },
    {
      profile: socialLinks.instagram_profile,
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      profile: socialLinks.twitter_profile,
      icon: <FaXTwitter />,
      label: "Twitter",
    },

    {
      profile: socialLinks.linkedin_profile,
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
  ];

  return (
    <HStack spacing={2}>
      {socialIcons.map((social, index) => {
        // Chequea primero si es null o no (la propiedad siempre esta pero puede estar vacia)
        if (!social.profile) {
          return null;
        }

        return (
          <IconButton
            key={index}
            href={social.profile}
            icon={social.icon}
            aria-label={`Visitanos en ${social.label}`}
            as="a"
            isRound={true}
            variant="outline"
            color="#027bb4"
            size="sm"
            fontSize="15px"
            border="2px"
            target="_blank"
            rel="noopener noreferrer"
          />
        );
      })}
    </HStack>
  );
}
