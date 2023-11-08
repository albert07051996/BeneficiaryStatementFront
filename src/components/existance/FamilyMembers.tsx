import React, { useState, useEffect } from 'react'
import './Existance.css'
import { Divider, Row, Col, Form, Select, Input, Button, message, Space, DatePicker } from 'antd'
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../hooks'
import dayjs from 'dayjs'
import { validateDTO } from '../../types/UserDTO'
import { ValidatePersonInfo, ValidatePersonInfoFamilyMember, clearValidatePersonInfoSuccess, disableBtnsGlobal, setSuccess } from '../../redux/slices/existanceSlice'
import { FamilyCommunication } from './FamilyCommunication'

export const FamilyMembers = ({ current, steps, setCurrent, next, prev, form }: any) => {
    const dispatch = useAppDispatch();

    const isFamilyMember = useAppSelector(state => state.existance.isFamilyMember);
    const validatePersonInfoSuccess = useAppSelector(state => state.existance.validatePersonInfoSuccess);
    const validatePersonInfoSuccessFamilyMember = useAppSelector(state => state.existance.validatePersonInfoSuccessFamilyMember);
    const disableBtnsGlobalState: any = useAppSelector(state => state.existance.disableBtnsGlobal);

    const [validateInfoObj, setValidateInfoObj] = useState<validateDTO>({
        PrivateNumber: '',
        FirstName: '',
        LastName: '',
        BirthYear: ''
    });
    const [disableSyncBtns, setDisableSyncBtns] = useState<any>(disableBtnsGlobalState);

    const person = useAppSelector(state => state.statment.personInfo);
    console.log(validatePersonInfoSuccess, 'asdasd')
    const { Option } = Select
    const onFinish = (values: any) => {
        console.log(values, 'sda')
        next()
    };
    const onFinishFailed = (values: any) => {
        console.log(values, 'sda')
    };
    const addBtn = () => {
        dispatch(setSuccess(false))

    };
    const removeBtn = (key: any) => {
        dispatch(setSuccess(true))
        // dispatch(disableBtnsGlobal(validateInfoObj))
    };


    const syncPerson = (key: any) => {
        dispatch(ValidatePersonInfo(validateInfoObj))
        setDisableSyncBtns({ ...disableSyncBtns, [key]: false })

    };
    console.log(disableSyncBtns, 'dis')

    const syncFamilyMember = () => {
        console.log('gasagebi')

        dispatch(ValidatePersonInfoFamilyMember({
            PrivateNumber: person.privateNumber,
            FirstName: person.firstName,
            LastName: person.lastName,
            BirthYear: dayjs(person.birthDate).format('YYYY')
        }))
    };

    useEffect(() => {
        if (validatePersonInfoSuccess) {

            let a: any = Object.keys(disableSyncBtns).pop();
            setDisableSyncBtns({ ...disableSyncBtns, [a]: true })

            setValidateInfoObj({
                PrivateNumber: '',
                FirstName: '',
                LastName: '',
                BirthYear: ''
            })


            // dispatch(clearValidatePersonInfoSuccess())

        }

    }, [validatePersonInfoSuccess])

    useEffect(() => {
        if (Object.keys(disableSyncBtns).length != 0) {
            dispatch(disableBtnsGlobal(disableSyncBtns))
        }

    }, [disableSyncBtns])
    // useEffect(() => {
    //     if (!isFamilyMember && form.getFieldValue('users')?.length < 1) {
    //         dispatch(setSuccess(undefined))

    //     }

    // }, [disableSyncBtns, isFamilyMember])
    useEffect(() => {
        if (Object.keys(disableBtnsGlobalState).length == 0) {
            setDisableSyncBtns(disableBtnsGlobalState)
        }
    }, [disableBtnsGlobalState])


    console.log(disableSyncBtns, 'dsadasdasdasd')
    // useEffect(() => {
    //     setDisableSyncBtns({})

    // }, [isFamilyMember])
    useEffect(() => {
        form.setFieldsValue({
            pid: person.privateNumber,
            firsT_NAME: person.firstName,
            lasT_NAME: person.lastName,
            birtH_DATE: dayjs(person.birthDate, 'YYYY-MM-DD')

        })

    }, [disableSyncBtns])

    console.log(validatePersonInfoSuccess, 'validatePersonInfoSuccess')

    //  useEffect(() => {

    //     form.setFieldsValue(!isFamilyMember?{
    //         'users': [{
    //             pid: '', firsT_NAME: '', lasT_NAME: '',
    //             birtH_DATE:''
    //         }, ...form.getFieldValue('users')]
    //     }: [])


    // }, [])
    const MyDatePicker = (date: any, dateString: any) => {
        setValidateInfoObj({ ...validateInfoObj, BirthYear: dayjs(dateString).format('YYYY') })
    };
    console.log(validateInfoObj, 'ri/ojaxiswev')
    console.log(validatePersonInfoSuccess, 'ri/ojaxiswev')



    const familyMember = () => {
        return <Row gutter={[16, 24]} className='w100 mt24'>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <Form.Item
                    name='pid'
                    className={`formItemsCommon `}
                    label='პირადი ნომერი'
                >
                    <Input
                        className={`inputsCommon  `}
                        size='large'
                        disabled
                    />
                </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <Form.Item
                    name='firsT_NAME'
                    className={`formItemsCommon`}
                    label='სახელი'
                >
                    <Input className={`inputsCommon  `} size='large' disabled />
                </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <Form.Item
                    name='lasT_NAME'
                    className={`formItemsCommon`}
                    label='გვარი'
                >
                    <Input className={`inputsCommon`} size='large' disabled />
                </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <Form.Item
                    name='birtH_DATE'
                    className={`formItemsCommon`}
                    label="დაბადების თარიღი"
                >
                    <DatePicker disabled className={`inputsCommon  `} size='large' value={dayjs(person.birthDate, 'YYYY-MM-DD')} />
                </Form.Item>
            </Col>
            <Col className='vertical-end h65 ' xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <Button disabled={validatePersonInfoSuccessFamilyMember} onClick={syncFamilyMember}
                    className={`addFamilyBtnSync `} icon={<SyncOutlined className='syncIcon' />}>
                    პიროვნების გადამოწმება</Button>

            </Col>
        </Row>
    }

    return (
        <div className='PersonInfoExistanceWrapper PersonInfoExistanceWrapperAddress'>
            <Form requiredMark={false} onFinishFailed={onFinishFailed} colon={false} labelAlign='left' onFinish={onFinish} form={form} name='FamilyMembers' >
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <div className='PersonInfoExistanceTitle'>ოჯახის წევრები</div>
                    </Col >
                </Row>
                <Divider className='dividerColor mt34' />
                {isFamilyMember ? familyMember() : <></>}
                <Form.List
                    name="users"
                >
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row gutter={[16, 24]} className='w100 mt24'>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'pid']}
                                            rules={[{ required: true, message: 'პირადი ნომრის შეყვანა სავალდებულოა' }]}
                                            className={`formItemsCommon`}
                                            label='პირადი ნომერი'
                                        >
                                            <Input
                                                onChange={e => setValidateInfoObj({ ...validateInfoObj, PrivateNumber: e.target.value })}
                                                className={`inputsCommon ${disableSyncBtns[key] ? 'class' : ''} `}
                                                size='large'
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'firsT_NAME']}
                                            rules={[{ required: true, message: 'სახელის შეყვანა სავალდებულოა' }]}
                                            className={`formItemsCommon`}
                                            label='სახელი'
                                        >
                                            <Input className={`inputsCommon ${disableSyncBtns[key] ? 'class' : ''} `} size='large' onChange={e => setValidateInfoObj({ ...validateInfoObj, FirstName: e.target.value })} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'lasT_NAME']}
                                            rules={[{ required: true, message: 'გვარის შეყვანა სავალდებულოა' }]}
                                            className={`formItemsCommon`}
                                            label='გვარი'
                                        >
                                            <Input className={`inputsCommon ${disableSyncBtns[key] ? 'class' : ''} `} size='large' onChange={e => setValidateInfoObj({ ...validateInfoObj, LastName: e.target.value })} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'birtH_DATE']}
                                            rules={[
                                                { required: true, message: 'გთხოვთ შეიყვანოთ წელი-თვე-რიცხვი' },
                                            ]}
                                            className={`formItemsCommon`}
                                            label="დაბადების თარიღი"
                                        >
                                            <DatePicker className={`inputsCommon ${disableSyncBtns[key] ? 'class' : ''} `} size='large' onChange={MyDatePicker} />
                                        </Form.Item>
                                    </Col>
                                    <Col className='vertical-end h65 ' xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <Button disabled={disableSyncBtns[key] ? true: false} onClick={() => syncPerson(key)}
                                            className={`addFamilyBtnSync ${disableSyncBtns[key] ? 'class' : ''} `} icon={<SyncOutlined className='syncIcon' />}>
                                            პიროვნების გადამოწმება</Button>
                                        <Button
                                            onClick={() => remove(name)} className={`addFamilyBtn deleteFamilyBtn ml10 trueClassRemove  `}
                                            onMouseUp={() => removeBtn(key)}
                                            icon={<DeleteOutlined className='deleteIcon' />}
                                        >
                                            წაშლა
                                        </Button>
                                    </Col>
                                </Row>
                            ))}
                            <Row className='addbtnRow'>
                                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} onClick={addBtn}>
                                    <Form.Item className='mt24'>
                                        <Button disabled={validatePersonInfoSuccess != undefined ? !validatePersonInfoSuccess : undefined} className='addFamilyBtn' onMouseUp={() => add()} icon={<PlusCircleOutlined className='plusIcon' />}>დამატება</Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </>
                    )}
                </Form.List>
                <div className='w100 horizontal-center mt80'>
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()} className='stepBack'>
                            უკან დაბრუნება
                        </Button>
                    )}
                    {isFamilyMember ? current < steps.length - 1 && (
                        <Form.Item className='widthOfSend'>
                            <Button disabled={validatePersonInfoSuccess != undefined ? !validatePersonInfoSuccess : undefined} htmlType="submit" className='stepNext'>
                                შემდეგი
                            </Button>
                        </Form.Item>

                    ) : current < steps.length - 1 && (
                        <Form.Item className='widthOfSend'>
                            {form.getFieldValue('users')?.length < 1 ? <></> : <Button disabled={validatePersonInfoSuccess == undefined ? true : !validatePersonInfoSuccess} htmlType="submit" className='stepNext'>
                                შემდეგი
                            </Button>}
                        </Form.Item>

                    )}
                    {/* {}
                    {current < steps.length - 1 && (
                        <Form.Item className='widthOfSend'>
                            <Button disabled={validatePersonInfoSuccess != undefined ? !validatePersonInfoSuccess : undefined} htmlType="submit" className='stepNext'>
                                შემდეგი
                            </Button>
                        </Form.Item>

                    )} */}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    )
}
