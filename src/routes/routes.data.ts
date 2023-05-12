import Clients from '../screens/clients/Clients'
import Employees from '../screens/employees/Employees'
import Home from '../screens/home/Home'

import { IRoute } from '../types/types'

export const routes: IRoute[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/clients',
    component: Clients,
  },
  {
    path: '/medications',
    component: Employees,
  },
]
