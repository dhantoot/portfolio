<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-sm">
          <q-card class="my-card" style="background: rgb(42 42 42)" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <!-- <div class="text-overline">Overline</div> -->
                  <div class="text-h5 q-mt-sm q-mb-xs text-grey-1 text-subtitle2">{{ title }}</div>
                  <div class="text-caption text-grey">
                    {{ desc }}
                  </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <q-img
                    class="rounded-borders"
                    :src="logo"
                    style="max-height: 135.29px;"
                  />
                </q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
          </q-card>
        </div>
</template>
<script>
import { ref } from 'vue'

export default {
  props: {
    title: {
      type: String
    },
    logo: {
      type: String
    },
    desc: {
      type: String
    }
  },
  setup () {
    return {
      expanded: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  }
}
</script>
