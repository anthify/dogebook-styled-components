import moment from "moment";

import dogOne from "../media/dog1.jpeg";
import dogTwo from "../media/dog2.jpg";
import dogThree from "../media/dog3.png";
import dogFour from "../media/dog4.jpg";
import dogFive from "../media/dog5.jpg";
import dogSix from "../media/dog6.png";
import dogSeven from "../media/dog7.jpg";
import dogEight from "../media/dog8.jpg";
import dogNine from "../media/dog9.jpg";
import dogTen from "../media/dog10.jpg";

import airbud from "../media/profiles/airbud.jpg";
import dogeeGuy from "../media/profiles/dogee_guy.jpg";
import dogeeQueen from "../media/profiles/dogee_queen.jpg";
import dogeeZone from "../media/profiles/dogeezone.jpg";
import dogger from "../media/profiles/dogger.jpg";
import dogly from "../media/profiles/dogly.jpg";
import duke from "../media/profiles/dogly.jpg";
import gudboy from "../media/profiles/gudboy.jpg";
import kingDogee from "../media/profiles/king_dogee.jpg";
import meff from "../media/profiles/meff.jpg";
import saduj from "../media/profiles/saduj.jpg";
import scndGuddest from "../media/profiles/scnd_guddest.jpg";
import susejDog from "../media/profiles/susej_dog.jpg";
import tastDog from "../media/profiles/tasty_dog.jpg";
import theGuddestBoy from "../media/profiles/the_guddest_boy.jpg";
import waffle from "../media/profiles/waffle.jpg";
import woooof from "../media/profiles/woooof.jpg";
import wuffMaster from "../media/profiles/wuff_master.jpg";

export const posts = {
  "1": {
    id: "1",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Gudboy",
    img: dogOne,
    likes: 233,
    liked: false,
    avatar: gudboy,
    message: "Papped the guddest boi. Lol",
    showComments: true,
    comments: [
      {
        avatar: gudboy,
        name: "Gudboy",
        text: "Wuf"
      },
      {
        avatar: theGuddestBoy,
        name: "The Guddest Boy",
        text: "very wuff"
      }
    ]
  },
  "2": {
    id: "2",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Wuff Master",
    img: dogTwo,
    likes: 102,
    liked: false,
    avatar: wuffMaster,
    message: "he myt not be cleverest but he's ma woof",
    showComments: false,
    comments: [
      {
        avatar: duke,
        name: "Duke",
        text: "Mani Wooph"
      }
    ]
  },
  "3": {
    id: "3",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "a i r b u d",
    img: dogThree,
    likes: 301,
    liked: false,
    avatar: airbud,
    message: "tung out. how rood.🤘",
    showComments: false,
    comments: [
      {
        avatar: dogeeQueen,
        name: "Dogee Queen",
        text: "more woof"
      }
    ]
  },
  "4": {
    id: "4",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Dogee Guy",
    img: dogFour,
    likes: 98,
    liked: false,
    avatar: dogeeGuy,
    message: "dis is doge anonymous. we lick u while u slep",
    showComments: false,
    comments: [
      {
        avatar: dogeeGuy,
        name: "Dogee Guy",
        text: "a igree"
      }
    ]
  },
  "5": {
    id: "5",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "2nd g u d e s t ~boy~",
    img: dogFive,
    likes: 159,
    liked: false,
    avatar: scndGuddest,
    message: "jus hacked NASA Lol",
    showComments: false,
    comments: [
      {
        avatar: woooof,
        name: "woooof",
        text: "more wooof"
      }
    ]
  },
  "6": {
    id: "6",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Susej doG",
    img: dogSix,
    likes: 99,
    liked: false,
    avatar: susejDog,
    message: "much scare.",
    showComments: false,
    comments: [
      {
        avatar: saduj,
        name: "saduj",
        text: "no gud boi"
      }
    ]
  },
  "7": {
    id: "7",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Dogly",
    img: dogSeven,
    likes: 331,
    liked: false,
    avatar: dogly,
    message: "Hop in. We're chasing balls",
    showComments: false,
    comments: [
      {
        avatar: dogger,
        name: "Dogger",
        text: "nioce"
      }
    ]
  },
  "8": {
    id: "8",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "King Dogee",
    img: dogEight,
    likes: 201,
    liked: false,
    avatar: kingDogee,
    message: "dis is ma guddest side",
    showComments: false,
    comments: [
      {
        avatar: waffle,
        name: "Waffle",
        text: "aloha"
      }
    ]
  },
  "9": {
    id: "9",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Dogeezone",
    img: dogNine,
    likes: 188,
    liked: false,
    avatar: dogeeZone,
    message: "Soya spiced latte and Kafka. Yes plz.",
    showComments: false,
    comments: [
      {
        avatar: meff,
        name: "Meff",
        text: "wow. much posh."
      }
    ]
  },
  "10": {
    id: "10",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "T_A_S_T_Y D_O_G",
    img: dogTen,
    likes: 42,
    liked: false,
    avatar: tastDog,
    message: "gonna cook ma soon. Lol jk.",
    showComments: false,
    comments: [
      {
        avatar: kingDogee,
        name: "King Dogee",
        text: "2 plz"
      }
    ]
  }
};
