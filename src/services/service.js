import axios from 'axios'
import config from '../config.json'

const httpAuth = axios.create({
  baseURL: config.apiEndpoint,
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "d8efadef9210483e88be5da02a57d345"
  }
})

const httpService = {
  send: async (payload) => {
    try {
      console.log(config.apiEndpoint)
      console.log('!!!', payload)
      const { data } = await httpAuth.post('/', payload)
      console.log(data)
      return data
    } catch (err) {
      if (err === undefined) return 'Response with error'
      console.log(err.message)
      return err.message
    }
    
  },
}

export default httpService

