import { AiFillYoutube, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const FooterSocials = [
  {
    link: "https:www.youtube.com/@SmYt_IND",
    icon: <AiFillYoutube />,
  },
  {
    link: "https:www.instagram.com/smyt_ind",
    icon: <AiFillInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/",
    icon: <AiFillLinkedin />,
  },
  {
    link: "https://discord.gg/mpr4U6kR5A",
    icon: <FaDiscord />,
  },
];

const FooterLinks = [
  {
    name: `AboutUS`,
    url: `/about`,
  },
  {
    name: `ContactUS`,
    url: `/contact`,
  },
];

export { FooterLinks, FooterSocials };
