<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col q-gutter-sm items-start q-pa-sm">
        <q-card class="my-card col-12" flat bordered style="height: 600px; background: #262626">
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline text-white">About</div>
              <div class="text-h5 q-mt-sm q-mb-md text-white">Dan Vincent Tagailo</div>
              <div class="text-grey text-body q-mb-sm" style="max-width:600px;font-size: 15px;">
                For the last 8 years Dan has been working on IT industries developing software applications using various
                technologies for backend and frontend development.
              </div>
              <div class="text-grey text-body q-mb-sm" style="max-width:600px;font-size: 15px;">
                He is a full stack developer responsible for the requirement analysis, UI design and integration, building
                APIs, database design and deployment.
              </div>
              <div class="text-grey text-body q-mb-sm" style="max-width:600px;font-size: 15px;">
                His experienced in working various projects using different technologies and frameworks mold his ability
                to swiftly adapt client requirement and get things done.
              </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="profile/me.png"
              />
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      expanded: ref(false),
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  }
}
</script>
