import {RouteConfig} from 'vue-router'
import CpProfile from '../profile/cp-profile.vue'
import Hello from '../../step1/hello.vue'
import Hello2 from '../../step2/hello2.vue'
import Hello3 from '../../step3/hello3.vue'
import Hello4 from '../../step4/hello4.vue'
import SlotDemo from '../../step5/slot-demo.vue'
import ProvideEmit from '../../step6/provide-emit.vue'
import SliderDemo from '../../step7/slider-demo.vue'
import LangDemo from '../../step8/lang-demo.vue'

export const StepsRoute: RouteConfig[] = [
  {
    path: '/step1',
    component: Hello
  },
  {
    path: '/step2',
    component: Hello2
  },
  {
    path: '/step3',
    component: Hello3
  },
  {
    path: '/step4',
    component: Hello4
  },
  {
    path: '/step5',
    component: SlotDemo
  },
  {
    path: '/step6',
    component: ProvideEmit
  },
  {
    path: '/step7',
    component: SliderDemo
  },
  {
    path: '/step8',
    component: LangDemo
  },
]
