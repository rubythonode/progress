export const sourcecodeA = `<vm-progress :percentage="0"></vm-progress>
<vm-progress :percentage="70"></vm-progress>
<vm-progress :percentage="30" strokeColor="purple"></vm-progress>
<vm-progress :percentage="30" status="exception"></vm-progress>
<vm-progress :percentage="50" status="info"></vm-progress>
<vm-progress :percentage="80" status="warning"></vm-progress>
<vm-progress :percentage="100" status="success"></vm-progress>`

export const sourcecodeB = `<vm-progress :percentage="0" :text-inside="true" :stroke-width="18"></vm-progress>
<vm-progress :percentage="70" :text-inside="true" :stroke-width="18"></vm-progress>
<vm-progress :percentage="30" :text-inside="true" :stroke-width="18" strokeColor="purple"></vm-progress>
<vm-progress :percentage="30" :text-inside="true" :stroke-width="18" status="exception"></vm-progress>
<vm-progress :percentage="50" :text-inside="true" :stroke-width="18" status="info"></vm-progress>
<vm-progress :percentage="80" :text-inside="true" :stroke-width="18" status="warning"></vm-progress>
<vm-progress :percentage="100" :text-inside="true" :stroke-width="18" status="success"></vm-progress>`

export const sourcecodeC = `<template>
  <div class="vd-demo__block vd-demo__block-2">
    <vm-progress type="circle" :percentage="0"></vm-progress>
    <vm-progress type="circle" :percentage="25"></vm-progress>
    <vm-progress type="circle" :percentage="30" strokeColor="purple"></vm-progress>
    <vm-progress type="circle" :percentage="30" status="exception"></vm-progress>
    <vm-progress type="circle" :percentage="50" status="info"></vm-progress>
    <vm-progress type="circle" :percentage="80" status="warning"></vm-progress>
    <vm-progress type="circle" :percentage="100" status="success"></vm-progress>
  </div>
  <div class="vd-demo__block vd-demo__block-2">
    <vm-progress type="circle" :percentage="percentage" style="vertical-align: middle;">占比{{percentage}}%</vm-progress>
    <vm-progress type="circle" :percentage="percentage" style="vertical-align: middle;"></vm-progress>
    <vm-progress type="circle" :percentage="percentage" reverse style="vertical-align: middle;"></vm-progress>
    <vm-button-group>
      <vm-button type="default" @click="increase">增加</vm-button>
      <vm-button type="default" @click="decrease">减少</vm-button>
    </vm-button-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        percentage: 70
      }
    },
    methods: {
      increase () {
        if (this.percentage === 100) return
        this.percentage += 10
      },
      decrease () {
        if (this.percentage === 0) return
        this.percentage -= 10
      }
    }
  }
</script>`