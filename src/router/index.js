import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: require('@/components/Main').default
    },
    {
      path: '/launcher',
      name: 'Launcher',
      component: require('@/components/Launcher').default
    },
    {
      path: '/gta',
      name: 'Gta',
      component: require('@/components/Gta').default
    },
    {
      path: '/gta/audio',
      name: 'Gta Audio',
      component: require('@/components/gta/Audio').default
    },
    {
      path: '/gta/anim',
      name: 'Gta Anim',
      component: require('@/components/gta/Anim').default
    },
    {
      path: '/gta/data',
      name: 'Gta Data',
      component: require('@/components/gta/Data').default
    },
    {
      path: '/gta/models',
      name: 'Gta Models',
      component: require('@/components/gta/Models').default
    },
    {
      path: '/gta/mta',
      name: 'Gta MTA',
      component: require('@/components/gta/Mta').default
    },
    {
      path: '/gta/text',
      name: 'Gta Text',
      component: require('@/components/gta/Text').default
    },
    {
      path: '/gta/gta3',
      name: 'Gta Gta3',
      component: require('@/components/gta/Gta3').default
    },
    {
      path: '/gta/gta_int',
      name: 'Gta Gta_Int',
      component: require('@/components/gta/Gta_Int').default
    },
    {
      path: '/gta/player',
      name: 'Gta Player',
      component: require('@/components/gta/Player').default
    },
    {
      path: '/gta/vccol',
      name: 'Gta Vccol',
      component: require('@/components/gta/Vccol').default
    },
    {
      path: '/gta/vcdff',
      name: 'Gta VcDff',
      component: require('@/components/gta/Vcdff').default
    },
    {
      path: '/gta/vctxd',
      name: 'Gta Vctxd',
      component: require('@/components/gta/Vctxd').default
    },
    {
      path: '/enb',
      name: 'Enb',
      component: require('@/components/Enb').default
    },
    {
      path: '/gta/mainf',
      name: 'mainF',
      component: require('@/components/gta/MainF').default
    },

  ]
})
