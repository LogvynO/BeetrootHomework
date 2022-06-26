var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const newList = document.querySelector(".musicList")
playList.map((item) => {
  const li = document.createElement('li');
  musicList.appendChild(li);
  li.innerHTML = item.author + ' - ' + item.song
})


let visibility = true;
const knopka = document.getElementById('knopka');
knopka.addEventListener('click', () => {
    visibility = !visibility;
    if (visibility) {
        musicList.style.display = 'none';
        document.getElementById("knopka").textContent="Відкрити";
    }
    else {
    musicList.style.display = 'block'
    document.getElementById("knopka").textContent="Закрити";
};
});