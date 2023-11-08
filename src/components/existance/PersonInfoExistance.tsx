import React, { useState, useEffect } from 'react'
import './Existance.css'
import { Button, Col, Divider, Form, Input, Radio, RadioChangeEvent, Row, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks';
import dayjs from 'dayjs';
import { AskingReason } from '../../constants';
import { ApplicationTypes, changeAskingReason, changeIsFamilyMember, clearValidatePersonInfoSuccess, createApplication, disableBtnsGlobalReset, resetAddress } from '../../redux/slices/existanceSlice';
import { GlobalOutlined } from '@ant-design/icons';

export const PersonInfoExistance = ({resetFields}:any) => {
    const [form] = Form.useForm()
    const askingReason = useAppSelector(state => state.existance.askingReason)
    const listApplicationTypes:any = useAppSelector(state => state.existance.listApplicationTypes)
    const person = useAppSelector(state => state.statment.personInfo);
    const isFamilyMember = useAppSelector(state => state.existance.isFamilyMember)

    const { Option } = Select
    const dispatch = useAppDispatch();
    
    const [value, setValue] = useState(1);
    const [today, setToday] = useState(dayjs().format('YYYY-MM-DD'));

    let createApplicationObj = {
        regioN_ID: 3,
        applicatioN_TYPE: askingReason,
        firsT_NAME: person.firstName,
        lasT_NAME: person.lastName,
        birtH_DATE: person.birthDate,
        pid: person.privateNumber,
        fid: '12312312312',
        phone: person.phoneNumber,
        familY_MEMBER: isFamilyMember,
        ziP_CODE: '',
        city: '',
        region: '',
        government: '',
        village: '',
        address: '',
        addresS_NO: '',
        homE_1: '',
        homE_2: '',
        phonE_1: '',
        phonE_2: '',
        email: '',
        communicatioN_TYPE: '',
        communicatioN_TYPE_TEXT: '',
        reregisteR_TYPE: '',
        reregisteR_TYPE_TEXT:'',
        familyMembers: ''
    }

    const sendRequest = () => {
        dispatch(createApplication(createApplicationObj));
    };

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        dispatch(changeIsFamilyMember(e.target.value))
        setValue(e.target.value);
        resetFields()
        dispatch(clearValidatePersonInfoSuccess())
        dispatch(disableBtnsGlobalReset())
    };
    const onChangeSelect = (e: RadioChangeEvent) => {
        dispatch(changeAskingReason(e))
        dispatch(resetAddress())
    };

    useEffect(() => {
        dispatch(ApplicationTypes())
    }, [])

   

    const onFinish = (values: any) => {
        console.log(values, 'sda')
    };
    const onFinishFailed = (values: any) => {
        console.log(values, 'sda')
    };

    return (
        <div className='PersonInfoExistanceWrapper PersonInfoExistanceWrapperInfo'>
            <Form onFinishFailed={onFinishFailed} colon={false} labelAlign='left' onFinish={onFinish} form={form} name='FamilyAddress'>
                <Row>
                    <Col xs={24} sm={19} md={19} lg={19} xl={19} xxl={19}>
                        <div className='PersonInfoExistanceTitle'>ინფორმაცია განმცხადებლის შესახებ</div>
                    </Col>
                    <Col xs={24} sm={5} md={5} lg={5} xl={5} xxl={5}>
                        <Select defaultValue="KA" style={{ width: 100 }} className='languageSelect' >
                            <Option value="AZ"><GlobalOutlined className='languageChangeIcon' />&nbsp;AZ</Option>
                            <Option value="AR"><GlobalOutlined className='languageChangeIcon' />&nbsp;AR</Option>
                            <Option value="KA"><GlobalOutlined className='languageChangeIcon' />&nbsp;KA</Option>
                        </Select>
                    </Col>
                </Row>
                <Divider className='dividerColor' />
                <Row gutter={[10, 16]}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div className='columnFlex PersonInfoExistanceCards'>
                            <strong>სახელი</strong>
                            <span className='mt8'>{person.firstName}</span>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div className='columnFlex PersonInfoExistanceCards'>
                            <strong>გვარი</strong>
                            <span className='mt8'>{person.lastName}</span>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div className='columnFlex PersonInfoExistanceCards'>
                            <strong>პირადი ნომერი</strong>
                            <span className='mt8'>{person.privateNumber}</span>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div className='columnFlex PersonInfoExistanceCards'>
                            <strong>დაბადების თარიღი</strong>
                            <span className='mt8'>{dayjs(person?.birthDate).format('DD/MM/YYYY')}</span>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div className='columnFlex PersonInfoExistanceCards'>
                            <strong>საკონტაქტო ტელეფონი</strong>
                            <span className='mt8'>{person.phoneNumber}</span>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div className='columnFlex PersonInfoExistanceCards PersonInfoExistanceCardsRadio'>
                            <strong>ხართ თუ არა ოჯახის წევრი?</strong>
                            <Radio.Group className='mt8' onChange={onChange} value={value}>
                                <Radio value={true}>დიახ</Radio>
                                <Radio value={false}>არა</Radio>
                            </Radio.Group>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='mt24'>
                        <strong className='askingReason'>მიმართვის მიზეზი</strong>
                        <Select className='w100 mt8 askingReasonSelect' size='large' onChange={onChangeSelect}>
                            {AskingReason.map((a:any) =>
                                <Option value={a.id} key={a.id}>{a.descriptionGeo}</Option>
                            )}
                        </Select>
                    </Col>
                    <Row className='mt24 relative rowBackground' gutter={[24, 24]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className='columnFlex dividerReplace'>
                                <strong>ოჯახის საიდენტიფიკაციო კოდი </strong>
                                {askingReason == 2 || askingReason == 1 ? <Form.Item className='formItemsCommon'>
                                    <Input className='inputsCommon mt14' size='large' />
                                </Form.Item> : <span className='mt8'>0102022909</span>}
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className='columnFlex dividerReplace'>
                                <strong>განცხადების რეგისტრაციის თარიღი</strong>
                                <span className='mt8'>{today}</span>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className='columnFlex dividerReplace'>
                                <strong>განცხადების მიღების ტიპი</strong>
                                <span className='mt8'>ელექტრონული</span>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className='columnFlex dividerReplace'>
                                <strong>გასაცემელი</strong>
                                <span className='mt8'>სოციალური დახმარება</span>
                            </div>
                        </Col>
                    </Row>
                    {askingReason == 1 ? <div className='horizontal-center w100'>
                        <Button className='stepNext' onClick={sendRequest}>გადაგზავნა</Button>
                    </div>
                        : <></>}
                </Row>
            </Form>
        </div>
    )
}
