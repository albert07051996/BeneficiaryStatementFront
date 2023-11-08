import { Col, DatePicker, Input, Row } from 'antd'
import React from 'react'
import { useAppSelector } from '../../hooks'
import dayjs from 'dayjs';

export const ProfileInfo = () => {
    const person = useAppSelector(state => state.statment.personInfo);

    return (
        <div className='pt65 addUserFormWrapper' >
            <Row gutter={[16, 32]}>
                <Col xxl={3} xl={3} md={3}></Col>
                <Col xxl={9} xl={9} md={9}>
                    <div className='columnFlex'>
                        <label className='profileInfoLabel'>სახელი</label>

                        <Input value={person.firstName} />
                    </div>
                </Col>
                <Col xxl={9} xl={9} md={9}>
                    <div className='columnFlex'>
                        <label className='profileInfoLabel'>გვარი</label>
                        <Input value={person.lastName}
                        />
                    </div>

                </Col>
                <Col xxl={3} xl={3} md={3}></Col>


            </Row>
            <Row className='mt24' gutter={[16, 32]}>
                <Col xxl={3} xl={3} md={3}></Col>
                <Col xxl={9} xl={9} md={9}>
                    <div className='columnFlex'>
                        <label className='profileInfoLabel'>პირადი ნომერი</label>
                        <Input value={person.privateNumber} placeholder='ფაქტიური მისამართი' />
                    </div>
                </Col>
                <Col xxl={9} xl={9} md={9}>
                    <div className='columnFlex'>
                        <label className='profileInfoLabel'>დაბადების თარიღი</label>
                        <DatePicker    value={
                  person?.birthDate != ''
                    ? dayjs(person?.birthDate)
                    : undefined
                }/>
                    </div>
                </Col>

                <Col xxl={3} xl={3} md={3}></Col>


            </Row>
            <Row className='mt24' gutter={[16, 32]}>
                <Col xxl={3} xl={3} md={3}></Col>
                <Col xxl={9} xl={9} md={9}>
                    <div className='columnFlex'>
                        <label className='profileInfoLabel'>ელ-ფოსტა</label>
                        <Input value={person.email} placeholder='იურიდიული მისამართი' />
                    </div>
                </Col>
                <Col xxl={9} xl={9} md={9}>
                    <div className='columnFlex'>
                        <label className='profileInfoLabel'>ტელეფონის ნომერი</label>
                        <Input value={person.phoneNumber}  placeholder='ტელეფონის ნომერი' />
                    </div>
                </Col>
                <Col xxl={3} xl={3} md={3}></Col>
            </Row>
        </div>
    )
}
