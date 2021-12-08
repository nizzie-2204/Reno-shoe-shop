import React, { lazy, Suspense } from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../App.css'
import PrivateRoute from '../component/PrivateRoute/PrivateRoute'
import PublicRoute from '../component/PublicRoute/PublicRoute'

// Admin pages
const HomeAdmin = lazy(() => import('../pages/admin/Home/Home'))
const UserAdmin = lazy(() => import('../pages/admin/User/User'))
const CategoryAdmin = lazy(() => import('../pages/admin/Category/Category'))
const SizeAdmin = lazy(() => import('../pages/admin/Size/Size'))
const ProductAdmin = lazy(() => import('../pages/admin/Product/Product'))
const AddEditProductAdmin = lazy(() =>
	import('../pages/admin/Product/AddEditProduct/AddEditProduct')
)
const OrderAdmin = lazy(() => import('../pages/admin/Order/Order'))
// Customer pages
const Home = lazy(() => import('../pages/customer/Home/Home'))
const ForgotPassword = lazy(() =>
	import('../pages/ForgotPassword/ForgotPassword')
)
const Login = lazy(() => import('../pages/Login/Login'))
const Register = lazy(() => import('../pages/Register/Register'))
const ResetPassword = lazy(() => import('../pages/ResetPassword/ResetPassword'))
const Cart = lazy(() => import('../component/customer/Cart/Cart'))
const Order = lazy(() => import('../component/customer/Order/Order'))
const ProductDetail = lazy(() =>
	import('../component/customer/ProductDetail/ProductDetail')
)
const Shop = lazy(() => import('../component/customer/Shop/Shop'))
const NotFound = lazy(() => import('../pages/customer/NotFound/NotFound'))

const routesApp = [
	{
		exact: true,
		path: '/admin/home',
		component: HomeAdmin,
	},
	{
		exact: true,
		path: '/admin/user',
		component: UserAdmin,
	},
	{
		exact: true,
		path: '/admin/category',
		component: CategoryAdmin,
	},
	{
		exact: true,
		path: '/admin/size',
		component: SizeAdmin,
	},
	{
		exact: true,
		path: '/admin/order',
		component: OrderAdmin,
	},
	{
		exact: true,
		path: '/admin/product',
		component: ProductAdmin,
	},
	{
		exact: true,
		path: '/admin/product/new',
		component: AddEditProductAdmin,
	},
	{
		exact: true,
		path: '/',
		component: Home,
	},
	{
		exact: true,
		path: '/login',
		component: Login,
		restricted: true,
	},
	{
		exact: true,
		path: '/register',
		component: Register,
		restricted: true,
	},

	// {
	// 	path: '/forgot-password',
	// 	component: <ForgotPassword />,
	// 	restricted: true,
	// },
	{
		exact: true,
		path: '/cart',
		component: Cart,
	},
	{
		path: '/shop',
		component: Shop,
	},
	{
		exact: true,
		path: '/product/:id',
		component: ProductDetail,
	},
	{
		exact: true,
		path: '/order',
		component: Order,
	},
	{
		path: '*',
		component: NotFound,
	},
]

const RoutesApp = () => {
	const location = useLocation()
	return (
		<TransitionGroup component={null}>
			<CSSTransition timeout={300} classNames="page" key={location.key}>
				<Suspense fallback={null}>
					<Switch location={location}>
						{routesApp.map((route, index) => {
							const Component = route.component
							return route.path.includes('/admin') ? (
								<PrivateRoute
									component={Component}
									exact={route.exact}
									path={route.path}
									key={index}
								/>
							) : (
								<PublicRoute
									component={Component}
									exact={route.exact}
									path={route.path}
									key={index}
									restricted={route.restricted}
								/>
							)
						})}
					</Switch>
				</Suspense>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default RoutesApp
