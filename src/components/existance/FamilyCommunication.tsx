import React, { useState, useEffect } from 'react'
import './Existance.css'
import { Button, Col, Divider, Form, Input, Row, message, Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReregisterTypes, communicationTypes, createApplication } from '../../redux/slices/existanceSlice';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { log } from 'console';

export const FamilyCommunication = ({ current, steps, setCurrent, next, prev, form, onFinish, formData }: any) => {
    const dispatch = useAppDispatch();
    const [communiCationState, setCommuniCationState] = useState('');
    const [communiCationState1, setCommuniCationState1] = useState(null);
    const askingReason = useAppSelector(state => state.existance.askingReason)
    const communicationTypesList = useAppSelector(state => state.existance.communicationTypesList)
    const ReregisterTypesList = useAppSelector(state => state.existance.ReregisterTypesList)
    const isFamilyMember = useAppSelector(state => state.existance.isFamilyMember)
    const person = useAppSelector(state => state.statment.personInfo);

    const [showInput, setShowInput] = useState<any>({
        first: false,
        second: false
    });

    const [checkValue, setCheckValue] = useState<any>([]);
    const [checkValue1, setCheckValue1] = useState<any>(null);
    let createApplicationObj = {
        regioN_ID: formData.region,
        applicatioN_TYPE: askingReason,
        firsT_NAME: person.firstName,
        lasT_NAME: person.lastName,
        birtH_DATE: person.birthDate,
        pid: person.privateNumber,
        fid: '12312312312',
        phone: person.phoneNumber,
        familY_MEMBER: isFamilyMember,
        ziP_CODE: formData.zipCode,
        city: formData.city,
        region: formData.regionName,
        government: formData.goverment,
        village: formData.village,
        address: formData.address,
        addresS_NO: formData.houseNumber,
        homE_1: formData.building,
        homE_2: formData.apartment,
        phonE_1: formData.phoneNumber1,
        phonE_2: formData.phoneNumber2,
        email: formData.mail,
        communicatioN_TYPE: checkValue,
        communicatioN_TYPE_TEXT: communiCationState,
        reregisteR_TYPE: checkValue1,
        reregisteR_TYPE_TEXT: communiCationState1,
        familyMembers: formData.users
    }
    const sendRequest = () => {
        dispatch(createApplication(createApplicationObj));
    };
    useEffect(() => {
        dispatch(communicationTypes())
        dispatch(ReregisterTypes())
    }, [])
    const changeCheckBox = (e: CheckboxChangeEvent) => {
        setShowInput({ ...showInput, first: e.target.checked })
    };
    const changeCheckBox2 = (e: CheckboxChangeEvent) => {
        setShowInput({ ...showInput, second: e.target.checked })
    };
    const onFinishFailed = (values: any) => {
        console.log(values, 'sda')
    };
    const onChangeCheckboxGroup = (e: any) => {
        setCheckValue(e.target.value)
        setCommuniCationState(e.target.name)
    };
    const onChangeCheckboxGroup1 = (e: any) => {
        console.log('checked = ', e);
        setCheckValue1(e.target.value)
        setCommuniCationState1(e.target.name)
        console.log(communiCationState1, 'communiCationState1')
    };
    return (
        <div className='PersonInfoExistanceWrapper PersonInfoExistanceWrapperAddress'>
            <Form onFinishFailed={onFinishFailed} colon={false} labelAlign='left' onFinish={onFinish} form={form} name='FamilyAddress'>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <div className='PersonInfoExistanceTitle'>კომუნიკაციის შესაძლებლობა ოჯახის საკონტაქტო წევრთან</div>
                    </Col >
                </Row>
                <Divider className='dividerColor' />
                <Row gutter={[16, 24]}>
                    <Col className='mt95'>
                        <Form.Item className='formItemsCommon' name='checkbox1'>
                            {communicationTypesList.map((c: any) =>
                                <Checkbox.Group value={[checkValue]} name={c.descriptionGeo} style={{ width: '100%', flexWrap: 'wrap' }}  >
                                    <Col className='mt8' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                        <Checkbox onChange={onChangeCheckboxGroup} value={c.id} key={c.id}
                                            className='communicationsCheck'>
                                            {c.descriptionGeo}
                                        </Checkbox>
                                    </Col>

                                </Checkbox.Group>
                            )}
                        </Form.Item>
                    </Col>
                </Row>{askingReason == 2 ?
                    <>
                        <Row className='mt150'>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <div className='PersonInfoExistanceTitle'>განმეორებითი შეფასების მოთხოვნის მიზეზი</div>
                            </Col >
                        </Row>
                        <Divider className='dividerColor' />
                        <Row gutter={[24, 24]}>
                            <Col className='mt95 mb80'>
                                <Form.Item className='formItemsCommon' name='checkbox'>
                                    {ReregisterTypesList.map((c: any) =>
                                        <Checkbox.Group name={c.descriptionGeo} value={[checkValue1]} style={{ width: '100%', flexWrap: 'wrap' }}  >
                                            <Col className='mt8' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                                <Checkbox  onChange={onChangeCheckboxGroup1} value={c.id} key={c.id}
                                                    className='communicationsCheck'>
                                                    {c.descriptionGeo}
                                                </Checkbox>
                                            </Col>

                                        </Checkbox.Group>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                    </> : <></>
                }
                <div className='w100 horizontal-center mt140'>
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()} className='stepBack'>
                            უკან დაბრუნება
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Form.Item className='widthOfSend'>
                            <Button htmlType="submit" onClick={sendRequest} className='stepNext' >
                                გადაგზავნა
                            </Button>
                        </Form.Item>
                    )}
                </div>
            </Form>
        </div>
    )
}
