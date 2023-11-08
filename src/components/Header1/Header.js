import './Header.css';
import Group67 from '../../../src/assets/images/Group67.svg';
import Group431 from '../../../src/assets/images/Group431.svg';
import Group395 from '../../../src/assets/images/Group395.svg';
import Group76 from '../../../src/assets/images/Group76.svg';
import { Layout, Menu, Button, Dropdown, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH, LABORATORY, MY_CASES, MOBILEUPDATEAFTERLOGGING_PAGE, PASSWORDRECOVERYAFTERLOGGING_PAGE, PROFILESIDER_PAGE } from '../../router/paths';
import './Header.css';

export const Header = () => {
  const person = useAppSelector(state => state.statment.personInfo);
  const navigate = useNavigate();

  const clickProfile = () => {
    navigate(PROFILESIDER_PAGE)
  }
  const signOut = () => {
    localStorage.removeItem('accesstoken');
    window.location.reload();
  };
  return (
    <div className="wrapper">
      <div className="headerNav">
        <div className="personNameWrapper">
          <div onClick={clickProfile}>
            <Space>
              <h4 style={{ color: '#FFFFFF', }}>
                {' '}
                {person?.firstName}
                <br /> {person?.lastName}
              </h4>

            </Space>
          </div>
        </div>
        <img
          alt="example"
          src={Group431}
          className="notificationsWrapper"
          onClick={clickProfile}
        />
        <img
          className="notificationsWrapper"
          type="primary" shape="circle" src={Group395} onClick={signOut} />
      </div>
    </div>
  );
};
