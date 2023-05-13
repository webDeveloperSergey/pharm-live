import { FC } from 'react'

import styles from './Layout.module.scss'

import SidebarMenu from './sidebar-menu/SidebarMenu'

import Button from '../UI/button/Button'

interface ILayoutProps {
  title: string
  btn: boolean
  btnTitle?: string
  children: React.ReactNode
}

const Layout: FC<ILayoutProps> = ({ title, btn, btnTitle, children }) => {
  return (
    <div className='layout'>
      <SidebarMenu />
      <div className={styles.layout__wrap}>
        <div className={styles.layout__top}>
          <h1>{title}</h1>
          {btn && <Button text={btnTitle} isAddBtn={true} isTransparent={false} />}
        </div>

        {children}
      </div>
    </div>
  )
}

export default Layout
