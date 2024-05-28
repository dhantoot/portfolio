<template>
  <q-page class="flex flex-center">
    <div class="column q-pa-sm">
      <div class="col q-pa-sm">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <!-- <q-img :src="img" width="90vw" style="max-width:600px;"/> -->
          </div>
         </div>
      </div>
      <div class="col">
        <div class="flex flex-center">
          <q-pagination
            v-model="current"
            :max="3"
            @update:model-value="nextItem"
            color="red-9"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'

export default {
  props: {
    title: String
  },
  setup () {
    // const tmp = ref(0)

    return {
      expanded: ref(false),
      img: ref('cv2/ccv-1.PNG'),
      current: ref(1),
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  },
  methods: {
    nextItem () {
      console.log(this.current)
      this.img = `cv2/ccv-${this.current}.PNG`
    }
  },
  beforeCreate () {
    console.log('before create..')
  },
  created () {
    console.log('created..')
  },
  beforeMount () {
    console.log('beforeMount..')
    this.img = 'cv2/ccv-1.PNG'
  },
  mounted () {
    console.log('mounted..')
  },
  beforeUpdate () {
    console.log('beforeUpdate..')
  },
  updated () {
    console.log('updated..')
  },
  beforeUnmount () {
    console.log('beforeUnmount..')
  },
  unmounted () {
    console.log('unmounted..')
  },
  errorCaptured () {
    console.log('errorCaptured..')
  },
  renderTracked () {
    console.log('renderTracked..')
  },
  renderTriggered () {
    console.log('renderTriggered..')
  },
  activated () {
    console.log('activated..')
  },
  deactivated () {
    console.log('deactivated..')
  },
  serverPrefetch () {
    console.log('serverPrefetch..')
  }
}
</script>
