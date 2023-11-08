import React, { useState, useEffect } from 'react'
import './Existance.css'
import { PersonInfoExistance } from './PersonInfoExistance'
import { Button, Col, Form, Row, Steps, message, theme } from 'antd'
import { FamilyAddress } from './FamilyAddress'
import { FamilyMembers } from './FamilyMembers'
import { FamilyCommunication } from './FamilyCommunication'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { AgreeForm } from './AgreeForm'
import { disableBtnsGlobalReset } from '../../redux/slices/existanceSlice'

export const Existance = () => {
    const [form] = Form.useForm()
    const dispatch = useAppDispatch()
    const askingReason = useAppSelector(state => state.existance.askingReason)

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [agree, setAgree] = useState(false);
    const [length, setlength] = useState<any>([]);
    const [formData, setFormData] = useState({});

    const next = () => {
        form.validateFields().then((values) => {
            setFormData({ ...formData, ...values });
            setCurrent(current + 1);
        });
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const onFinish = (values: any) => {
        form.validateFields().then((values) => {
            setFormData({ ...formData, ...values });
            console.log(formData);
        });
    };

    const steps = [
        {
            title: '1',
            className: 'stepMain',
            content: <FamilyAddress form={form} steps={length} current={current} setCurrent={setCurrent} next={next} prev={prev} />,
        },
        {
            title: '2',
            className: 'stepMain',
            content: <FamilyMembers form={form} steps={length} current={current} setCurrent={setCurrent} next={next} prev={prev} />,
        },
        {
            title: '3',
            className: 'stepMain step3',
            content: <FamilyCommunication onFinish={onFinish} form={form} steps={length} current={current} setCurrent={setCurrent} next={next} prev={prev} formData={formData} />,
        },
    ];
    useEffect(() => {
        setlength(steps)
        // dispatch(disableBtnsGlobalReset())
    }, [])

   
    const items = steps.map((item) => ({ key: item.title, title: item.title, className: item.className }));

    const contentStyle: React.CSSProperties = {
        width: '100%'
    };

    const onFinishFailed = (values: any) => {
        console.log(values, 'sda')
    };

    const onAgree = (value: boolean) => {
        setAgree(value)
    };
    const resetFields = () => {
        form.resetFields(['users'])
 
     };
    return (
        <div className='existanceMain'>
            {agree ?
                <>
                    <Steps current={current} items={items} />
                    <Row gutter={20} className='mt24'>
                        <Col xs={24} sm={19} md={10} lg={10} xl={10} xxl={10}> <PersonInfoExistance resetFields={resetFields} /></Col>
                        <Col xs={24} sm={19} md={14} lg={14} xl={14} xxl={14}>
                            {askingReason == 1 || askingReason == null ? <> </> : <div style={contentStyle}>{steps[current]?.content}
                            </div>}
                        </Col>
                    </Row>
                </>
                : <AgreeForm onAgree={onAgree} />
            }
        </div>
    )
}
