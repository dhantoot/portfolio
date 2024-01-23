const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('components/AboutMe.vue') },
      { path: 'projects', component: () => import('components/MyProjects.vue') },
      { path: 'cv', component: () => import('components/MyCv.vue') },
      { path: 'contact', component: () => import('components/ContactMe.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
