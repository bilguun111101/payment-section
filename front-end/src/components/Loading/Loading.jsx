import React from 'react'
import css from "./LoadingStyle.module.scss";

const Loading = () => {
  return (
    <div className={css.loading-section}>
        <div className={css.lds-roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading