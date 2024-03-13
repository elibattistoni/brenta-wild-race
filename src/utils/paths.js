export const paths = {
  home: { link: "/", title: "Home" },
  gara: {
    title: "Gara",
    linkOff: "/gara",
    children: {
      percorsoVarianti: {
        link: "/gara/percorso-varianti",
        title: "Percorso e Varianti",
      },
      programma: {
        link: "/gara/programma",
        title: "Programma",
      },
      regolamento: {
        link: "/gara/regolamento",
        title: "Regolamento",
      },
      montepremi: {
        link: "/gara/montepremi",
        title: "Montepremi",
      },
      iscrizione: {
        link: "/gara/iscrizione",
        title: "Iscrizione",
      },
    },
  },
  edizioni: {
    link: "/edizioni",
    title: "Edizioni",
    children: {
      2017: { link: "/edizioni/2017", title: "2017" },
      2018: { link: "/edizioni/2018", title: "2018" },
      2019: { link: "/edizioni/2019", title: "2019" },
    },
  },
  sponsor: { link: "/sponsor", title: "Sponsor" },
  contatti: {
    link: "/contatti",
    title: "Contatti",
    children: {
      about: { link: "/contatti", title: "Chi Siamo" },
      rooms: { link: "/contatti", title: "Dove Alloggiare" },
    },
  },
};

export const mainNavPaths = [
  { link: paths.home.link, label: paths.home.title },
  {
    label: paths.gara.title,
    links: [
      ...Object.entries(paths.gara.children).map((item) => ({
        label: item[1].title,
        link: item[1].link,
      })),
    ],
  },
  { link: paths.edizioni.link, label: paths.edizioni.title },
  { link: paths.sponsor.link, label: paths.sponsor.title },
  { link: paths.contatti.link, label: paths.contatti.title },
];

export const footerPaths = [
  {
    title: paths.home.title,
    links: [{ title: "Brenta Wild Race", link: paths.home.link }],
  },
  {
    title: paths.gara.title,
    links: [
      ...Object.entries(paths.gara.children).map((item) => ({
        title: item[1].title,
        link: item[1].link,
      })),
    ],
  },
  {
    title: paths.edizioni.title,
    links: Object.entries(paths.edizioni.children).map((item) => ({
      title: item[1].title,
      link: item[1].link,
    })),
  },
  {
    title: paths.sponsor.title,
    links: [{ title: "I nostri Sponsor", link: paths.sponsor.link }],
  },
  {
    title: paths.contatti.title,
    links: Object.entries(paths.contatti.children).map((item) => ({
      title: item[1].title,
      link: item[1].link,
    })),
  },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/brentaskyrace/",
  facebook: "https://www.facebook.com/brentasky",
};
