
"use client"
import React from 'react';
import AuthLayout from '@/Layout/AuthLayout';
import LoginForm from '@/components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>


  );
};

export default LoginPage;
