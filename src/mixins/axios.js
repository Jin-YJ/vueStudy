import axios from 'axios'

export default {
  method: {
    async $get(url) {
      return (
        await axios.get(url).catch((e) => {
          console.log(e)
        })
      ).data
    }
  }
}
