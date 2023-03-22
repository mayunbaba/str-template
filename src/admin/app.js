import Logo from "./extensions/logo.png";

const config = {
  // Replace the Strapi logo in auth (login) views
  // auth: {
  //   logo: Logo,
  // },
  // Replace the favicon
  head: {
    favicon: Logo,
  },
  // Replace the Strapi logo in the main navigation
  // menu: {
  //   logo: Logo,
  // },
  locales: ["zh-Hans", "en"],
  // Override or extend the theme
  theme: {
    // overwrite light theme properties
    light: {
      // colors: {
      //   primary100: '#f6ecfc',
      //   primary200: '#e0c1f4',
      //   primary500: '#ac73e6',
      //   primary600: '#9736e8',
      //   primary700: '#8312d1',
      //   danger700: '#b72b1a'
      // },
    },

    // overwrite dark theme properties
    dark: {
       // ...
    }
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
