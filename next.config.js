/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]);
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en-gb", "uk"],
    defaultLocale: "en-gb",
  },
};
