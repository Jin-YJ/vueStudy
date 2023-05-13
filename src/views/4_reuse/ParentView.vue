<template>
  <div>
    <button @click="chageValue">변경</button>
    <ChildComponent
      :str="strParent"
      :num="numParent"
      :isOk="isOkParent"
      :arr="arrParent"
      :obj="objParent"
      @change-num="getData"
      ref="child1"
    />
  </div>
</template>
<script>
import ChildComponent from '../../components/fragments/ChildComponent.vue'

export default {
  components: { ChildComponent },
  data() {
    return {
      sampleData: '',
      strParent: '개발자의 품격',
      numParent: 5,
      isOkParent: true,
      arrParent: [1, 2, 3, 4, 5],
      objParent: { name: 'Jeremy' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getData(data) {
      console.log('getData 함수 호출', data)
    },
    chageValue() {
      this.$refs.child1.str2 = 'seoul'
      this.$refs.child1.printMessage()
    }
  }
}
</script>
