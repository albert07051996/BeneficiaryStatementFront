import { slide as Menu } from 'react-burger-menu'
import { useState, } from 'react';
import { PROFILESIDER_PAGE, LANDING_PAGE, LOGIN_PAGE, EXISTANCE_PAGE } from '../../router/paths';
import './BurgerMenu.css'
import newLogo from '../../assets/images/newlogo.svg'
import { useNavigate } from 'react-router';
import { ArrowDownOutlined, CloseOutlined, DownOutlined, LogoutOutlined, SettingFilled, UpOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
// import { PROFILESIDER_PAGE, LANDING_PAGE, LOGIN_PAGE } from '../../router/paths';


export const BurgerMenu = () => {

    const employeeUser = localStorage.getItem('role')


    const [dropDownArrow, setDropDownArrow] = useState<boolean>(false)
    const [dropDownArrow2, setDropDownArrow2] = useState<boolean>(false)
    const [dropDownArrowIm, setDropDownArrowIm] = useState<boolean>(false)


    const showSettings = (event: any) => {
        event.preventDefault();
    }
    const navigate = useNavigate();

    const signOut = (e: any) => {
        localStorage.removeItem('accesstoken');
        // navigate(LOGIN_PAGE);
        window.location.reload();

        console.log('გასვლა', localStorage);
    };

    const dropdown = (e: boolean) => {
        return setDropDownArrow(e)
    };
    const dropdown2 = (e: boolean) => {
        return setDropDownArrow2(e)
    };

    console.log(window.location.pathname, '_wlpth')

    return (
        <div>
            <Menu
                disableCloseOnEsc={false}
            >
                <div className='space-between ' onClick={() => navigate(LANDING_PAGE)}>
                    <img className='mainLogoStyles' src={newLogo} />
                </div>
                <div className='mt50 ml10 columnFlex w100'>
                    <div className='columnFlex w100 pointer' onClick={() => dropdown(!dropDownArrow)}>
                        <div className='vertical-baseline w100'>
                            <span className='bold burgerMenuTexts'>სახელმწიფო გასაცემლები</span>
                            {dropDownArrow ? <DownOutlined className='ml40' onClick={() => dropdown(false)} /> : <UpOutlined className='ml40' onClick={() => dropdown(true)} />}
                        </div>
                        {dropDownArrow ? <div className='columnFlex mt20 burgerSubMenuTextsWrapper'>
                            {employeeUser?.includes('Employee') ? <></> : <Link to={`/addPensionSteatmentPage`} className='burgerSubMenuTexts '>სახელმწიფო პენსია</Link>}
                            <Link to={`/stateCompensationPage`} className='burgerSubMenuTexts mt14'>სოციალური პაკეტი</Link>
                            <Link to={`/householdSubsidyPage`} className='burgerSubMenuTexts mt14'>საყოფაცხოვრებო სუბსიდია</Link>
                            <Link to={`/MinerPage`} className='burgerSubMenuTexts mt14'>სოციალური დახმარება "მეშახტე"</Link>
                            <Link to={`/5`} className='burgerSubMenuTexts mt14'>სახელმწიფო კომპენსაცია</Link>
                        </div> : <></>}
                    </div>
                    <div className='columnFlex w100 pointer mt24' onClick={() => dropdown2(!dropDownArrow2)}>
                        <div className='vertical-baseline w100 space-between'>
                            {/* <SettingFilled className='burgerMenuIcons' /> */}
                            <span className='bold burgerMenuTexts'>სოციალური</span>
                            {dropDownArrow2 ? <DownOutlined className='ml40' /> : <UpOutlined className='ml40' />}

                        </div>
                        {dropDownArrow2 ? <div className='columnFlex mt20 burgerSubMenuTextsWrapper'>
                            <Link to={EXISTANCE_PAGE} className='burgerSubMenuTexts mt14'>საარსებო შემწეობა</Link>
                        </div> : <></>}
                    </div>
                    <div className='vertical-center w100 mt40 pointer logOutWrapper' onClick={signOut}>
                        <LogoutOutlined className='burgerMenuIcons' />
                        <span className='ml16 burgerMenuTexts'>ავტორიზაციის <br /> გვერდი</span>
                    </div>
                </div>
            </Menu>
        </div>
    )
}
