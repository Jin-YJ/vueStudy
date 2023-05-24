import VueCookies from 'vue-cookies'

export const user = {
  // 중앙 데이터 저장소
  namespaced: true,
  state() {
    return {
      userInfo: {
        name: '',
        email: '',
        phone: '',
        lang: ''
      }
    }
  },
  // Store을 위한 computed라고 생각하면 됨.
  getters: {
    inLogin(state) {
      if (VueCookies.get('userInfo')) {
        return true
      } else {
        return false
      }
    }
  },
  // 상태(state)를 변경시킬 수 있는 유일한 방법(함수)
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      VueCookies.set('userInfo', userInfo, '1h')
    },
    clearUserInfo(state) {
      state.userInfo = {}
      VueCookies.remove('userInfo')
    },
    getUserInfo(state) {
      if (VueCookies.get('userInfo')) {
        return state.userInfo
      } else {
        return {}
      }
    }
  },
  // mutations 하고 비슷하지만, actions에 정의된 함수에서는
  // mutations에 정의한 함수를 커밋시켜서 state를 변경
  // 비동기 처리가 가능
  actions: {}
}
