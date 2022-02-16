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
      const { data } = await httpAuth.post('/', payload)
      return data
    } catch (err) {
      if (err === undefined) return 'Response with error'
      return err.message
    }
    
  },
}

export default httpService

