import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx

const App = () => {

// setting team, money and zombie list

const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);

const [zombieFighters, setZombieFighters] = useState(
  [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://www.fearthewalkingdead.com.br/wp-content/uploads/2017/09/comic-con-experience-2017-danai-gurira-anunciada-732x732.jpg',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pyxis.nymag.com/v1/imgs/a33/147/e6a8508eccc0078e333274310962b2bde9-the-walking-dead.rsquare.w400.jpg',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://www.starburstmagazine.com/wp-content/uploads/2018/06/Shane-3-shane-walsh-27584140-500-500.jpg',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pbs.twimg.com/profile_images/440519981176877057/_v1o9qS1_400x400.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pbs.twimg.com/profile_images/1049122493611606016/tKGA9BFh_400x400.jpg',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pbs.twimg.com/profile_images/433070389791432704/r9Qps0Ln_400x400.jpeg',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pbs.twimg.com/profile_images/1347289264401297409/vkFy7ChA.jpg',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://i0.wp.com/www.austinchronicle.com/wp-content/uploads/2012/10/rookermerle.webp?fit=490%2C490&ssl=1',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pyxis.nymag.com/v1/imgs/f71/651/a06b7292aabddad2d0c93a194371c8a59a-05-walking-dead-lori2.rsquare.w400.jpg',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://avatarfiles.alphacoders.com/148/thumb-350-148528.webp',
  },
]
);

// add a zombie fighter

const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }
    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
    setZombieFighters(zombieFighters.filter((zombieFighter) => zombieFighter.id !== fighter.id));
  };

// update team strength and agility

const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0);

const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0);

// remove a zombie fighter

const handleRemoveFighter = (fighterToRemove) => {
    setTeam(team.filter((zombieFighter) => zombieFighter.id !== fighterToRemove.id));
    setZombieFighters([...zombieFighters, fighterToRemove]);
    setMoney(money + fighterToRemove.price);
  };

// UI

return (
  // <h1>Hello world!</h1>
  <div className="container">
      <h1>Zombie Fighters</h1>
      <div className="stats-bar">
        <h3>Money: ${money}</h3>
        <h3>Team Strength: {totalStrength}</h3>
        <h3>Team Agility: {totalAgility}</h3>
  </div>

   <section>
  <h2>Available Fighters</h2>
        <ul className="fighter-list">
          {zombieFighters.map((fighter) => (
            <li key={fighter.id} className="fighter-card">
              <img src={fighter.img} alt={fighter.name} />
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button className="add-btn" onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
       </ul>
    </section>

    <section>
        <h2>Your Team</h2>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul className="fighter-list">
            {team.map((fighter) => (
              <li key={fighter.id} className="fighter-card">
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button className="remove-btn" onClick={() => handleRemoveFighter(fighter)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
    </section>
  </div>
 );
};

export default App