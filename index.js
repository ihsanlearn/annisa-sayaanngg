onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove('not-loaded');
    clearTimeout(c);
  }, 1000);
};

const button = document.getElementById('btn');
const photo = document.getElementById('photo');
let now = 1;

function hideImage() {
  if (now == 1) {
    photo.style.opacity = '0';
    button.innerHTML = 'yaahhhh ilaannggg, munculiin lagiii';
    now -= 1;
  } else {
    photo.style.opacity = '1';
    button.innerHTML = 'ilangin lagiii';
    now += 1;
  }
}
