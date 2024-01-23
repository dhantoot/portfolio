<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col q-gutter-sm items-start q-pa-sm">
        <q-card class="my-card col-12" flat bordered style="height: auto; background: #262626">
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <!-- <div class="text-overline text-white">Reach Me</div> -->
              <div class="text-h5 q-mt-sm q-mb-xl text-white text-center">Reach me</div>
              <div class="text-grey text-body q-mb-lg text-center">
                <q-btn round>
                <q-avatar size="100px">
                  <img src="profile/me-2.jpg"/>
                </q-avatar>
              </q-btn>
              </div>
              <div class="text-grey text-body q-mb-lg">
                <q-chip square class="full-width" size="md">
                  <q-avatar icon="phone" color="red-9" text-color="white" />
                  +639 685 828 627
                </q-chip>
              </div>
              <div class="text-grey text-body q-mb-lg">
                <q-chip square class="full-width" size="md">
                  <q-avatar icon="mail" color="red-9" text-color="white" />
                  tagailo.danvincent@gmail.com
                </q-chip>
              </div>
              <div class="text-grey text-body q-mb-lg">
                <q-chip square class="full-width" size="md">
                  <q-avatar icon="facebook" color="red-9" text-color="white" />
                  https://www.facebook.com/dhanixgreen
                </q-chip>
              </div>
              <div class="text-grey text-body q-mb-lg">
                <q-chip square class="full-width" size="md">
                  <q-avatar icon="instagram" color="red-9" text-color="white" />
                  https://www.instagram.com/dhanvincent
                </q-chip>
              </div>
              <div class="text-grey text-body q-mb-lg">
                <q-chip square class="full-width" size="md">
                  <q-avatar icon="tiktok" color="red-9" text-color="white" />
                  https://www.tiktok.com/@dhanixblue
                </q-chip>
              </div>
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
