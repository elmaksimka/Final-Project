// var status = function (response) {
//   if (response.status !== 200) {
//     return Promise.reject(new Error(response.statusText))
//   }
//   return Promise.resolve(response)
// }
// var json = function (response) {
//   return response.json()
// }

// const apiResult = []; 

// fetch('http://localhost:3000/projects')
//   .then(status)
//   .then(json)
//   .then(function (data) {
//     apiResult.push(data)
//   })
//   .catch(function (error) {
//     console.log('error', error)
//   });

// const container = document.getElementById('portfolio__gallery');

// apiResult.forEach((result) => {
//   document.createElement('div');
  
// })

const courses = [
  {
    url: "#",
    title: "Drawing Essentials",
    thumbnail: "img/course1.png",
    category: "Art",
    description: "Learn to draw and color with the extensive course.",
    price: "299.99",
    date: "12.12.2022",
  },

  {
    url: "#",
    title: "Design Masterclass",
    category: "Design",
    thumbnail: "img/course2.png",
    description: "Learn the basic theories behind excellent designs.",
    price: "119.99",
    date: "22.12.2022",
  },

  {
    url: "#",
    title: "How AI Works?",
    category: "Technology",
    thumbnail: "img/course3.png",
    description:
      "This course is for those who are interested in getting started with AI.",
    price: "149.99",
    date: "02.01.2023",
  },

  {
    url: "#",
    title: "Adobe XD - The Crash Course",
    category: "Design",
    thumbnail: "img/course4.png",
    description: "Learn how to use Adobe XD to create stunning websites.",
    price: "99.99",
    date: "12.01.2023",
  },
  {
    url: "#",
    title: "Adobe XD - The Crash Course",
    category: "Design",
    thumbnail: "img/course4.png",
    description: "Learn how to use Adobe XD to create stunning websites.",
    price: "99.99",
    date: "22.01.2023",
  },
  {
    url: "#",
    title: "Adobe XD - The Crash Course",
    category: "Design",
    thumbnail: "img/course4.png",
    description: "Learn how to use Adobe XD to create stunning websites.",
    price: "99.99",
    date: "02.02.2023",
  },
];

const coursesContainer = document.querySelector(".courses-container");

const displayCourse = (
  urlValue,
  titleValue,
  categoryValue,
  thumbnailValue,
  descriptionValue,
  priceValue,
  dateValue
) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const a = document.createElement("a");
  a.setAttribute("href", urlValue);

  const category = document.createElement("div");
  category.classList.add("category");
  category.innerHTML = categoryValue;

  const img = document.createElement("img");
  img.setAttribute("src", thumbnailValue);

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerHTML = titleValue;

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = descriptionValue;

  const info = document.createElement("div");
  info.classList.add("info");

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerHTML = priceValue;

  const date = document.createElement("div");
  date.classList.add("date");
  date.innerHTML = dateValue;



  //   Appending Elements

  coursesContainer.appendChild(card);
  card.appendChild(a);
  a.appendChild(category);
  a.appendChild(img);
  a.appendChild(title);
  a.appendChild(description);
  a.appendChild(info);

  info.appendChild(price);
  info.appendChild(date);

};

const generateCourseData = () => {
  courses.forEach((c) => {
    displayCourse(
      c.url,
      c.title,
      c.category,
      c.thumbnail,
      c.description,
      c.price,
      c.date
    );
  });
};

generateCourseData();