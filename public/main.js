/*const API_URL =
  'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming' */

const main = () => {
  getPicture()
  createHeader()
}

const getPicture = () => {
  let picture = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'

  fetch(picture)
    .then(resp => {
      return resp.json()
    })

    .then(data => {
      console.log(data)
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

const createHeader = () => {
  let header =
    'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'
  let _missionName = header

  fetch(header)
    .then(resp => {
      return resp.json()
    })

    .then(data => {
      console.log(data)
      document.getElementById('shuttle')
    })

  document.appendChild(this.icon('.fa-space-shuttle'))

  document.appendChild(document.createText(this.data.mission_name))
  return _missionName
}

/*_missionName

_missionMain

_missionLocation

createCountDown

const page = newPage()

document
  .querySelector('prev')
  .addEventListener('click', () => page.goToPrevLaunch())
document
  .querySelector('next')
  .addEventListener('click', () => page.gotToNextLaunch()) */

document.addEventListener('DOMContentLoaded', main)
