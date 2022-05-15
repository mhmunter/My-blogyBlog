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
    title: "Computers ar the best.",
    comment_text: "league of legends.",
    user_id: 1,
  },
  {
    title: "Game Boy.",
    comment_text: "the OG, enough said!",
    user_id: 9,
  },
  {
    title: "I like books.",
    comment_text: "The Relic",
    user_id: 5,
  },
  {
    title: "Sports.",
    comment_text: "Football.",
    user_id: 3,
  },
  {
    title: "TV.",
    comment_text:
      "Married With Children",
    user_id: 10,
  },
  {
    title: "Netflix.",
    comment_text: "Stragner Things",
    user_id: 8,
  },
  {
    title: "Paramont.",
    comment_text: "Halo",
    user_id: 3,
  },
  {
    title:
      "Crunchy Roll.",
    comment_text: "That Time I was Reincarnated as a Slime",
    user_id: 3,
  },
  {
    title:
      "Disney.",
    comment_text: "Mandalorian",
    user_id: 7,
  },
  {
    title: "HULU.",
    comment_text: "Golden Girls",
    user_id: 6,
  },
  {
    title: "Pluto.",
    comment_text: "It's free.",
    user_id: 4,
  },
  {
    title: "HBO MAX.",
    comment_text:
      "Peace Maker",
    user_id: 6,
  },
  {
    title:
      "Funimation.",
    comment_text: "Galatic Heros",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
