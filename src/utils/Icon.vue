<template>
  <div>
    <svg class="icon" aria-hidden="true" :style="customStyle">
      <use :xlink:href="name"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {computed} from "vue"
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    customStyle: {
      type: Object,
      default: {'color': '#fff','font-size': '.25rem'}
    }
  },
  setup(props) {
    const style = computed(() => {
      return props.customStyle.join(';')
    })
    return {
      style
    }
  }
};
</script>
<style lang="scss" scoped>
.icon {
  font-size: .25rem;
}
.icon:hover {
  cursor: pointer;
}
</style>