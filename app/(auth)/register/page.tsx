import LayoutAuthPage from '@/layouts/layout'
import React from 'react'
import FormRegister from './form-register'

export default function RegisterPage() {
  return (
    <LayoutAuthPage title='Sign Up'>
        <FormRegister />
    </LayoutAuthPage>
  )
}
