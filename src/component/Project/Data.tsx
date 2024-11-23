import { MdFormatStrikethrough } from "react-icons/md";
import { DiMaterializecss } from "react-icons/di";
import { FaHardHat, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiJsonwebtokens, SiStorybook, SiTailwindcss, SiTypescript, SiVite, SiWeb3Dotjs } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { DiNodejsSmall } from "react-icons/di";
import { ImLoop2, ImTree } from "react-icons/im";
import { SiAxios } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { TbBrandGraphql } from "react-icons/tb";
import { ReactNode } from "react";


export type Timestamp = {
  name: string;
  timestamp: number;
};

type Tool = {
  name: string;
  icon: ReactNode | null;
  Img: string | null;
};

export type imageDialog = {
  content: "image";
  images: string[];
}

export type videoDialog = {
  content: "video";
  youtube: string;
  videoId: string;
  timestamps: Timestamp[];
}

export type Project = {
  title: string;
  logo?: string;
  isBig: boolean;
  description: string;
  images: string[];
  dialog: imageDialog | videoDialog;
  tools: Tool[];
  features: string[];
  liveDemo: string;
  github: string;
}

export const allProjects: Project[] = [
    {
      title: "DaoSender",
      logo: "assets/projects/DaoSender/dsLogo.svg",
      isBig: false,
      description:
        "The most gas-optimized solution for airdropping ERC20 tokens. Designed for efficiency, allowing users to upload unlimited recipient addresses and amounts, automatically calculating and selecting the most cost-effective way to execute transactions. Live on 8 chains.",
      images: [
        "assets/projects/DaoSender/ds1.JPG",
        "assets/projects/DaoSender/ds2.1.png",
        "assets/projects/DaoSender/ds3.JPG",
        "assets/projects/DaoSender/ds5.JPG",
        "assets/projects/DaoSender/ds7.JPG",
      ],
      dialog: {
        content: "image",
        images: [
          "assets/projects/DaoSender/ds1.JPG",
          "assets/projects/DaoSender/ds2.1.png",
          "assets/projects/DaoSender/ds3.JPG",
          "assets/projects/DaoSender/ds5.JPG",
          "assets/projects/DaoSender/ds7.JPG",
        ],
      },
      tools: [
        { name: "React", icon: <FaReact />, Img: null },
        { name: "Solidity", icon: <SiSolidity />, Img: null },
        { name: "GraphQL", icon: <TbBrandGraphql />, Img: null },
        { name: "TypeScript", icon: <SiTypescript />, Img: null },
        { name: "Vite", icon: <SiVite />, Img: null },
        { name: "Web3.js", icon: <SiWeb3Dotjs />, Img: null },
        { name: "Tailwind", icon: <SiTailwindcss />, Img: null },
        { name: "Hardhat", icon: <FaHardHat />, Img: null },
        { name: "Storybook", icon: <SiStorybook />, Img: null },
      ],
      features: [
        "Batch Transactions",
        "Unlimited Recipients",
        "Cheapest in Market",
        "Automated Gas Estimation",
        "8 Chains Supported"
      ],
      liveDemo: "https://ethtactoe.com/",
      github: "https://github.com/ashwinarora/ethereum-tictactoe",
    },


    {
      title: "SubsCrypt",
      isBig: false,
      description:
        "A subscription management platform on Ethereum, revolutionizing how creators and subscribers interact. Think Patreon, but fully decentralized and powered by blockchain! Empowering creators to monetize their services with complete transparency and giving subscribers unmatched trust and security in every transaction. 🚀",
      images: [
        "assets/projects/SubsCrypt/sc1.JPG",
        "assets/projects/SubsCrypt/sc2.JPG",
        "assets/projects/SubsCrypt/sc3.JPG",
        "assets/projects/SubsCrypt/sc4.JPG",
        "assets/projects/SubsCrypt/sc5.JPG",
      ],
      dialog: {
        content: "image",
        images: [
          "assets/projects/SubsCrypt/sc1.JPG",
          "assets/projects/SubsCrypt/sc2.JPG",
          "assets/projects/SubsCrypt/sc3.JPG",
          "assets/projects/SubsCrypt/sc4.JPG",
          "assets/projects/SubsCrypt/sc5.JPG",
        ],
      },
      tools: [
        { name: "React", icon: <FaReact />, Img: null },
        { name: "Solidity", icon: <SiSolidity />, Img: null },
        { name: "TypeScript", icon: <SiTypescript />, Img: null },
        { name: "Vite", icon: <SiVite />, Img: null },
        { name: "Web3.js", icon: <SiWeb3Dotjs />, Img: null },
        { name: "Tailwind", icon: <SiTailwindcss />, Img: null },
        { name: "Hardhat", icon: <FaHardHat />, Img: null },
        { name: "Cron Job", icon: <ImLoop2 />, Img: null },
        { name: "Node", icon: null, Img: "assets/icons/node.svg" },
      ],
      features: [
        "Decentralized Services",
        "Automated Payments",
        "Creator Freedom",
        "Subscriber Security",
        "Complete Transparency",
        "Immutable Records",
      ],
      liveDemo: "https://ethtactoe.com/",
      github: "https://github.com/ashwinarora/ethereum-tictactoe",
    },


    {
      title: "Ethereum TicTacToe",
      isBig: true,
      description:
        "A real-time multiplayer TicTacToe game where two players bet in ETH and the winner takes all. A state channel is created between the two players to enable Off-Chain exchange of messages. These messages are signed by the player's private key.",
      images: [
        "assets/projects/et1.jpg",
        "assets/projects/et2.jpg",
        "assets/projects/et3.jpg",
        "assets/projects/et4.jpg",
        "assets/projects/et5.jpg",
      ],
      dialog: {
        content: "video",
        youtube: "https://www.youtube.com/embed/zccVz3-4Mho?start=",
        videoId: "UmSzmoAK5jM",
        timestamps: [
          {
            name: "Intro",
            timestamp: 0,
          },
          {
            name: "Initial Account Balance",
            timestamp: 5,
          },
          {
            name: "New Game Created",
            timestamp: 13,
          },
          {
            name: "Game Joined",
            timestamp: 26,
          },
          {
            name: "Game Play Started",
            timestamp: 44,
          },
          {
            name: "Game Ended",
            timestamp: 73,
          },
          {
            name: "Final Account Balance",
            timestamp: 79,
          },
        ],
      },
      tools: [
        { name: "Socket.io", icon: null, Img: "assets/icons/socket.svg" },
        { name: "Ethers.js", icon: <FaEthereum />, Img: null },
        { name: "Node", icon: null, Img: "assets/icons/node.svg" },
        { name: "Express", icon: null, Img: "assets/icons/express.svg" },
        { name: "DOM", icon: <ImTree />, Img: null },
        { name: "Bootstrap", icon: null, Img: "assets/icons/bootstrap.svg" },
        { name: "Solidity", icon: <SiSolidity />, Img: null },
      ],
      features: [
        "Multiplayer",
        "Real Time",
        "Instant Payouts",
        "State Channel",
        "Off-Chain Gameplay",
      ],
      liveDemo: "https://ethtactoe.com/",
      github: "https://github.com/ashwinarora/ethereum-tictactoe",
    },


    {
      title: "Social Network",
      isBig: false,
      description:
        "A full-fledged social networking platform. Allowing users to follow, post images, comment, like etc. A complete implementation of MERN stack with JWT authentication.A full-fledged social networking platform.",
      images: [
        "assets/projects/sn-01.jpg",
        "assets/projects/sn-02.jpg",
        "assets/projects/sn-03.jpg",
        "assets/projects/sn-04.jpg",
        "assets/projects/sn-05.jpg",
      ],
      dialog: {
        content: "video",
        youtube: "https://www.youtube.com/embed/zccVz3-4Mho?start=",
        videoId: "yrIb_unPfec",
        timestamps: [
          {
            name: "Sign Up/Sign In",
            timestamp: 0,
          },
          {
            name: "Sign In Success",
            timestamp: 18,
          },
          {
            name: "Follow/Unfollow",
            timestamp: 39,
          },
          {
            name: "Like and Comment",
            timestamp: 48,
          },
          {
            name: "New Post",
            timestamp: 56,
          },
          {
            name: "Update Profile Image",
            timestamp: 74,
          },
          {
            name: "Delete Post",
            timestamp: 81,
          },
          {
            name: "Password Reset",
            timestamp: 88,
          },
        ],
      },
      tools: [
        { name: "React", icon: <FaReact />, Img: null },
        { name: "MongoDB", icon: <DiMongodb />, Img: null },
        {
          name: "JWT Authentication",
          icon: <SiJsonwebtokens />,
          Img: null,
        },
        { name: "Express", icon: null, Img: "assets/icons/express.svg" },
        { name: "Fetch Api", icon: <FiSettings />, Img: null },
        {
          name: "Nodemailer",
          icon: <DiNodejsSmall />,
          Img: null,
        },
        { name: "MaterializeCSS", icon: <DiMaterializecss />, Img: null },
        { name: "REST", icon: <FiSettings />, Img: null },
      ],
      features: [
        "Follow/Unfollow",
        "Make New Post",
        "Like & Comment",
        "Password Reset",
        "Image Upload",
        "Search",
      ],
      liveDemo: "https://socialnetwrk.in/",
      github: "https://github.com/ashwinarora/mern-social-network",
    },


    {
      title: "Ethereum Housie",
      isBig: false,
      description:
        "A real-time multiplayer game inspired by Bingo. There is no limit to the number of players per game. Each player pays in ETH to purchase a ticket and then select 15 numbers(1-90). The server broadcasts random numbers one by one to the players.",
      images: [
        "assets/projects/hr1.jpg",
        "assets/projects/hr2.jpg",
        "assets/projects/hr3.jpg",
        "assets/projects/hr4.jpg",
        "assets/projects/hr5.jpg",
      ],
      dialog: {
        content: "video",
        youtube: "https://www.youtube.com/embed/zccVz3-4Mho?start=",
        videoId: "aN0AKmAdPjs",
        timestamps: [
          {
            name: "Game Setup",
            timestamp: 0,
          },
          {
            name: "Ticket Setup",
            timestamp: 10,
          },
          {
            name: "Ticket Purchase",
            timestamp: 22,
          },
          {
            name: "Game Started",
            timestamp: 80,
          },
          {
            name: "Game Ended",
            timestamp: 136,
          },
        ],
      },
      tools: [
        { name: "Socket.io", icon: null, Img: "assets/icons/socket.svg" },
        { name: "Web3.js", icon: null, Img: "assets/icons/ether.svg" },
        { name: "React", icon: <FaReact />, Img: null },
        { name: "Node", icon: null, Img: "assets/icons/node.svg" },
        { name: "Express", icon: null, Img: "assets/icons/express.svg" },
        { name: "Axios", icon: <SiAxios />, Img: null },
        {
          name: "Infura",
          icon: <MdFormatStrikethrough />,
          Img: null,
        },
        { name: "Solidity", icon: <SiSolidity />, Img: null },
      ],
      features: [
        "Multiplayer",
        "Real Time",
        "Synchronized Gameplay",
        "Instant Payouts",
        "No Player Limit",
        "Monitor Game",
      ],  
      liveDemo: "https://www.ethhousie.com/",
      github: "https://github.com/ashwinarora/ethereum-housie",
    },
  ];