type Social = {
  name: string;
  url: string;
};

const SOCIALS: { [key: string]: Social } = {
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/karsten-pedersen-864418246/",
  },
  github: {
    name: "Github",
    url: "https://github.com/karstenpedersen",
  },
};

export default SOCIALS;