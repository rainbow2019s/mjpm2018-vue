import axios from 'axios'

const getCode = (cb) => {
  axios.get('/v1/employees/list')
    .then(function (res) {
      // console.log(res.data)
      const playload = {code: res.data.code}
      cb(playload)
    })
}

export {
  getCode
}
