import {RouteConfig} from 'vue-router'
import RouterDemo from './router-demo.vue'
import DemoHeader from './demo-header.vue'
import DemoContent from './demo-content.vue'

export const DemoRoute: RouteConfig = {
  path: '/route-demo',
  component: RouterDemo,
  children: [
    {
      path: 'demo1/:id',
      name: 'demo1',
      props: {default: true, header: false},
      components: {
        default: DemoContent,
        header: DemoHeader
      }
    },
    {
      path: 'demo2',
      component: DemoContent
    }
  ]
}
