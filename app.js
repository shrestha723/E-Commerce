
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LIP STICK",
    price: 350,
    colors: [
      {
        
        img: "https://media.istockphoto.com/photos/set-of-beautiful-lipsticks-picture-id1167896858?k=20&m=1167896858&s=612x612&w=0&h=JFSMG3VVsZvBOdyf1glwVMr9OQR1pTIqCSx4muD796g=",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "EYE SHADOW",
   price:  500,
    colors: [
      {
        
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkxcVoAMGcOyJAJV-PGpYyngRKUaWoZ3wwA&usqp=CAU",
        
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "NAIL POLISH",
    price: 150,
    colors: [
      {
        code: "lightgray",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0IozjR087d1BW7TOghu6IMQq86LJjeNqAaZyZ_sJbn9pNavR0ibHilYkEAqWiezKJjU&usqp=CAU",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "EYE LINER",
    price: 300,
    colors: [
      {
        code: "black",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEVM3K1NmDOhF4YDthad0xjbZciTjK_FfxGX2dwuqJ_4fhcnXsEK15zS9on7Hs1YIhSI&usqp=CAU",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
