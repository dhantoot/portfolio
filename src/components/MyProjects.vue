<template>
  <q-page class="flex flex-center">
    <div class="row q-mt-xl items-start" style="max-width:70vw">
      <JobList title="NPD" logo="projects/npd.png" :desc="projectDescription.npd"/>
      <JobList title="Raise Foundation" logo="projects/raise.png" :desc="projectDescription.raise"/>
      <JobList title="Symphony" logo="projects/none.png" :desc="projectDescription.symphony"/>
      <JobList title="EIS" logo="projects/j3ei.jfif" :desc="projectDescription.eis"/>
      <JobList title="FB Ads Mktg" logo="projects/facebook.png" :desc="projectDescription.fbads"/>
      <JobList title="Grub2Go" logo="projects/none.png" :desc="projectDescription.grub"/>
      <JobList title="Class Mgmt" logo="projects/none.png" :desc="projectDescription.class"/>
      <JobList title="Enrollment" logo="projects/enrollment.PNG" :desc="projectDescription.enrollment"/>
      <JobList title="TER" logo="projects/ter.jpg" :desc="projectDescription.ter"/>
      <JobList title="KAWAL" logo="projects/kawal.png" :desc="projectDescription.kawal"/>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'
import JobList from 'components/JobList.vue'

export default {
  components: {
    JobList
  },
  setup () {
    return {
      expanded: ref(false),
      projectDescription: {
        npd: `Responsible for building APIs to automate many manual processes of the business including
          generation of full-blown reports of medical plans.`,
        raise: `Responsible for the entire development of the app. Basically this is a foundation app built based in
          Australia to help and prevent child abuse and neglect.`,
        symphony: `Lead the development of the app. 
          This is a generic core api platform designed to support subscription 
          based ecommerce platforms.`,
        eis: `Responsible for the backend development of the app. This is a mobile and web app which helps civil engineers 
          for inspection operations.`,
        fbads: `Responsible for the entire development of the api. This is an app to shorten the process of
          operating Facebook ads marketing.`,
        grub: `Responsible for the backend development of the app, and some frontend works. This is a mobile
          app for ordering food like FoodPanda App.`,
        class: `Responsible for the entire development of the app. 
          This is a web application which helps grade school teachers 
          in all operations in school.`,
        enrollment: `Responsible for the entire development app. 
          This is a typical enrollment system built for high school.`,
        ter: `Responsible for the entire development of the app. This is basically a paperless process of
          teacher/instructor evaluation in our university.`,
        kawal: `Responsible for the entire development of the web application part. This app was built to help
          soldiers(AFP) dependents on the entire process to get financial support when the said soldier dies
          in combat.`
      },
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  }
}
</script>
