import axios from 'axios'
import {
  UPDATE_KEY,
  GET_UPDATE_KEY,
  UPDATE_FORM,
  GET_UPDATE_FORM,
  UPDATE_INFO
}
  from './mutation-types'
export default {
  getData ({ commit, state }) {
    axios.get('/api/activity/index/detail').then((response) => {
      const data = response.data.data
      const code = response.data.code
      if (code === 0) {
        alert(response.data.msg)
      }
      commit(UPDATE_INFO, { data })
    })
  },
  [UPDATE_KEY] ({ commit }, { key, value }) {
    commit(GET_UPDATE_KEY, { key, value })
  },
  [UPDATE_FORM] ({ commit }, { key, value }) {
    commit(GET_UPDATE_FORM, { key, value })
  }
}
