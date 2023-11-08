import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as path from './paths';
import { AboutPage } from '../Pages/AboutPage';
import { LoginPage } from '../Pages/LoginPage';
import { RegistationPage } from '../Pages/RegistationPage';
import { MobileUpdatePage } from '../Pages/MobileUpdatePage';
import { PasswordRecoveryPage } from '../Pages/PasswordRecoveryPage';
import { AddPensionSteatmentPage } from '../Pages/AddPensionSteatmentPage';
import { LandingPage } from '../Pages/LandingPage';
import { StateCompensationPage } from '../Pages/StateCompensationPage';
import { HouseholdSubsidyPage } from '../Pages/HouseholdSubsidyPage';
import { MobileUpdateAfterLoggingPage } from '../Pages/MobileUpdateAfterLoggingPage';
import { PasswordRecoveryAfterLoggingPage } from '../Pages/PasswordRecoveryAfterLoggingPage';
import { EditPensionSteatmentPage } from '../Pages/EditPensionSteatmentPage';
import { MinerPage } from '../Pages/MinerPage';
import { EditMinerPage } from '../Pages/EditMinerPage';
import { ProfileNew } from '../components/Profile copy/ProfileNew';
import { ChangePassword } from '../components/Profile copy/ChangePassword';
import { ChangeMobileNumber } from '../components/Profile copy/ChangeMobileNumber';
import { ProfileInfo } from '../components/Profile copy/ProfileInfo';
import { MobileUpdateAfterLogging } from '../components/MobileUpdateAfterLogging/MobileUpdateAfterLogging';
import { ExistancePage } from '../Pages/ExistancePage';



const routes = [
  {
    path: path.HOME_PATH,
    redirect: path.LANDING_PAGE,
  },
  {
    path: path.LOGIN_PAGE,
    component: <LoginPage />,
    key: path.LOGIN_PAGE,
  },
  {
    path: path.ABOUT,
    component: <AboutPage />,
    key: path.ABOUT,
  },

  {
    path: path.REGISTRATION_PAGE,
    component: <RegistationPage />,
    key: path.REGISTRATION_PAGE,
  },
  {
    path: path.MOBILEUPDATE_PAGE,
    component: <MobileUpdatePage />,
    key: path.MOBILEUPDATE_PAGE,
  },
  {
    path: path.PASSWORDRECOVERY_PAGE,
    component: <PasswordRecoveryPage />,
    key: path.PASSWORDRECOVERY_PAGE,
  },
  {
    path: path.ADDPENSIONSTEATMENT_PAGE,
    component: <AddPensionSteatmentPage />,
    key: path.ADDPENSIONSTEATMENT_PAGE,
  },
  {
    path: path.LANDING_PAGE,
    component: <LandingPage />,
    key: path.LANDING_PAGE,
  },
  {
    path: path.EXISTANCE_PAGE,
    component: <ExistancePage />,
    key: path.EXISTANCE_PAGE,
  },

  {
    path: path.STATECOMPENSATION_PAGE,
    component: <StateCompensationPage />,
    key: path.STATECOMPENSATION_PAGE,
  },
  {
    path: path.HOUSEHOLDSUBSIDY_PAGE,
    component: <HouseholdSubsidyPage />,
    key: path.HOUSEHOLDSUBSIDY_PAGE,
  },
  {
    path: path.MOBILEUPDATEAFTERLOGGING_PAGE,
    component: <MobileUpdateAfterLoggingPage />,
    key: path.MOBILEUPDATEAFTERLOGGING_PAGE,
  },
  {
    path: path.PASSWORDRECOVERYAFTERLOGGING_PAGE,
    component: <PasswordRecoveryAfterLoggingPage />,
    key: path.PASSWORDRECOVERYAFTERLOGGING_PAGE,
  },
  {
    path: path.PROFILESIDER_PAGE,
    component: <ProfileNew />,
    key: path.PROFILESIDER_PAGE,
    children: [
      {
        path: path.PROFILESIDER_PAGE_INFO,
        component: <ProfileInfo />,
        key: path.PROFILESIDER_PAGE_INFO,
      },
      {
        path: path.PROFILESIDER_PAGE_CHANGEPASS,
        component: <ChangePassword />,
        key: path.PROFILESIDER_PAGE_CHANGEPASS,
      },
      {
        path: path.PROFILESIDER_PAGE_CHANGEMOBILE,
        component: <ChangeMobileNumber />,
        key: path.PROFILESIDER_PAGE_CHANGEMOBILE,
      },
    ]
    
  },

  {
    path: path.VIEWPENSIONSTATEMENT_PAGE,
    component: <EditPensionSteatmentPage />,
    key: path.VIEWPENSIONSTATEMENT_PAGE,
  },
  {
    path: path.ADDMINERSTEATMENT_PAGE,
    component: <MinerPage />,
    key: path.ADDMINERSTEATMENT_PAGE,
  },

  {
    path: path.EDITMINERSTEATMENT_PAGE,
    component: <EditMinerPage />,
    key: path.EDITMINERSTEATMENT_PAGE,
  },
  {
    path: path.VIEWMINERSTEATMENT_PAGE,
    component: <EditMinerPage />,
    key: path.VIEWMINERSTEATMENT_PAGE,
  },
  {
    path: path.VIEWSUBSIDY_PAGE,
    component: <HouseholdSubsidyPage />,
    key: path.VIEWSUBSIDY_PAGE,
  },
  {
    path: path.VIEWCOMPENSATION_PAGE,
    component: <StateCompensationPage />,
    key: path.VIEWCOMPENSATION_PAGE,
  },

];
const renderNestedRoutes = r => {
  return (
    <Route
      element={r.redirect ? <Navigate replace to={r.redirect} /> : r.component}
      path={r.path}
      key={r.key}
    >
      {r.children
        ? r.children.map(d => {
          return renderNestedRoutes(d);
        })
        : null}
    </Route>
  );
};

export const RouterList = () => {
  return (
    <Routes>
      {routes.map(r => {
        return renderNestedRoutes(r);
      })}
    </Routes>
  );
};
