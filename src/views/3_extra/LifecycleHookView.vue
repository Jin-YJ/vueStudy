<template>
  <div>
    <div>{{ sampleData }}</div>
    <div>
      <label for="">태어난 도시는?</label>
      <select name="" id="">
        <option value="" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: '',
      cities: [],
      fnInterval: ''
    }
  },
  propos: {},
  setup() {},
  beforeCreate() {},
  created() {
    this.getCityList()
  },
  beforeMount() {},
  mounted() {
    this.fnInterval = window.setInterval(() => {
      console.log('aaaa')
    }, 1000)
  },
  unmounted() {
    window.clearInterval(this.fnInterval)
    this.fnInterval = null
    this.cities = null
  },
  methods: {
    getCityList() {
      this.cities = [{ code: '02', title: '서울' }]
    }
  }
}
</script>
