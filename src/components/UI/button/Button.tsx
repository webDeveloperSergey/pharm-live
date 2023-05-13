import cn from 'classnames'
import { FC } from 'react'

import styles from './Button.module.scss'

interface IButtonProps {
  text: string | undefined
  isAddBtn: boolean
  isTransparent: boolean
}

const Button: FC<IButtonProps> = ({ text, isAddBtn, isTransparent }) => {
  return (
    <button
      className={cn(styles.btn, {
        [styles.btn__transparent]: isTransparent,
      })}
    >
      {isAddBtn && (
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.99619 11.8334C5.81807 11.8334 5.66998 11.7735 5.55192 11.6537C5.43387 11.5339 5.37484 11.3854 5.37484 11.2084V6.62502H0.791504C0.614421 6.62502 0.465983 6.56478 0.346191 6.44429C0.2264 6.32379 0.166504 6.17449 0.166504 5.99638C0.166504 5.81825 0.2264 5.67016 0.346191 5.5521C0.465983 5.43405 0.614421 5.37502 0.791504 5.37502H5.37484V0.791687C5.37484 0.614604 5.43508 0.466166 5.55557 0.346375C5.67607 0.226583 5.82537 0.166687 6.00348 0.166687C6.18161 0.166687 6.3297 0.226583 6.44775 0.346375C6.56581 0.466166 6.62484 0.614604 6.62484 0.791687V5.37502H11.2082C11.3853 5.37502 11.5337 5.43526 11.6535 5.55575C11.7733 5.67625 11.8332 5.82555 11.8332 6.00367C11.8332 6.18179 11.7733 6.32988 11.6535 6.44794C11.5337 6.56599 11.3853 6.62502 11.2082 6.62502H6.62484V11.2084C6.62484 11.3854 6.56459 11.5339 6.44411 11.6537C6.32361 11.7735 6.1743 11.8334 5.99619 11.8334Z'
            fill='none'
          />
        </svg>
      )}

      {text}
    </button>
  )
}

export default Button
