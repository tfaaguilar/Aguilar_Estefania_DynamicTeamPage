const members = [
  {
    name: "Juan Perez",
    position: "CEO",
    bio: "Juan is an experienced CEO with a track record of success in leading organizations through growth and change.",
    img: "https://via.placeholder.com/200x200?text=Juan+Perez",
  },
  {
    name: "Maria Rodriguez",
    position: "Marketing Manager",
    bio: "Maria is a creative marketer with a passion for branding and customer experience.",
    img: "https://via.placeholder.com/200x200?text=Maria+Rodriguez",
  },
  {
    name: "Pedro Sanchez",
    position: "Sales Director",
    bio: "Pedro is a results-driven sales leader with expertise in driving revenue growth and building high-performing teams.",
    img: "https://via.placeholder.com/200x200?text=Pedro+Sanchez",
  },
  {
    name: "Ana Garcia",
    position: "Product Manager",
    bio: "Ana is a strategic product leader with a passion for creating innovative solutions that solve customer needs.",
    img: "https://via.placeholder.com/200x200?text=Ana+Garcia",
  },
];

const lightbox = document.querySelector("#lightbox");
const lightboxContent = document.querySelector("#lightbox-content");
const closeBtn = document.querySelector("#close");

function createMember(member) {
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("member");

  const memberImg = document.createElement("img");
  memberImg.src = member.img;
  memberImg.alt = member.name;
  memberImg.addEventListener("click", () => {
    showLightbox(member);
  });
  memberImg.addEventListener("mouseover", () => {
    memberImg.style.backgroundColor = "rgba(221,160,221,0.5)";
    memberName.style.visibility = "visible";
  });
  memberImg.addEventListener("mouseout", () => {
    memberImg.style.backgroundColor = "";
    memberName.style.visibility = "hidden";
  });

  const memberName = document.createElement("div");
  memberName.classList.add("name");
  memberName.innerText = member.name;

  memberDiv.appendChild(memberImg);
  memberDiv.appendChild(memberName);

  return memberDiv;
}

function showLightbox(member) {
  lightboxContent.innerHTML = `
    <img src="${member.img}" alt="${member.name}">
    <h2>${member.name}</h2>
    <p>${member.position}</p>
    <p>${member.bio}</p>
  `;
  lightbox.classList.remove("hidden");
}

function hideLightbox() {
  lightbox.classList.add("hidden");
}

closeBtn.addEventListener("click", hideLightbox);

const teamDiv = document.querySelector("#team");

members.forEach((member) => {
  const memberDiv = createMember(member);
  teamDiv.appendChild(memberDiv);
});
