const ucenici = [
  {
    ime: 'Bago',
    izvucen: 0
  },
  {
    ime: 'Blaz',
    izvucen: 0
  },
  {
    ime: 'Drobac',
    izvucen: 0
  },
  {
    ime: 'Gavic',
    izvucen: 0
  },
  {
    ime: 'Robi',
    izvucen: 0
  },
  {
    ime: 'Impra',
    izvucen: 0
  },
  {
    ime: 'Bruno',
    izvucen: 0
  },
  {
    ime: 'Jaki',
    izvucen: 0
  },
  {
    ime: 'Jambre',
    izvucen: 0
  },
  {
    ime: 'Jurki',
    izvucen: 0
  },
  {
    ime: 'Krot',
    izvucen: 0
  },
  {
    ime: 'Kupsjak',
    izvucen: 0
  },
  {
    ime: 'Loza',
    izvucen: 0
  },
  {
    ime: 'Znac',
    izvucen: 0
  },
  {
    ime: 'Obra',
    izvucen: 0
  },
  {
    ime: 'Panix',
    izvucen: 0
  },
  {
    ime: 'Pilpi',
    izvucen: 0
  },
  {
    ime: 'Raketic',
    izvucen: 0
  },
  {
    ime: 'Rus',
    izvucen: 0
  },
  {
    ime: 'Strix',
    izvucen: 0
  },
  {
    ime: 'Senjug',
    izvucen: 0
  },
  {
    ime: 'Tepsic',
    izvucen: 0
  },
  {
    ime: 'Turk',
    izvucen: 0
  },
]

const btn = document.getElementsByTagName('button')[0]
const container = document.querySelector("#container");

const slucajniOdabir = () => {
  container.innerHTML = "";
  const zrtve = prompt('koliko zrtava os')
  const temp = JSON.parse(JSON.stringify(ucenici))

  Array.from({length: parseInt(zrtve)}).map(izvlacenje => {
    const rnd = Math.floor(Math.random() * 23)
    temp[rnd].izvucen += 1
  })

  const zrtvovani = temp.filter(ucenik => ucenik.izvucen > 0).sort((a, b) => a.izvucen - b.izvucen)

  zrtvovani.forEach(zrtva => {
    const p = document.createElement('p')
    p.textContent = zrtva.ime + ' je izvucen ' + zrtva.izvucen + ' puta'
    container.appendChild(p)
  })

}

btn.addEventListener('click', slucajniOdabir)
