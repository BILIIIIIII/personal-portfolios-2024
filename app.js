const projectData = [
  {
    link: "https://traffic-counter-mobile-programming-5.vercel.app/",
    name: "traffic counter",
    img: "trafficcounter.png",
    date: { day: "16", month: " DES", year: "2023" },
  },
];

// {
//     link: "https://traffic-counter-mobile-programming-5.vercel.app/",
//     name: "TMDB Movie List",
//     img: "trafficcounter.png",
//     date: { day: "24", month: "JAN", year: "2O24" },
//   },

const socmed = [
  {
    link: "https://www.instagram.com/abillzein792/",
    name: "instagram",
    icon: `<i class="bx bxl-instagram"></i>`,
  },
  {
    link: "https://www.linkedin.com/in/khairiabill/",
    name: "linkedin",
    icon: `<i class="bx bxl-linkedin-square"></i>`,
  },
  {
    link: "https://github.com/BILIIIIIII/",
    name: "github",
    icon: `<i class="bx bxl-github"></i>`,
  },
];

const logos = document.getElementById("logos");

socmed.forEach((logo) => {
  let card = document.createElement("div");

  card.innerHTML += `
    <a href="${logo.link}" class="bx-tada-hover" id="${logo.name}" target="_blank">
      ${logo.icon}
    </a>
             
`;
  logos.appendChild(card);
});

const cards = document.getElementById("project-cards");

projectData.forEach((data) => {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML += `
    <a href="${data.link}" target="_blank">

      <div class="info">
        <div class="title"><p>${data.name}</p></div>

         <div class="hero">
          <img src="${data.img}" alt="" />
        </div>
      </div>

      <div class="detail">

        <div class="date">
         ${data.date.month}.${data.date.day} <br />
          ${data.date.year}
        </div>
        
      </div>

    </a>
    `;

  cards.appendChild(card);
});
