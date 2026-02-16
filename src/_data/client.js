export default {
  name: "Pedagogicko-psychologická poradna Pardubice",
  email: "poradna@ppp-pardubice.cz",
  ico: "48160806",
  phoneForTel: "+420466410327",
  phoneFormatted: "+420 466 410 327",
  address: {
    lineOne: "Sukova třída 1260",
    city: "Pardubice",
    zip: "53002",
    mapLink: "https://maps.app.goo.gl/EadnVbbWNuvTePAR6",
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.ppp-pardubice.cz",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};