<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark" style="font-family: customfont2;">
    <q-header class="bg-dark text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <!-- <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
            </q-avatar> -->
          </q-toolbar-title>
        </q-toolbar>
        <div class="flex flex-center">
          <div class="column">
            <div class="col q-gutter-sm items-center">
            <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-btn @click='$router.push({ path: `/` })' flat style="color: rgba(255, 255, 255, 0.7)" label="Home" class="text-capitalize text-weight-light"/>
              <q-btn @click='$router.push({ path: `/about` })' flat style="color: rgba(255, 255, 255, 0.7)" label="About" class="text-capitalize text-weight-light"/>
              <q-btn @click='$router.push({ path: `/projects` })' flat style="color: rgba(255, 255, 255, 0.7)" label="Projects" class="text-capitalize text-weight-light"/>
              <q-btn @click='$router.push({ path: `/cv` })' flat style="color: rgba(255, 255, 255, 0.7)" label="CV" class="text-capitalize text-weight-light"/>
              <q-btn @click='$router.push({ path: `/contact` })' flat style="color: rgba(255, 255, 255, 0.7)" label="Contact" class="text-capitalize text-weight-light"/>
            </div>
            </div>
          </div>
  </div>
      </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MyLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
}
</script>
