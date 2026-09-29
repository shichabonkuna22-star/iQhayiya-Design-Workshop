export const articles = [
  {
    id: "saia-kzn-2019",
    title: "Mfundo Maphumulo sits on the 2019 SAIA-KZN Awards jury",
    category: "Awards",
    dateline: "KZNIA Journal · Issue 2 / 2019",
    byline: "Editorial by Walter Peters, editor and jury co-convenor",
    excerpt:
      "The KwaZulu-Natal Institute of Architects journal records Mfundo Maphumulo, a principal of iQhayiya Design Workshop, on the SAIA-KZN Awards jury.",
    image: "images/news/saia-kzn-2019-editorial.jpg",
    imageAlt:
      "Editorial page from SAIA-KZN Journal Issue 2/2019, with the awards jury photograph including Mfundo Maphumulo",
    caption: "Editorial page, KZNIA Journal 2/2019",
    source:
      "Source: SAIA-KZN Journal, Issue 2/2019.",
    sourceHref: "https://saiakzn.org.za/wp-content/journals/2019-2-kznia.pdf",
    sourceLinkLabel: "Read the journal (PDF)",
    paragraphs: [
      "The 2019 issue of the KwaZulu-Natal Institute of Architects journal is given over to the SAIA-KZN Awards for Architecture and Special Mentions. The jury was assembled to match the national brief for the biennial programme.",
      "Nadia Tromp of NTSIKA Architects, Sandton, chaired the panel. She was joined by Rozena Maart, professor and then immediate-past Director of the Centre for Critical Research on Race and Identity at UKZN, and Dr Silvia Bodei. The three SAIA-KZN members of the jury were Mfundo Maphumulo, a principal of iQhayiya Design Workshop, Kokstad; Somers Govender of Artek, Durban; and Pat Smith of Walker Smith Architects, Kloof.",
      "The editorial records fifteen entries that year, including one work of social significance, and a touring programme across KwaZulu-Natal in May. Maphumulo appears in the published jury photograph, back row, with Pat Smith and Somers Govender.",
    ],
  },
  {
    id: "computers-for-all",
    title: "Computers for All: rural schools, Vision 2015",
    category: "Press",
    dateline: "Sunday Sun · 23 September 2012",
    byline: "By Giyani Shivambo",
    excerpt:
      "Sunday Sun covers the Vision 2015 drive to equip rural schools with computers. Mfundo Maphumulo appears in the published photograph.",
    image: "images/news/sunday-sun-computers-2012.jpg",
    imageAlt:
      "Sunday Sun clipping, 23 September 2012: Computers for All, with Mfundo Maphumulo in the project photograph",
    caption: "Sunday Sun, page 29",
    source:
      "Source: Sunday Sun, 23 September 2012. Photograph by Giyani Shivambo.",
    sourceHref: "",
    sourceLinkLabel: "",
    paragraphs: [
      "Giyani Shivambo’s report describes the Vision 2015 computer project — a drive, backed by Lotto operator Gidani, to raise money and place more than a thousand computers in rural schools across Mzansi. Advertising directors Lebo Gunguluza and Percy Mphaho are named as the brains behind the initiative.",
      "The published photograph places Mfundo Maphumulo with Cameron Mathebula, Tumi Godo, Percy Mphaho, Lebo Gunguluza, Mdu Khanye and Trilok Bhunjun as the group behind the project. The piece argues that pupils in rural schools should not be left without the equipment city schools already take for granted.",
    ],
  },
  {
    id: "corporate-profile",
    title: "Form follows site orientation",
    category: "Studio",
    dateline: "iQhayiya Design Workshop · corporate profile",
    byline: "Studio record",
    excerpt:
      "The printed corporate profile records the founding of the practice in 2006 and introduces directors Kayalethu Qwalela and Mfundo Maphumulo.",
    image: "images/news/idw-corporate-profile.jpg",
    imageAlt:
      "iQhayiya Design Workshop corporate profile poster with directors Kayalethu Qwalela and Mfundo Maphumulo",
    caption: "Studio profile",
    source:
      "Source: iQhayiya Design Workshop corporate profile. Addresses on the sheet are historic; the studio now works from 88 Marine Drive, Margate.",
    sourceHref: "",
    sourceLinkLabel: "",
    paragraphs: [
      "The studio’s printed profile records the founding of iQhayiya Design Workshop in 2006, first to work a municipal development framework for Flagstaff in the Eastern Cape. It names the practice as driven by Kayalethu Qwalela and Mfundo Maphumulo, alumni of the Tshwane University of Technology, and sets out the line the office still uses: form follows site orientation.",
      "Qwalela is introduced as a SACAP-registered professional architect and a founding managing member, with experience as a project architect at Plan Architects (Johannesburg), a division of Prop5. Maphumulo is introduced as a partner from 2007, after five years in Durban and Johannesburg practices, then overseeing the Johannesburg branch. Both are described as proud TUT alumni.",
    ],
  },
];

export function getArticle(id) {
  return articles.find((article) => article.id === id) || null;
}
