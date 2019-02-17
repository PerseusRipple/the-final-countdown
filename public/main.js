const API_URL =
  'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

const main = () => {
  getPicture()
  buildHeader()
}

const getPicture = () => {
  let picture = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'

  fetch(picture)
    .then(resp => {
      return resp.json()
    })

    .then(data => {
      // console.log(data) //
      document.getElementById('hero-image').style.backgroundImage = `url(${
        data.hdUrl
      })`
    })
}

fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
  .then(resp => {
    return resp.json()
  })

  .then(list => {
    console.log(list)
  })

const buildHeader = () => {
  const _missionName = document.querySelector('h3')

  _missionName.appendChild(document.addText(this.data.mission_name))
  return _missionName
}

document.addEventListener('DOMContentLoaded', main)
