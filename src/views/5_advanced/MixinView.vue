<template>
  <div></div>
</template>
<script>
import Formatter from '@/mixins/formatter'
import indexs from '@/mixins/index'
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  mixins: [Formatter, indexs],
  setup() {},
  created() {
    console.log('MixinView의 created')
    console.log(Math.round(-350023.45))
  },
  mounted() {
    console.log('MixinView의 mounted')
    console.log(this.$convertDateFormat('20220601', 'YYYY-MM-DD'))
    console.log(this.$convertDateFormat('20220601', 'MM.DD.YYYY'))

    console.log(this.$convertNumberFormat(2547500, '#,###'))
    console.log(this.$convertNumberFormat(2547500, '#,###,#0'))
    console.log(this.$convertNumberFormat(2547500.4, '#,###.#0'))
    console.log(this.$convertNumberFormat(2547500.4, '#,###.##'))
    console.log(this.$convertNumberFormat(-2547500.4, '#,###.##'))
    console.log(this.$convertNumberFormat(-2547500.4, '$#,###.##'))
    console.log(this.$convertNumberFormat(125.23, '#,###.#0%'))
    console.log(this.$convertNumberFormat(125.5, '#,###.#0%'))
    console.log(this.$convertNumberFormat(125, '#,###원'))
    this.getCustomers()
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      //   const customers = await this.$get('http://localhost:3000/customers')
      //   console.log(customers)
    }
  }
}
</script>
