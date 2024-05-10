/* eslint-disable @typescript-eslint/no-unused-vars */

import {  ReactNode } from 'react';
import { Navigate } from 'react-router-dom'
import { UserType } from '../component/User/UserType';

interface Protected{
  isSignedIn?:boolean;
  children:ReactNode;
  current_user?:string
}


function ProtectedRoute({ isSignedIn, children, current_user }:Protected){
  if (!isSignedIn && current_user === UserType.super_admin ) {
    return <Navigate to="/" replace />
  }
  return children
}
export default ProtectedRoute