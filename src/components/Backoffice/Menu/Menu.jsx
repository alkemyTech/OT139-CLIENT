import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../../localStorage/storage';
import { AdminMenu } from './AdminMenu';
import { LoginRegister } from './LoginRegister';
import { UserMenu } from './UserMenu';

export const Menu = () => {
  const [userRole, setUserRole] = useState(null);
  const user = getUserInfo();
  
  useEffect(()=>{
    if(user && !user.msg){
      setUserRole(user.user.roleId)
    }
  }, [userRole, setUserRole])

  if (userRole === 1) {
    return <AdminMenu />;
  } else if (userRole === 2) {
    return <UserMenu user={ user.user.firstName } />;
  } else {
    return <LoginRegister />
  }
};
