const clockHours = document.querySelector('.hour-hand');
const clockMinutes = document.querySelector('.min-hand');
const clockSeconds = document.querySelector('.second-hand');

const toDeg = (value, base, offset) => {
  return ((value / base) * 360) + offset;
}

const OFFSET = 90;

function updateClock() {
  const t = new Date();
  const s = toDeg(t.getSeconds(), 60, OFFSET);
  const m = toDeg(t.getMinutes(), 60, OFFSET);
  const h = toDeg(t.getHours(), 12, OFFSET);
  // FIX: last step animation
  clockSeconds.style.transition = (s === OFFSET) ? 'none' : 'all .3s ease-in-out';
  clockMinutes.style.transition = (m === OFFSET) ? 'none' : 'all .3s ease-in-out';
  clockHours.style.transition = (h === OFFSET) ? 'none' : 'all .3s ease-in-out';

  clockSeconds.style.transform = `rotate(${s}deg)`;
  clockMinutes.style.transform = `rotate(${m}deg)`;
  clockHours.style.transform = `rotate(${h}deg)`;
  console.log(s, m, h);
}

window.setInterval(updateClock, 1000);
