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

      if (data.copyright) {
        document.querySelector('.copyright').textContent = copyright
      } else {
        document.querySelector('.copyright').textContent = 'No copyright.'
      }

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
  let icon = 'fas fa-space-shuttle'
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

        if (data.details) {
          document.querySelector('.information').textContent = data[0].details
        } else {
          document.querySelector('.information').textContent =
            'No details available yet.'
        }
      })
  }

  createCountdown = () => {
    let date =
      'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

    fetch(date)
      .then(resp => {
        return resp.json()
      })

      .then(data => {
        console.log(data)
        document.getElementsByClassName('.countdown')

        let counter = data.launch_date_utc
        document.querySelector('.countdown').textContent =
          data[0].launch_date_utc
      })
  }

  createLocation = () => {
    let site =
      'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

    fetch(site)
      .then(resp => {
        return resp.json()
      })

      .then(data => {
        console.log(data)
        document.querySelector('.location')

        let location = data.launch_site.site_name_long
        document.querySelector('.location').textContent =
          data[0].launch_site.launch_name_long
      })
  }
}

document.addEventListener('DOMContentLoaded', main)
