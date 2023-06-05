<template>
  <div>
    <button @click="dosearch">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    dosearch() {
      const loader = this.$loading.show({
        // Optional parameters
      })
      // simulate AJAX
      setTimeout(() => {
        loader.hide()
      }, 5000)
    }
  }
}
</script>
