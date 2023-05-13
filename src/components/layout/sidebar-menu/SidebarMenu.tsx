import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './SidebarMenu.module.scss'

import logo from '../../../assets/logo.svg'

import { routes } from '../../../routes/routes.data'

const SidebarMenu: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <img src={logo} alt='Pharm-live-logo' />
      </div>

      <ul>
        {routes.map((route, index) => (
          <li className={styles.sidebar__li} key={`_id_${route.path.replace('/', '')}-${index}`}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive ? `${styles.sidebar__link__active}` : `${styles.sidebar__link}`
              }
            >
              {route.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SidebarMenu
