import currentDateTime from './myDateTime.js';
import EventEmitter from 'events';

const showInfo = new EventEmitter();

const displayPlayer = (name = 'Michael Jordan', number = 23) => {
  console.log(`${name} wearing #${number}!`);
};

const displayTime = () => {
  console.log(`It is currently ${currentDateTime()}`)
}

showInfo.on('player', () => {
  displayPlayer();
  displayTime();
});
  
showInfo.emit('player');

console.log(showInfo.getMaxListeners()); // 10
console.log(showInfo.listenerCount('player')); // 1

