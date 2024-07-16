const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: /*"https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg"*/ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtwpnBtpuRwC_3bdV88x2-0oo_cJf-XpwNQ&s",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
let newMenu = [...menu];
let section = document.querySelector(".menu");
let menuDOM = document.querySelector(".section-center");
let copyMenuDom = menuDOM.cloneNode();
let isDisplayed = true;

// Buttonlar
let btnContainer = document.querySelector(".btn-container");
let btnAll = document.createElement("button");
btnAll.classList.add("btn");
btnAll.classList.add("btn-item");
btnAll.innerHTML = "All";
btnAll.onclick = function () {
  newMenu = [...menu];
  displayMenu();
};
btnContainer.appendChild(btnAll);

let btnKorea = document.createElement("button");
btnKorea.classList.add("btn");
btnKorea.classList.add("btn-item");
btnKorea.innerHTML = "Korea";
btnContainer.appendChild(btnKorea);
btnKorea.onclick = function () {
  newMenu = menu.filter((element) => {
    if (element.category === "Korea") {
      return element;
    }
  });

  displayMenu();
};

let btnJapan = document.createElement("button");
btnJapan.classList.add("btn");
btnJapan.classList.add("btn-item");
btnJapan.innerHTML = "Japan";
btnContainer.appendChild(btnJapan);
btnJapan.onclick = function () {
  newMenu = menu.filter((element) => {
    if (element.category === "Japan") {
      return element;
    }
  });

  displayMenu();
};

let btnChina = document.createElement("button");
btnChina.classList.add("btn");
btnChina.classList.add("btn-item");
btnChina.innerHTML = "China";
btnContainer.appendChild(btnChina);
btnChina.onclick = function () {
  newMenu = menu.filter((element) => {
    if (element.category === "China") {
      return element;
    }
  });

  displayMenu();
};

function displayMenu() {
  menuDOM.innerHTML = "";
  newMenu.forEach((element) => {
    let { id, title, category, price, img, desc } = element;
    let menuInfo = document.createElement("div");
    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    let menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuInfo.classList.add("menu-info");
    let item = document.createElement("div");
    item.classList.add("menu-items");
    item.classList.add("col-lg-6");
    item.classList.add("col-sm-12");

    let photoOfElement = document.createElement("img");
    photoOfElement.classList.add("photo");
    photoOfElement.src = element.img;

    let itemTitle = document.createElement("h4");
    itemTitle.innerHTML = title;
    menuTitle.appendChild(itemTitle);

    let itemPrice = document.createElement("h4");
    itemPrice.classList.add("price");
    itemPrice.innerHTML = price;
    menuTitle.appendChild(itemPrice);
    menuInfo.appendChild(menuTitle);

    menuText.innerHTML = desc;
    menuInfo.appendChild(menuText);

    item.appendChild(photoOfElement);
    item.appendChild(menuInfo);
    item.innerHTML += ``;
    menuDOM.appendChild(item);
    menuDOM.classList.add("menu-items");
  });
}
displayMenu();
