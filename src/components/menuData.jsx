// src/components/menuData.js
const menuData = [
  
  {
    title: "About SVCET",
    items: [
      { name: "Chairman", link: "/chairman" },
      { name: "Vice Chairman", link: "vicechairman" },
      { name: "CEO", link: "/ceo" },
      { name: "Principal", link: "/principal" },
      { name: "Vision & Mission", link: "/vision-mission" },
    ],
  },
  {
    title: "Academics",
    items: [
      { name: "UG Programmes", link: "https://www.srividyaengg.ac.in/civil-engineering/" },
     {
        name: "PG Programmes",
        submenu: [
          { name: "MBA", link: "https://www.srividyaengg.ac.in/mba/" },
          { name: "MCA", link: "https://www.srividyaengg.ac.in/structural/" },
        ],
      },
    ],
  },
  {
    title: "Admissions",
    items: [
      { name: "Admissions for First Year", link: "https://www.srividyaengg.ac.in/civil-engineering/" },
      { name: "Admissions for Direct", link: "https://www.srividyaengg.ac.in/cse/" },
      { name: "Admissions for M.E /MBA", link: "https://www.srividyaengg.ac.in/ece/" },
    ],
  }
];

export default menuData;
