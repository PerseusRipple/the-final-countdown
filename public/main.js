const main = () => {
  getPicture()
  createHeader()
  createDescription()
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
      let copyright = data.copyright

      document.querySelector('.copyright').textContent = copyright
      document.querySelector('.image-title').textContent = data.title
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
  let missionName =
    'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

  fetch(missionName)
    .then(resp => {
      return resp.json()
    })

    .then(data => {
      console.log(data)
      document.getElementById('shuttle')

      let header = data.mission_name
      document.querySelector('#shuttle').textContent = data[0].mission_name
    })

  createDescription = () => {
    let details =
      'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

    fetch(details)
      .then(resp => {
        return resp.json()
      })

      .then(data => {
        console.log(data)
        document.getElementsByClassName('.information')

        let description = data.details
        document.querySelector('.information').textContent = data[1].details
      })
  }
}

document.addEventListener('DOMContentLoaded', main)
