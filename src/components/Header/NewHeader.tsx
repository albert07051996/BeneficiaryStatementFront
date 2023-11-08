import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Drawer, Space, Tree } from 'antd';
import './NewHeader.css';
import { Input } from 'antd';
import Logo from './ImagesForHeader/logo.svg';
import Exit from './ImagesForHeader/Exit.png';
import Avatar from './ImagesForHeader/avatar.png';
import Ring from './ImagesForHeader/Ring.png';
import vector from './ImagesForHeader/v.png';
import Translator from './ImagesForHeader/translator.png';
import {
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  DownOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  LineOutlined
} from '@ant-design/icons';
import {
  getPerson,
  getRegions,
  getTerminationReason,
} from '../../redux/slices/steatmentSlice';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { DropdownComponent } from './DropdownComponent';
import Polygon from './ImagesForHeader/Polygon.png';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { PROFILESIDER_PAGE, LANDING_PAGE, LOGIN_PAGE, PROFILESIDER_PAGE_INFO, EXISTANCE_PAGE } from '../../router/paths';
import { LandingPage } from '../../Pages/LandingPage';
import PageHeaderInside from '../PageHeader/PageHeaderInside';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import useWindowDimensions from '../../getWindowDimensions';
export const NewHeader = () => {



  const { height, width } = useWindowDimensions();
  let isTabletVersion = width >= 1025 ? false : true


  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  const handleMenuClick = (e: any) => {
    // message.info('Click on menu item.');
    console.log('click', e);
  };

  const items = [
    {
      label: <Link to={`/addPensionSteatmentPage`}>სახელმწიფო პენსია</Link>,
      key: '/addPensionSteatmentPage',
      icon: <SettingOutlined />,
    },
    {
      label: <Link to={`/stateCompensationPage`}>სოციალური პაკეტი</Link>,
      key: '/stateCompensationPage',
      icon: <SettingOutlined />,
    },
    {
      label: <Link to={`/5`}>სახელმწიფო კომპენსაცია</Link>,
      key: '/5',
      icon: <SettingOutlined />,
    },
    {
      label: <Link to={`/householdSubsidyPage`}>საყოფაცხოვრებო სუბსიდია</Link>,
      key: '/householdSubsidyPage',
      icon: <SettingOutlined />,
    },
    {
      label: <Link to={`/MinerPage`}>სოციალური დახმარება "მეშახტე"</Link>,
      key: '/MinerPage',
      icon: <SettingOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const signOut = () => {
    localStorage.removeItem('accesstoken');
    window.location.reload();
  };

  const routeingLending = () => {
    navigate(LANDING_PAGE);
  };

  const person = useAppSelector(state => state.statment.personInfo);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPerson());
    console.log(person, 'person');
    dispatch(getRegions());
    dispatch(getTerminationReason());
  }, []);

  const clickProfile = () => {
    navigate(PROFILESIDER_PAGE);
  };
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };




  const stateIssues: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to={'addPensionSteatmentPage'} >
          სახელმწიფო პენსია
        </Link>

      ),
    },
    {
      key: '2',
      label: (
        <Link to={'stateCompensationPage'} >
          სოციალური პაკეტი
        </Link>

      ),
    },
    {
      key: '3',
      label: (
        <Link to={'householdSubsidyPage'} >
         საყოფაცხოვრებო სუბსიდია
        </Link>
      ),
    },
       {
      key: '4',
      label: (
        <Link to={'4'} >
        სახელმწიფო კომპენსაცია
        </Link>
      ),
    },
    {
      key: '5',
      label: (
        <Link to={'minerPage'} >
       სოციალური დახმარება "მეშახტე"
        </Link>
      ),
    },
  ];
  const socialItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to={EXISTANCE_PAGE} >
          საარსებო შემწეობა
        </Link>

      ),
    },
  ];


  const treeData = [
    {
      title: <div onClick={showDrawer}>მიგრაცია</div>,
      key: '0-0',
      children: [
        {
          title: (
            <div onClick={e => onClick1(e, '/addPensionSteatmentPage')}>
              განაცხადის რეგისტრაცია
            </div>
          ),
          key: '/addPensionSteatmentPage',
        },
      ],
    },
    {
      title: <div onClick={showDrawer}>სახელმწიფო გასაცემელი</div>,
      key: '0-0',
      children: [
        {
          title: (
            <div onClick={e => onClick1(e, '/addPensionSteatmentPage')}>
              სახელმწიფო პენსია
            </div>
          ),
          key: '/addPensionSteatmentPage',
        },
        {
          title: (
            <div onClick={e => onClick1(e, '/stateCompensationPage')}>
              სოციალური პაკეტი
            </div>
          ),
          key: '/stateCompensationPage',
        },
        {
          title: <div onClick={e => onClick1(e, '/5')}>სახელმწიფო კომპენსაცია</div>,
          key: '/5',
        },
        {
          title: (
            <div onClick={e => onClick1(e, '/householdSubsidyPage')}>
              საყოფაცხოვრებო სუბსიდია
            </div>
          ),
          key: '/householdSubsidyPage',
        },
        {
          title: (
            <div onClick={e => onClick1(e, '/minerPage')}>
              სოციალური დახმარება "მეშახტე"
            </div>
          ),
          key: '/minerPage',
        },
      ],
    },
  ];
  const onClick1 = (e: any, key: any) => {
    onClose();
    navigate(key);
  };

  return (
    <div className='Header flex headerWrapper'>
      <Row  className='H_Row'>
        <Col xl={8} md={8} xs={6} >
          <div className='flex pointer H_Col1' onClick={() => navigate(LANDING_PAGE)}>
            <img style={{ width: '60px', height: '60px' }} src={Logo} />
            {isTabletVersion ? <></> : <h1 className='headertitle' style={{ fontSize: '21px', marginLeft: '16px' }} >MY MOH.GOV.GE</h1>}
          </div>
          {isTabletVersion ? <BurgerMenu /> : <></>}
        </Col>
        <Col xl={8} md={8} xs={9} className='H_Col2'>
          {/* <Search placeholder="ძიება" className='H_Search' onSearch={onSearch} /> */}
        </Col>
        <Col className='col3WrapperUser' style={{ display: 'flex', alignItems: 'end' }} xl={8} md={8} xs={9}>
          <div className='H_Col3'>
          <div onClick={() => navigate(PROFILESIDER_PAGE_INFO)} className='userProfileWrapper pointer' style={{ display: 'flex', alignItems: 'end' }}>
              <button  style={{ background: '#ffff', border: 'none', width: '45px', height: '32px' }}>
                <UserOutlined className='icon Iuser' style={{ width: '100%', height: '100%' }} />
              </button>
              <span className='userName'>{person.firstName}&nbsp;{person.lastName}</span>
            </div>
            <div className='bellsIcon'>
              {isTabletVersion ? <></> :
                <>
                  <button style={{ background: '#ffff', border: 'none' }} onClick={signOut}>
                    <LogoutOutlined className='icon' />
                  </button></>
              }
            </div>
          </div>
        </Col>
      </Row>
      <div className='w100 mt6 space-between relativeHeader'>
     <div className='headerLines'><LineOutlined className='hideLine' /></div>
      <Row className='H_Row2'>
        {isTabletVersion ? <></> :
          <>
            <div className='Dropdown_Container'>
              <DropdownComponent className='dropDown' title='სახელმწიფო გასაცემლები' items={stateIssues} />
            </div>
            <div className='Dropdown_Container ml24'>
              <DropdownComponent title='სოციალური' items={socialItems}/>
            </div>
            {/* <div className='Dropdown_Container ml24'>
              <DropdownComponent title='ჯანდაცვა' />
            </div>
            <div className='Dropdown_Container ml24'>
              <DropdownComponent title='დასაქმება' />
            </div> */}
          </>
        } 
      </Row>
      <div className='headerLines'><LineOutlined className='hideLine' /></div>
      <div className='headerLineAbsolute'><LineOutlined className='hideLine' /></div>
     </div>
    </div>
  );
};
