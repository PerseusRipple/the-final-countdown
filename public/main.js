// fetch(API_URL)
// .then (resp => resp.json())
// .then(img => {
//   hero_image.image = image
//   hero_image.render()
// })

// const url(https://sdg-astro-api.herokuapp.com/api/Nasa/apod)

// const url(https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming)

const main = () => {
  getPicture()
  // getLaunches()
}

const getPicture = () => {
  let picture = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'

  fetch(picture)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      let nasaImage = document.createElement('img')
      nasaImage.src = data.url
      let heroImage = document.querySelector('.hero-image')
      heroImage.appendChild(nasaImage)
    })
}

document.addEventListener('DOMContentLoaded', main)
