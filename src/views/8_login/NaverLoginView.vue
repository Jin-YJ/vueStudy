<template>
  <div>
    <div id="naverIdLogin">
      <a id="naverIdLogin_loginButton" href="#" role="button"
        ><img src="https://static.nid.naver.com/oauth/big_g.PNG" width="320"
      /></a>
    </div>
    <button class="btn btn-danger" @click="naverLogout($event)">
      로그아웃
    </button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      email: '',
      naverLogin: null
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'eaGEveU5JnJnMzTamfma',
      callbackUrl: 'http://localhost:8080/login/naver',
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 60 }
    })
    /* (4) 네아로 로그인 정보를 초기화하기 위하여 init을 호출 */
    this.naverLogin.init()

    /* (5) 현재 로그인 상태를 확인 */
    this.naverLogin.getLoginStatus((status) => {
      if (this.naverLogin) {
        /* (6) 로그인 상태가 "true" 인 경우 로그인 버튼을 없애고 사용자 정보를 출력합니다. */
        //   setLoginStatus()
        console.log(this.naverLogin.user)
        this.email = this.naverLogin.user.email
      }
    })

    /* (6) 로그인 상태가 "true" 인 경우 로그인 버튼을 없애고 사용자 정보를 출력합니다. */
    // function setLoginStatus() {
    //   var profileImage = naverLogin.user.getProfileImage()
    //   var nickName = naverLogin.user.getNickName()
    //   var imageViewer = ''
    //   if (profileImage) {
    //     imageViewer +=
    //       '<br><br><img src="' + profileImage + '" height=50 /> <p>'
    //   }
    //   $('#naverIdLogin_loginButton').html(
    //     imageViewer + nickName + '님 반갑습니다.</p>'
    //   )
    //   $('#gnbLogin').html('Logout')
    //   $('#gnbLogin').attr('href', '#')
    //   /* (7) 로그아웃 버튼을 설정하고 동작을 정의합니다. */
    //   $('#gnbLogin').click(function (e) {
    //     e.preventDefault()
    //     naverLogin.logout()
    //     location.replace('/oauth/sample/javascript_sample.html')
    //   })
    // }
  },
  unmounted() {},
  methods: {
    naverLogout(event) {
      console.log(event)
      event.preventDefault()
      this.naverLogin.logout()
      console.log(this.naverLogin.user)
    }
  }
}
</script>
