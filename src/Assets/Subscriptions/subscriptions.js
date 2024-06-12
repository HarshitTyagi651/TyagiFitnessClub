import zumba from './blueCrown.png';
import diamond from './crown.png';
import gold from './goldCrown.png';

let subscriptions = [
  {
    id: 1,
    name: "Diamond Membership",
    description: 'hello you kys akr raha h bhai mujhe trainer rakhle 1 mahine m body bnwadunga',
    price: 1999,
    features: ["Gym", "Zumba", "Yoga", "Calisthenics","Personal Locker"],
    bg: 'rgb(250, 182, 232)',
    image: diamond,
    bgBtn: 'rgb(255, 29, 232)',
  },
  {
    id: 2,
    name: "Gold Membership",
    description: 'hello you kys akr raha h bhai mujhe trainer rakhle 1 mahine m body bnwadunga',
    price: 1499,
    features: ["Gym", "Yoga", "Calisthenics"],
    bg: 'rgb(255, 243, 168)',
    image: gold,
    bgBtn: 'rgb(246, 218, 3)',
  },
  {
    id: 3,
    name: "Zumba Membership",
    description: 'hello you kys akr raha h bhai mujhe trainer rakhle 1 mahine m body bnwadunga',
    price: 999,
    features: ["Zumba"],
    bg: 'rgb(184, 197, 255)',
    image: zumba,
    bgBtn: 'blue',

  },
];

export default subscriptions;
