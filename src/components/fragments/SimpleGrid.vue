<template>
  <div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th v-if="selectType === 'checkbox'">
            <input type="checkbox" @change="checkAll($event)" />
          </th>
          <th v-if="selectType === 'radio'"></th>
          <th v-for="header in headers" :key="header.key">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td v-if="selectType === 'checkbox'">
            <input
              type="checkbox"
              class="form-check-input"
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doChecked($event)"
            />
          </td>
          <td v-if="selectType === 'radio'">
            <input
              type="radio"
              class="form-check-input"
              v-model="checkedItem"
              :value="item[checkedKey]"
              @change="doChecked($event)"
            />
          </td>
          <td v-for="header in headers" :key="header.key">
            {{ item[header.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    checkedEventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      sampleData: '',
      checkedItems: [],
      checkedItem: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doChecked(event) {
      //   this.$emit('change-item', this.checkedItems)
      if (this.selectType === 'checkbox') {
        this.$emit(this.checkedEventName, this.checkedItems)
      } else if (this.selectType === 'radio') {
        this.$emit(this.checkedEventName, this.checkedItem)
      }
    },
    checkAll(event) {
      console.log(event.target.checked)
      const checked = event.target.checked
      const checkedItems = []
      if (checked) {
        this.items.forEach((item) => {
          checkedItems.push(item[this.checkedKey])
        })
      }

      this.checkedItems = checkedItems
      this.doChecked(event)
    }
  }
}
</script>
