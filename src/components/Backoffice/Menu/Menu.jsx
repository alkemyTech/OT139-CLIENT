import React from 'react'
import { AdminMenu } from './AdminMenu'
import { UserMenu } from './UserMenu'

export const Menu = ({ roleId }) => {
  const id = 1; 

  // Cuando tengamos el endpoint comparamos que el roleId sea de admin o un user comun
  if(id === 1){
    return <AdminMenu />
  } else {
    return <UserMenu />
  }
}
