import React from 'react'
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul class={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (<li className={styles.item} key={id}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>))}
    </ul>
  )
}

export default FriendList
