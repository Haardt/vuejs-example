import {RouteConfig} from 'vue-router'
import CpProfile from './cp-profile.vue'
import CpColorSlider from './cp-color-slider.vue'
import CpLanguage from './cp-language.vue'

export const ProfileRoute: RouteConfig = {
  path: '/profile',
  component: CpProfile,
  children: [
    {
      path: 'lang',
      name: 'lang',
      component: CpLanguage
    },
    {
      path: 'appearance',
      name: 'appearance',
      component: CpColorSlider
    }
  ]
}
