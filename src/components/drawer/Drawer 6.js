
import './Drawer.css'
import { Layout, Menu, Button} from 'antd';
import React, { useState, useEffect } from 'react';
import { MOBILEUPDATEAFTERLOGGING_PAGE, PASSWORDRECOVERYAFTERLOGGING_PAGE, PROFILESIDER_PAGE } from '../../router/paths';
import mycases from '../../icons/mainPageIcons/mycases.svg';
import analitics from '../../icons/mainPageIcons/analitics.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toggleCollapsed } from '../../redux/slices/appSlice';
import Group67 from '../../../src/assets/images/Group67.svg';
import Group76 from '../../../src/assets/images/Group76.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPerson, getRegions, getTerminationReason } from '../../redux/slices/steatmentSlice';
const { Header, Sider, Content } = Layout;
export const Drawer = () => {
  const [activeKey, setActiveKey] = useState(window.location.pathname);
  const app = useAppSelector(state => state.app);
  const person = useAppSelector(state => state.statment.personInfo);
  const addPensionStatementSuccess = useAppSelector(state => state.statment.addPensionStatementSuccess);
  const appState = useSelector((state) => state.app);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPerson());   
    dispatch(getRegions());
    dispatch(getTerminationReason());  

  }, []);

  useEffect(() => {
    localStorage.setItem('selectedKeys', activeKey);
  }, [activeKey]);


  const [collapsed, setCollapsed] = useState(false);
  const user = useAppSelector(state => state.user.userData.user);



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
  const itemsLab = [
    getItem(' მთავარი გვერდი', '/landingpage', <img alt="analitics" src={analitics} />),


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
  };





  const onClickDrop = ({ key }) => {
    if (key === '3') {
      localStorage.removeItem('accesstoken');
      window.location.reload();   
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

  return (
    <>
      <Sider
        width={250}
        className="sliderHight"       
        collapsed={!app.collapsed}
      >
             {appState.collapsed && (<div className=''><img src={Group67} alt="example" className='logoHeader' /></div>)}

        {!appState.collapsed ?
          (
            <Button type="link" onClick={toggle} block>
              <div><img src={Group76} alt="example" /></div>
            </Button>)
          :
          <Button type="link" onClick={toggle} block>
            <img src={Group76} alt="example" className='iconHeader' />
          </Button>
        }

        <Menu
          onSelect={onSelectMenu}
          selectedKeys={  
            window.location.pathname
          }
          theme="light"
          mode="inline"
          items={itemsLab}
        />
      </Sider>  
    </>
  );
};
