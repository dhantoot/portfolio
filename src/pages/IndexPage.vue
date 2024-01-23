<template>
  <q-page class="flex flex-center">
    <div class="column" style="height: 150px">
      <div class="col text-center q-mb-sm">
        <q-icon size="xl" name="las la-coffee" class="text-white"/>
      </div>
      <div class="col text-center q-mb-md">
        <q-icon
          v-for="letter of item"
          :key="letter"
          size="xl"
          :name="letter"
          class="text-pink-13"
        />
      </div>
      <div class="col text-center">
        <div class="row q-gutter-sm items-center" style="display:flex;justify-content: center;">
          <div class="col-5"><q-linear-progress :value="progress" :buffer="buffer" color="purple" track-color="orange" class="q-mt-sm" /></div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
// import JobList from 'components/JobList.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    // JobList
  },
  setup () {
    const progress = ref(0.01)
    const buffer = ref(0.01)
    let interval, bufferInterval

    onMounted(() => {
      interval = setInterval(() => {
        if (progress.value >= 1) {
          progress.value = 0.01
          buffer.value = 0.01
          return
        }

        progress.value = Math.min(1, buffer.value, progress.value + 0.1)
      }, 900 + Math.random() * 1000)

      bufferInterval = setInterval(() => {
        if (buffer.value < 1) {
          buffer.value = Math.min(1, buffer.value + Math.random() * 0.2)
        }
      }, 900)
    })

    onBeforeUnmount(() => {
      clearInterval(interval)
      clearInterval(bufferInterval)
    })

    return {
      item: ref(['D', 'A', 'N']),
      progress,
      buffer
    }
  }
})
</script>
