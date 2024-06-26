import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

const bowman = new Bowman('bowman');
const swordsman = new Swordsman('swordsman');
const magician = new Magician('magician');
const daemon = new Daemon('daemon');
const undead = new Undead('undead');
const zombie = new Zombie('zombie');

function magicPlace() {

}

magicPlace(bowman, swordsman, magician, daemon, undead, zombie);