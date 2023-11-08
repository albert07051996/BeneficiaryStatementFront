import React, {  useState } from 'react';
import './Drawer.css';
import { HOME_PATH} from '../../router/paths';
import { Menu, Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import mycases from '../../icons/mainPageIcons/mycases.svg';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toggleCollapsed } from '../../redux/slices/appSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const Drawer = () => {
  const app = useAppSelector(state => state.app);
  const [activeKey, setActiveKey] = useState(window.location.pathname);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleCollapsed());
  };

  const onSelectMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    navigate(key);
    setActiveKey(key);
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const pageLocation = window.location.pathname.split('/');
  console.log(pageLocation);
  const itemsLab = [
    getItem(
      <h1 className="mainlogo">
        <NavLink style={{ color: 'black' }} to={HOME_PATH}>
          <span>TB</span> <span>health</span>
        </NavLink>
      </h1>,
      '/about'
    ),
    getItem('საპენსიო გასაცემელი', '/mycases', <img alt="mycases" src={mycases} />,
      [
        getItem('სახელმწიფო პენსია', '/addPensionSteatmentPage'),
        getItem('სახელმწიფო კომპენსაცია', '/landingpage'),
        getItem('სახელმწიფო კომპენსაცია', '5'),
        getItem('საყოფაცხოვრებო სუბსიდია', '6'),

      ]),
  ];
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        width={250}
        collapsible
        collapsed={!app.collapsed}
        onCollapse={toggle}
        theme="light"
        hidden={pageLocation[1] == 'person' ? true : false}
      >
        <div className="logo" />
        <Menu
          onSelect={onSelectMenu}
          defaultSelectedKeys={
            localStorage.getItem('selectedKeys') || window.location.pathname
          }
          theme="ligt"
          mode="inline"
          items={itemsLab}
        />
      </Sider>
    </Layout>
  );
};
