import './class-component-hooks'
import Vue from 'vue'
import Router, {RouteConfig, RouterOptions} from 'vue-router'
import { ProfileRoute } from '../steps/final/profile/cp-profile-route'
import { StepsRoute } from '../steps/final/menu/cp-steps-route'
import { DemoRoute } from '../steps/step9/demo-route'

Vue.use(Router);

const root: RouteConfig =
    {
        path: '/',
        redirect: '/welcome'
    };

const routerOptions: RouterOptions = {routes: [root, ProfileRoute, DemoRoute].concat(StepsRoute)}

export default new Router(
    routerOptions
)
