const main = () => {
  getPicture()
  getLaunch()
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

const getLaunch = () => {
  let launch = `https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming`

  fetch(launch)
    .then(resp => {
      return resp.json()
    })

    .then(data => {
      console.log(data)
      document.getElementsByClassName('launches-selector').textContent = `url(${
        data.hdUrl
      })`
    })
}

document.addEventListener('DOMContentLoaded', main)
