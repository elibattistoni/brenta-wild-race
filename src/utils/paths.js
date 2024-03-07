export const paths = {
  home: { link: "/brenta-wild-race/", title: "Home" },
  gara: {
    title: "Gara",
    linkOff: "/brenta-wild-race/gara",
    children: {
      percorsoVarianti: {
        link: "/brenta-wild-race/gara/percorso-varianti",
        title: "Percorso e Varianti",
      },
      programma: {
        link: "/brenta-wild-race/gara/programma",
        title: "Programma",
      },
      regolamento: {
        link: "/brenta-wild-race/gara/regolamento",
        title: "Regolamento",
      },
      montepremi: {
        link: "/brenta-wild-race/gara/montepremi",
        title: "Montepremi",
      },
      iscrizione: {
        link: "/brenta-wild-race/gara/iscrizione",
        title: "Iscrizione",
      },
    },
  },
  edizioni: {
    link: "/brenta-wild-race/edizioni",
    title: "Edizioni",
    children: {
      2017: { link: "/brenta-wild-race/edizioni/2017", title: "2017" },
      2018: { link: "/brenta-wild-race/edizioni/2018", title: "2018" },
      2019: { link: "/brenta-wild-race/edizioni/2019", title: "2019" },
    },
  },
  sponsor: { link: "/brenta-wild-race/sponsor", title: "Sponsor" },
  contatti: {
    link: "/brenta-wild-race/contatti",
    title: "Contatti",
    children: {
      about: { link: "/brenta-wild-race/contatti", title: "Chi Siamo" },
      rooms: { link: "/brenta-wild-race/contatti", title: "Dove Alloggiare" },
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
