import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const SITEMAP = [
    {
      title: "Company",
      links: ["About", "Features", "Works", "Career"],
    },
    {
      title: "Help",
      links: ["Discord", "Twitter", "GitHub", "Contact Us"],
      links: [
        "Customer Support",
        "  Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
      links: [
        "Free eBooks",
        " Development Tutorial",
        "   How to - Blog",
        "Youtube Playlist",
      ],
    },
    {
      title: "Links",
      links: [
        "Free eBooks",
        "Development Tutorial",
        " How to - Blog",
        " Youtube Playlist",
      ],
    },
  ];

  return (
    <footer className=" ">
      <div className="w-full mt-20">
        <div className=" grid w-full grid-cols-1 text-white gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 justify-between">
          {SITEMAP.map(({ title, links, index }) => (
            <div key={index} className="w-full">
              <Typography
                variant="small"
                className="mb-4 font-semibold  "
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    className="font-light text-sm"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105  "
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
     
      </div>
    </footer>
  );
};

export default Footer;
