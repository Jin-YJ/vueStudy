<template>
  <div>
    <div>
      <label for="email" class="form-label">이메일주소</label>
      <input type="email" name="" id="email" class="form-control" v-focus />
    </div>
    <div>
      <label for="pw" class="form-label">비밀번호</label>
      <input type="password" name="" id="pw" class="form-control" />
    </div>
    <div>
      <button class="btn btn-primary">로그인</button>
    </div>
    <div v-color="color" style="height: 50px"></div>
    <div v-demo="{ color: 'red', text: 'hello!' }"></div>
    <div>
      <input type="text" name="" id="" class="form-control" v-lowercase />
    </div>
    <div>
      <input type="text" name="" id="" class="form-control" v-uppercase />
    </div>
    <div>
      <input type="text" name="" id="" class="form-control" v-number />
      <input type="number" name="" id="" class="form-control" />
    </div>
    <div>
      <input type="text" name="" id="" class="form-control" v-korean />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  directives: {
    // directive를 메인에 선언하면 전역으로 사용 가능

    color: {
      mounted(el, binding) {
        el.style.backgroundColor = binding.value
      }
    },
    demo: {
      mounted(el, binding) {
        el.innerText = binding.value.text
      }
    },
    data() {
      return {
        sampleData: '',
        color: 'red'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
