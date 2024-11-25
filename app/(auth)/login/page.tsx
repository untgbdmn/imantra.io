import LayoutAuthPage from '@/layouts/layout'
import React from 'react'
import FormLogin from './form-login'

export default function LoginPage() {
  return (
    <LayoutAuthPage title='Sign In'>
        <FormLogin />
    </LayoutAuthPage>
  )
}
