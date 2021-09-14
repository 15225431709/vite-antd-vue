<template>
    <div class="content">
        <page-header>
            <template #content>name</template>
        </page-header>
        typescript
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../../components/utils/PageHeader.vue'

export default defineComponent({
  components: { PageHeader },
    setup() {
        
    },
})
</script>
<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 1rem 0;
    background: #fff;
}
</style>