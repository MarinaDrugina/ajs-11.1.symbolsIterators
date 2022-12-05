import Bowman from './bowman.js';
import Daemon from './daemon.js';
import Magician from './magician.js';
import Swordsman from './swordsman.js';
import Undead from './undead.js';
import Zombie from './zombie.js';
import Team from './team.js';

const currentCharacters = [
  new Zombie('zombie'),
  new Undead('undead'),
  new Daemon('daemon'),
  new Magician('magician'),
  new Swordsman('swordsman'),
  new Bowman('bowman'),
];

const team = new Team();
team.addAll(...currentCharacters);
team.toArray();

for (const item of team) {
  console.log(item);
}
