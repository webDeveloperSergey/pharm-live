import Clients from '../screens/clients/Clients'
import Employees from '../screens/employees/Employees'
import Home from '../screens/home/Home'
import Medications from '../screens/medications/Medications'

import { IRoute } from '../types/types'

export const routes: IRoute[] = [
  {
    path: '/',
    component: Home,
    title: 'Главная',
  },
  {
    path: '/clients',
    component: Clients,
    title: 'Клиенты',
  },
  {
    path: '/employees',
    component: Employees,
    title: 'Сотрудники',
  },
  {
    path: '/medications',
    component: Medications,
    title: 'Лекарства',
  },
]
