const peopleData = [
  {
    name: "Jeff Carlisle",
    bio: "Carlisle is the former Chief and Deputy Chief in the FCC's Wireline Competition Bureau and has spent more than 25 years in the wireless, satellite, and cable communications industry. Currently, he is a partner at Lerman Senter, a telecommunications-focused law firm in DC, where he advises clients on spectrum auctions, Universal Service, pricing, licensing, and compliance. He's had extensive experience in regulated pricing of telecommunications services, overseeing tariff investigations, and payphone compensation proceedings at the FCC, and he has testified before Congress six times. Carlisle holds a law degree from UC Berkeley's Boalt Hall and a B.A. from UCLA.",
    imageUrl: "/images/people/jeff.jpg",
  },
  {
    name: "Tricia Hoffler",
    bio: "Hoffler is recognized as an icon in the legal community. In July 2020, she became the 78th President of the National Bar Association (NBA), the country’s oldest and largest network of Black lawyers and judges. Under her leadership, the NBA formed strategic partnerships with the Transformative Justice Coalition, the NAACP, and the Lawyers’ Committee on Civil Rights. As CEO of the Atlanta-based The CK Hoffler Firm, the Georgetown Law School graduate has represented a wide range of public and private sector clients, in addition to individuals. Hoffler is fluent in French and proficient in Spanish and Portuguese.",
    imageUrl: "/images/people/tricia.jpg",
  },
  {
    name: "Yusef Jackson",
    bio: "A private investor, attorney, entrepreneur, and corporate advisor, Mr. Jackson has more than 25 years of leadership experience with a diverse range of industries including beverage distribution, media, and technology with companies including Chicago-based River North Sales & Service, Florida’s Progressive Distribution, Radar Magazine and Radar Online, and others. He maintains a close connection with the fight for dignity, civil rights, and economic justice for disenfranchised people through his work with the Rainbow Push Coalition and Jackson Legacy Foundation. In addition, Yusef serves as Director of the Board for the Children’s Choir of Chicago, the Board for the Membership Collective Group (MCG), and the Board of Trustees for the Virginia Athletics Foundation.",
    imageUrl: "/images/people/yusef.jpg",
  },
  {
    name: "Andre Norman",
    bio: "Known to many as “The Ambassador of Hope,” Norman travels around the world to serve as a mentor and listening ear for the incarcerated. After being sentenced to over 100 years in prison, he quickly rose to the top of the prison gang system. But during a two-year stay in solitary confinement, he had an epiphany and made the decision to turn his life around. Over the next eight years, he worked 20 hours per day teaching himself how to read, understand the law, and participate in anger management groups. After winning his appeal and getting his GED, Andre walked out of prison in 1999 after serving fourteen years, and has been working tirelessly since then to inspire and help the incarcerated change their lives.",
    imageUrl: "/images/people/andre.jpg",
  },
];

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  res.status(200).json(peopleData);
}
