import axios from 'axios'

export function requestTicker(id) {
  const BASE_URL = `https://api.coinmarketcap.com/v1/ticker/${id}/`
  return axios({
    method: 'get',
    url: BASE_URL
  })
    .then(response => response.data)
    .catch(error => error)
}

export function requestTickers(ids) {
  return axios.all(ids.map(id => requestTicker(id)))
    .then(axios.spread((btcTicker, ltcTicker) => {
      return { btcTicker: btcTicker[0], ltcTicker: ltcTicker[0] }
    }))
}