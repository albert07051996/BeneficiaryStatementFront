
import './Drawer.css'
import { Layout, Menu, Button, Dropdown, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import { RouterList } from '../../router/Router';
import { HOME_PATH, LABORATORY, MY_CASES, MOBILEUPDATEAFTERLOGGING_PAGE, PASSWORDRECOVERYAFTERLOGGING_PAGE, PROFILESIDER_PAGE } from '../../router/paths';
import mycases from '../../icons/mainPageIcons/mycases.svg';
import analitics from '../../icons/mainPageIcons/analitics.svg';
import { useNavigate } from 'react-router-dom';
import { toggleCollapsed } from '../../redux/slices/appSlice';
import Group67 from '../../../src/assets/images/Group67.svg';
import Group431 from '../../../src/assets/images/Group431.svg';
import Group395 from '../../../src/assets/images/Group395.svg';
import Group76 from '../../../src/assets/images/Group76.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPerson, getRegions, getTerminationReason } from '../../redux/slices/steatmentSlice';
const { Header, Sider, Content } = Layout;
export const Drawer = () => {
  const [activeKey, setActiveKey] = useState(window.location.pathname);
  const person = useAppSelector(state => state.statment.personInfo);
  const addPensionStatementSuccess = useAppSelector(state => state.statment.addPensionStatementSuccess);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPerson());
    console.log(person, "person")
    dispatch(getRegions());
    dispatch(getTerminationReason());
  }, []);


  useEffect(() => {
    localStorage.setItem('selectedKeys', activeKey);

  }, [activeKey]);
  const [collapsed, setCollapsed] = useState(false);
  const user = useAppSelector(state => state.user.userData.user);


  const app = useAppSelector(state => state.app);
  const navigate = useNavigate();

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
    getItem('მთავარი გვერდი', '/landingpage', <img alt="analitics" src={analitics} />),


    getItem('სახელმწიფო გასაცემლები', '/mycases', <img alt="mycases" src={mycases} />,
      [
        getItem('სახელმწიფო პენსია', '/addPensionSteatmentPage',),
        getItem('სოციალური პაკეტი', '/stateCompensationPage'),
        getItem('სახელმწიფო კომპენსაცია', '5'),
        getItem('საყოფაცხოვრებო სუბსიდია', '/householdSubsidyPage'),

      ]),
  ];


  const signOut = () => {
    localStorage.removeItem('accesstoken');
    window.location.reload();
    console.log('do something');
    console.log('error occurred')
  };





  const onClickDrop = ({ key }) => {
    console.log(key)
    if (key === '3') {
      localStorage.removeItem('accesstoken');
      window.location.reload();
      console.log('do something');
      console.log('error occurred')
    }
    if (key === '2') {
      navigate(MOBILEUPDATEAFTERLOGGING_PAGE);

    }
    if (key === '1') {
      navigate(PASSWORDRECOVERYAFTERLOGGING_PAGE);

    }
  };

  const clickProfile = () => {
    navigate(PROFILESIDER_PAGE)
  }

  const menu = (
    <Menu
      onClick={onClickDrop}
      items={[
        {
          label: 'პროფილი',
          key: '0',
        },
        {
          label: 'პაროლის შეცვლა',
          key: '1',
        },
        {
          label: 'მობილურის შეცვლა',
          key: '2',
        },
        {
          label: 'პარამეტრები',
          key: '4',
        },
        {
          type: 'divider',
        },
        {
          label: 'გასვლა',
          key: '3',
        },
      ]}
    />
  );

  const sendRequest = () => {
    console.log(person, "person")
  }
  // console.log(activeKey, 'activekey')
  console.log(window.location.pathname, " window.location.pathname")

  return (
    <div className='fullDrower'>
      <Layout>
        <Sider
          width={331}
          className="sliderHight"
          trigger={null} collapsible collapsed={collapsed}>
          {!collapsed && (<div className=''><img src={Group67} alt="example" className='logoHeader' /></div>)}


          {collapsed ?
            (
              // <div className='logoHeader'><img src={Group67} alt="example" /> My.moh.gov</div>
              <Button type="link" onClick={() => setCollapsed(!collapsed)} block>
                <div><img src={Group76} alt="example" /></div>
              </Button>)
            :
            <Button type="link" onClick={() => setCollapsed(!collapsed)} block>
              <img src={Group76} alt="example" className='iconHeader' />
            </Button>
          }

          <Menu
            onSelect={onSelectMenu}
            selectedKeys={window.location?.pathname}
            theme="light"
            mode="inline"
            items={itemsLab}
          />
        </Sider>
        { }

        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <div className="wrapper">
              <div className="headerNav">
                <div className="personNameWrapper">
                  <a onClick={clickProfile}>

                    <Space>
                      <h4 style={{ color: '#FFFFFF', }}>
                        {' '}
                        {person?.firstName}
                        <br /> {person?.lastName}
                      </h4>
                    </Space>
                  </a>
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
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              height: "100%",
            }}
          >
            < RouterList />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
