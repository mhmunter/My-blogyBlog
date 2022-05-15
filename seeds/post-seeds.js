const { Post } = require("../models");

const postdata = [
  {
    title: "Playstation is the best console.",
    comment_text: "Metal Gear solid",
    user_id: 10,
  },
  {
    title: "Sega is the best console.",
    comment_text: "SONIC!!!",
    user_id: 8,
  },
  {
    title:
      "Super Nintendo is the best console.",
    comment_text:
      "MARIO!!!!!",
    user_id: 1,
  },
  {
    title: "Sega Saturn is the best console.",
    comment_text: "Panzer Dragon",
    user_id: 4,
  },
  {
    title: "Nintendo Switch is the best console.",
    comment_text: "Mario Cart.",
    user_id: 7,
  },
  {
    title: "Atari is the best console.",
    comment_text: "PONG!",
    user_id: 4,
  },
  {
    title: "Atari Jaguar is the best console.",
    comment_text: "Aliens vs Preditor.",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    comment_text: "http://ucla.edu/consequat/nulla.html",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    comment_text: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    comment_text: "https://reverbnation.com/ligula/sit.jpg",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    comment_text: "http://china.com.cn/lectus/vestibulum.json",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    comment_text:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    comment_text: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    comment_text: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    comment_text: "https://gmpg.org/lorem.jpg",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    comment_text: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    comment_text: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    comment_text: "https://shareasale.com/quis.json",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    comment_text:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    comment_text: "https://java.com/at/nibh/in.png",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
