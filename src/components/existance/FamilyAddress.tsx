import React, { useEffect, useState } from 'react'
import './Existance.css'
import { Button, Col, Divider, Form, Input, Row, Select, message } from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { AddressByZIPCode, DistrictByZIPCode, GovermentByZIPCode, RegionTypes, VillagesByZIPCodeGoverment, ZIPcodes, citiesByZIPCode, resetAddress } from '../../redux/slices/existanceSlice'
import { filterOption } from '../../utils'
import { log } from 'console'

export const FamilyAddress = ({ current, steps, setCurrent, next, prev, form }: any) => {
    const dispatch = useAppDispatch()

    const [zipCode, setZipCode] = useState<any>();

    const city: any = useAppSelector(state => state.existance.city);
    const district: any = useAppSelector(state => state.existance.district);
    const goverment: any = useAppSelector(state => state.existance.goverment);
    const village: any = useAppSelector(state => state.existance.village);
    const regionName: any = useAppSelector(state => state.existance.regionName);
    const address: any = useAppSelector(state => state.existance.address);
    const RegionTypesList: any = useAppSelector(state => state.existance.RegionTypesList);

    useEffect(() => {
      console.log(form, 'formuse')
        form.getFieldValue('regionName')
      
    }, [form])
    
    const { Option } = Select

    const onFinish = (values: any) => {
        console.log(values, 'sda')
        next()
    };
    const onFinishFailed = (values: any) => {
        console.log(values, 'sda')
    };
    useEffect(() => {
        if (city) {
            if (city[1]) {
                form.setFieldValue('city', city[1].text)
            }
        }
    }, [city])

    useEffect(() => {
        if (district) {
            if (district[1]) {
                form.setFieldValue('district', district[1].value)
                dispatch(GovermentByZIPCode(district[1].value))
            }
        }
    }, [district])

    useEffect(() => {
        dispatch(RegionTypes())
    }, [])
    

    const getZipCode = (e: any) => {
        if (e.target.value.length == 4) {
            dispatch(citiesByZIPCode(e.target.value))
            dispatch(DistrictByZIPCode(e.target.value))
            dispatch(AddressByZIPCode(e.target.value))
        }
        form.resetFields(['city', 'district', 'goverment', 'village', 'address'])
        dispatch(resetAddress())
        setZipCode(e.target.value)
    }
    const changeGovernmentSelect = (e: any, d: any) => {
        dispatch(VillagesByZIPCodeGoverment({ zipCode, name: d.value }))
    }

    const changeRegion = (event:any,obj:any) => {
        form.setFieldValue('regionName', obj.children)
        
    }
    
    return (
        <div className='PersonInfoExistanceWrapper PersonInfoExistanceWrapperAddress'>
            <Form onFinishFailed={onFinishFailed} colon={false} labelAlign='left' onFinish={onFinish} form={form} name='FamilyAddress'>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <div className='PersonInfoExistanceTitle'>ინფორმაცია განმცხადებლის შესახებ</div>
                    </Col>
                </Row>
                <Divider className='dividerColor' />
                <Row gutter={[16, 24]}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='რეგიონი' name='region'>
                        <Select filterOption={filterOption} showSearch size='large' className='askingReasonSelect'  onChange={(value, options)=>changeRegion(value, options)}>
                                {RegionTypesList?.map((c: any) => <Option key={c.id} value={c.regionId}>{c.descriptionGeo}</Option>)}
                            </Select>
                        </Form.Item>

                        <Form.Item className='formItemsCommon' style={{display:'none'}} label='ტესტ' name='regionName'>
                                <Input className='inputsCommon' type='hidden' size='large' value='' />
                            </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='საფოსტო ინდექსი' name='zipCode'>
                            <Input className='inputsCommon' size='large' onChange={getZipCode} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='თვითმართველი ქალაქი' name='city'>
                            <Select  size='large' className='askingReasonSelect'>
                                {city?.map((c: any) => <Option value={c.text}>{c.text}</Option>)}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        {district?.length >= 2 ? <Form.Item className='formItemsCommon' label='მუნიციპალიტეტი' name='district'>
                            <Select className='askingReasonSelect' size='large'>
                                {district?.map((c: any) => <Option value={c.value}>{c.text}</Option> )}
                            </Select>
                        </Form.Item>
                            :
                            <Form.Item className='formItemsCommon' label='მუნიციპალიტეტი' name='district'>
                                <Input className='inputsCommon' size='large' />
                            </Form.Item>}
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        {goverment?.length >= 2 ? <Form.Item className='formItemsCommon' label='ადმინისტრაციული ერთეული' name='goverment'>
                            <Select className='askingReasonSelect' size='large' onChange={changeGovernmentSelect}>
                                {goverment?.map((c: any) => <Option value={c.text} key={c.value}>{c.text}</Option>)}
                            </Select>
                        </Form.Item> :
                            <Form.Item className='formItemsCommon' label='ადმინისტრაციული ერთეული' name='goverment'>
                                <Input className='inputsCommon' size='large' />
                            </Form.Item>}
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        {village?.length >= 2 ? <Form.Item className='formItemsCommon' label='სოფელი' name='village'>
                            <Select className='askingReasonSelect' size='large'>
                                {village?.map((c: any) => <Option value={c.text}>{c.text}</Option>)}
                            </Select>
                        </Form.Item> :
                            <Form.Item className='formItemsCommon' label='სოფელი' name='village'>
                                <Input className='inputsCommon' size='large' />
                            </Form.Item>}
                    </Col>
                
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        {address?.length >= 2 ? <Form.Item className='formItemsCommon' label='ქუჩა/კვარტალი/მიკრორაიონი' name='address'>
                            <Select className='askingReasonSelect' size='large' >
                                {address?.map((c: any) => <Option value={c.text}>{c.text}</Option>)}
                            </Select>
                        </Form.Item> :
                             <Form.Item className='formItemsCommon' label='ქუჩა/კვარტალი/მიკრორაიონი' name='address'>
                                <Input className='inputsCommon' size='large' />
                            </Form.Item>}
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='სახლის ნომერი' name='houseNumber'>
                            <Input className='inputsCommon' size='large' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='კორპუსი' name='building'>
                            <Input className='inputsCommon' size='large' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='ბინის ნომერი' name='apartment'>
                            <Input className='inputsCommon' size='large' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='ტელეფონი 1' name='phoneNumber1'>
                            <Input className='inputsCommon' size='large' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='ტელეფონი 2' name='phoneNumber2'>
                            <Input className='inputsCommon' size='large' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item className='formItemsCommon' label='ელ.ფოსტა' name='mail'>
                            <Input className='inputsCommon' size='large' />
                        </Form.Item>
                    </Col>
                    <div className='w100 horizontal-center mt80'>
                        {current < steps.length - 1 && (
                            <Form.Item className='widthOfSend'>
                                <Button htmlType='submit' className='stepNext'>
                                    შემდეგი
                                </Button>
                            </Form.Item>
                        )}
                        </div>
                </Row>
            </Form>
        </div>
    )
}
