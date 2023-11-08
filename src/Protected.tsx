import React from 'react';
import { LoginPage } from './Pages/LoginPage';
import { RegistationPage } from './Pages/RegistationPage';
import { AddPensionSteatmentPage } from './Pages/AddPensionSteatmentPage';
import Backgrounds11 from '../src/assets/images/Backgrounds-Aqua-Blue-Download.jpg';

type Props = {
  user: any;
  children: any;
};

export const Protected = (props: Props) => {
  const token = localStorage.getItem('accesstoken');
  // console.log(props.children, token, "proteqsheni")
  if (!token) {
    return (
      <div
        style={{
          // backgroundImage: `url(${Backgrounds11})`,
          justifyContent: 'center',
          minHeight: '80vh',
          alignItems: 'center',
        }}
      >
        <LoginPage />
      </div>
    );
  }

  return props.children;
};
