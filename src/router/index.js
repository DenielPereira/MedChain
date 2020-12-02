import VueRouter from 'vue-router'
import Login from './../components/pages/login'

const routes = [{
		path: '/',
		component: Login,
		name: 'login',
		meta: {
			title: 'Medchain: Login',
		}
	}
]


const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Your Website Title';
  next();
});

export default router