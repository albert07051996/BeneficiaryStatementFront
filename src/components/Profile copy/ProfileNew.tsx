import { Col, Radio, Row } from 'antd'
import { useEffect, useState } from 'react'
import './ProfileNew.css'
import { PhoneFilled, UnlockFilled, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { Outlet, useNavigate } from 'react-router'
import { useAppSelector } from '../../hooks'

export const ProfileNew = () => {
    const navigate = useNavigate()
    const employeeUser = localStorage.getItem('role')?.includes('Employee')
    const person = useAppSelector(state => state.statment.personInfo);

    console.log(employeeUser, '_xo')


    const [defaultLocation, setDefaultLocation] = useState<string>(window.location.pathname.split("/").splice(-1)[0])

    const changeProfilePages = (e: any) => {
        console.log(e, '_radio')
        setDefaultLocation(e.target.value)
        navigate(e.target.value)
    }

    useEffect(()=>{
        if(employeeUser &&  window.location.pathname.includes('addUser')){
            console.log(employeeUser &&  window.location.pathname.includes('addUser') ,'_xasdas')
            console.log(employeeUser  ,'_xasdas')

            // navigate(PROFILESIDER_PAGE_PROFILE_INFO)
        }
    },[window.location.pathname.includes('addUser')])

    return (
        <div className='mt40'>
            <Row gutter={[16, 16]}>
                <Col xxl={8} xl={8} md={8}>
                    <div className='profileChangerWrapper'>
                        <div className='profileIconWrapper horizontal-center vertical-center'>
                            <div className='userIconDirectWrapperProfile horizontal-center vertical-center'>
                                <UserOutlined className='usericonProfile' />
                            </div>
                        </div>
                        <div className='horizontal-center mt50'>
                            <span className='companyName'>{person.firstName} {person.lastName}</span>
                        </div>
                        <div className='horizontal-center'>
                            <Radio.Group onChange={changeProfilePages} className="columnFlex radioProfile mt24" defaultValue={defaultLocation} buttonStyle="solid">
                                <Radio.Button className='radioBtnProfile' value="profileInfo">
                                    <UserOutlined className='usericonProfileSmall' />
                                    <span className='profileTxtRadio'>პროფილი</span>
                                </Radio.Button>
                                <Radio.Button className='radioBtnProfile' value="changePass">
                                    <UnlockFilled className='usericonProfileSmall' />
                                    <span className='profileTxtRadio'>პაროლის ცვლილება</span>
                                </Radio.Button>
                                <Radio.Button className='radioBtnProfile' value="changeMobile">
                                    <PhoneFilled className='usericonProfileSmall' />
                                    <span className='profileTxtRadio'>მობილურის ცვლილება</span>
                                </Radio.Button>
                            </Radio.Group>
                        </div>
                    </div>
                </Col>
                <Col xxl={16} xl={16} md={16}>
                    <div className='profileOutletWrapper'>
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
