import CategoryIcon1 from '../assets/images/home/CategoryIcon-1.png'
import CategoryIcon2 from '../assets/images/home/CategoryIcon-2.png'
import CategoryIcon3 from '../assets/images/home/CategoryIcon-3.png'
import CategoryIcon4 from '../assets/images/home/CategoryIcon-4.png'
import CategoryIcon5 from '../assets/images/home/CategoryIcon-5.png'
import CategoryIcon6 from '../assets/images/home/CategoryIcon-6.png'
import CategoryIcon7 from '../assets/images/home/CategoryIcon-7.png'
import CategoryIcon8 from '../assets/images/home/CategoryIcon-8.png'
import creator1 from '../assets/images/home/creator1.png'
import creator2 from '../assets/images/home/creator2.png'
import creator3 from '../assets/images/home/creator3.png'
import creator4 from '../assets/images/home/creator4.png'
import creator5 from '../assets/images/home/creator5.png'
import creator6 from '../assets/images/home/creator6.png'
import creator7 from '../assets/images/home/creator7.png'
import creator8 from '../assets/images/home/creator8.png'
import creator9 from '../assets/images/home/creator9.png'
import creator10 from '../assets/images/home/creator10.png'
import creator11 from '../assets/images/home/creator11.png'
import creator12 from '../assets/images/home/creator12.png'
import wallet from '../assets/images/home/wallet.svg'
import collection from '../assets/images/home/collection.svg'
import earnings from '../assets/images/home/earnings.svg'
import galaxy from "../assets/images/home/galaxy.png";
import edena from "../assets/images/home/edena.png";
import astronaut from "../assets/images/home/astronaut.png";
import avatarJ from "../assets/images/home/avatar-j.png";
import avatarK from "../assets/images/home/avatar-k.png";
import avatarL from "../assets/images/home/avatar-l.png";

import dogNFT from "../assets/images/home/dogNFT.png";
import ratNFT from "../assets/images/home/ratNFT.png";
import bearNFT from "../assets/images/home/bearNFT.png";
import mrFox from "../assets/images/home/mrFox.png";
import beKind from "../assets/images/home/beKind.png";
import avatar from "../assets/images/home/Avatar.png";
import mushroom from "../assets/images/home/mushroom.png";
import mushroomNFT1 from "../assets/images/home/mushroomNFT1.png";
import mushroomNFT2 from "../assets/images/home/mushroomNFT2.png";
import robot from "../assets/images/home/robot.png";
import robotNFT1 from "../assets/images/home/robotNFT1.png";
import robotNFT2 from "../assets/images/home/robotNFT2.png";


export const categories = [
    {
      id: 1,
      title: "Art",
      img: CategoryIcon1,
    },
    {
      id: 2,
      title: "Collectibles",
      img: CategoryIcon2,
    },
    {
      id: 3,
      title: "Music",
      img: CategoryIcon3,
    },
    {
      id: 4,
      title: "Photography",
      img: CategoryIcon4,
    },
    {
      id: 5,
      title: "Video",
      img: CategoryIcon5,
    },
    {
      id: 6,
      title: "Utility",
      img: CategoryIcon6,
    },
    {
      id: 7,
      title: "Sport",
      img: CategoryIcon7,
    },
    {
      id: 8,
      title: "Virtual Worlds",
      img: CategoryIcon8,
    },
];



export const creators = [
    {
        id: 1,
        username: "Keepitreal",
        profilePicture: creator1,
        totalStake: "34.53 ETH",
        display: ""
    },
    {
        id: 2,
        username: "DigiLab",
        profilePicture: creator2,
        totalStake: "34.53 ETH",
        display: ""
    },
    {
        id: 3,
        username: "GravityOne",
        profilePicture: creator3,
        totalStake: "34.53 ETH",
        display: ""
    },
    {
        id: 4,
        username: "Juanie",
        profilePicture: creator4,
        totalStake: "34.53 ETH"
    },
    {
        id: 5,
        username: "BlueWhale",
        profilePicture: creator5,
        totalStake: "34.53 ETH",
        display: ""
    },
    {
        id: 6,
        username: "Mr Fox",
        profilePicture: creator6,
        totalStake: "34.53 ETH",
        display: ""
    },
    {
        id: 7,
        username: "Shroomie",
        profilePicture: creator7,
        totalStake: "34.53 ETH",
        display: "hidden lg:block",
    },
    {
        id: 8,
        username: "Robotica",
        profilePicture: creator8,
        totalStake: "34.53 ETH",
        display: "hidden lg:block",
    },
    {
        id: 9,
        username: "RustyRobot",
        profilePicture: creator9,
        totalStake: "34.53 ETH",
        display: "hidden lg:block",
    },
    {
        id: 10,
        username: "Animakid",
        profilePicture: creator10,
        totalStake: "34.53 ETH",
        display: "hidden lg:block",
    },
    {
        id: 11,
        username: "Dotgu",
        profilePicture: creator11,
        totalStake: "34.53 ETH",
        display: "hidden lg:block",
    },
    {
        id: 12,
        username: "Ghiblier",
        profilePicture: creator12,
        totalStake: "34.53 ETH",
        display: "hidden lg:block",
    },

]


export const roadmap = [
  {
      id: 1,
      title: "Setup Your wallet",
      details: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.", 
      img: wallet
  },
  {
      id: 2,
      title: "Create Collection",
      details: "Upload your work and setup your collection. Add a description, social links and floor price", 
      img: collection,
  },
  {
      id: 3,
      title: "Start Earning",
      details: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.", 
      img: earnings,
  },
]

export const NFTCollection = [
  {
      id: 1,      
      title: "Distant Galaxy",
      img: galaxy,
      ownerUsername: "MoonDancer",
      ownerAvatar: avatarJ,
      price: "1.63 ETH",
      highestBid: "0.333 wETH",
      display: "lg:w-1/3 md:w-1/2",
  },
  {
      id: 2,      
      title: "Life on Edena",
      img: edena,
      ownerUsername: "NebulaKid",
      ownerAvatar: avatarK,
      price: "1.63 ETH",
      highestBid: "0.333 wETH",
      display: "lg:w-1/3 md:w-1/2",
  },
  {
      id: 3,      
      title: "AstroFiction",
      img: astronaut,
      ownerUsername: "Spaceone",
      ownerAvatar: avatarL,
      price: "1.63 ETH",
      highestBid: "0.333 wETH",
      display: "md:hidden lg:block lg:w-1/3 md:w-1/2",
  },
]

export const trendingCollections = [
  {
    id: 1,
    title: "DSGN Animals",
    image: dogNFT,
    NFTs: [ratNFT, bearNFT],
    owner: {
      username: "MrFox",
      profilePicture: mrFox
    },
    display: "",
  },
  {
    id: 2,
    title: "Magic Mushrooms",
    image: mushroom,
    NFTs: [mushroomNFT1, mushroomNFT2],
    owner: {
      username: "Shroomie",
      profilePicture: avatar
    },
    display: "hidden md:block",
  },
  {
    id: 3,
    title: "Disco Machines",
    image: robot,
    NFTs: [robotNFT1, robotNFT2],
    owner: {
      username: "BeKind2Robots",
      profilePicture: beKind
    },
    display: "hidden lg:block",
  },
]
