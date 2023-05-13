<template>
  <div class="container">
    <button class="btn btn-primary me-1" @click="doSearch">조회</button>
    <button class="btn btn-danger" @click="doDelete">삭제</button>

    <simple-grid-vue
      :items="drinkList"
      :headers="headers"
      :selectType="selectType"
      checkedKey="drinkId"
      checkedEventName="change-item"
      @change-item="changeCheckedValue"
    />
  </div>
</template>
<script>
import SimpleGridVue from '@/components/fragments/SimpleGrid.vue'

export default {
  components: { SimpleGridVue },
  data() {
    return {
      sampleData: '',
      drinkList: [],
      headers: [],
      selectType: 'checkbox'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      this.drinkList = [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '커피',
          price: 500,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '물',
          price: 700,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: '보리차',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '6',
          drinkName: '포카리',
          price: 1000,
          qty: 1
        },
        {
          drinkId: '7',
          drinkName: '뽀로로',
          price: 1300,
          qty: 1
        }
      ]

      this.headers = [
        { title: '제품코드', key: 'drinkId' },
        { title: '제품명', key: 'drinkName' },
        { title: '제품가격', key: 'price' }
      ]
    },
    deDelete() {},
    changeCheckedValue(data) {
      console.log('선택된 아이템', data)
    }
  }
}
</script>
