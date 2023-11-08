import { BookOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, Row, Steps, message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { LANDING_PAGE } from '../../router/paths'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import './AgreeForm.css'
export const AgreeForm = ({ onAgree }: any) => {
    const navigate = useNavigate()

    const [iGotAcquaintedChecked, setIGotAcquaintedChecked] = useState<any>(false);
    const [agree, setAgree] = useState<any>(false);

    const handleAgree = () => {
        onAgree(true)
    };
    const cancelClick = () => {
        navigate(LANDING_PAGE);
    };
    const handleCheckChange1 = (e: CheckboxChangeEvent) => {
        setIGotAcquaintedChecked(e.target.checked);
    };
    const handleCheckChange2 = (e: CheckboxChangeEvent) => {
        setAgree(e.target.checked);
    };
    return (
        <div>
            <div className="registerBlock agreeFormWrapper" id="bechdva">
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={24}
                    className="colForRules"
                >
                    <BookOutlined className='rulesAnotherIcon' />
                    <div className="rulesTextPension">
                        <div>

                            <div className="rulesTitle"> წესები და პირობები</div>
                            <Steps
                                progressDot
                                current={-1}
                                direction="vertical"
                                items={[
                                    {
                                        title: <div className="rulesTitle2">გავეცანი <br /> ოჯახის მოვალეობანი</div>,
                                        description: <div className="rulesStyles">
                                            განაცხადის შევსება და სააგენტოში ჩაბარება ადასტურებს, რომ ოჯახი თანახმაა: <br />
                                            მონაცემთა ბაზაში რეგისტრაციის მიზნით დღე-ღამის განსაზღვრულ პერიოდში (დილის 8:00 საათიდან საღამოს 10:00 საათამდე) დაუბრკოლებლად შეუშვას სააგენტოს უფლებამოსილი პირი თავის საცხოვრებელ ბინაში, მისცეს მას საშუალება სრულად დაათვალიეროს ოჯახის მიერ დაკავებული საცხოვრებელი ფართობი თუ საერთო სარგებლობის სათავსოები, შეამოწმოს ყოფითი პირობები; <br />
                                            ობიექტური პასუხები გასცეს უფლებამოსილი პირის შეკითხვებს და არ დაამახინჯოს ფაქტები, მოთხოვნისამებრ წარადგინოს საჭირო დოკუმენტები, ხელი მოაწეროს გამოკითხვის შედეგად შევსებულ დოკუმენტს, განსხვავებული აზრის არსებობისას დააფიქსიროს საკუთარი შენიშვნები; <br />
                                            სააგენტომ ნებისმიერი წყაროდან მოიპოვოს საჭირო ინფორმაცია, რომელიც უკავშირდება ოჯახის ან მისი ცალკეული წევრ(ებ)ის იდენტიფიკაციას, ფინანსურ და ქონებრივ მდგომარეობას, პერსონალურ და სხვა მონაცემებს, რაც უკავშირდება მონაცემთა ბაზაში რეგისტრაციას; <br />
                                            ოჯახის მუდმივი საცხოვრებელი ადგილის, დემოგრაფიული (ოჯახის წევრთა რაოდენობის გაზრდა ან შემცირება) ან სოციალურ-ეკონომიკური მდგომარეობის შეცვლის შესახებ აცნობოს სააგენტოს ამ ცვლილებიდან ერთი თვის ვადაში; <br />
                                            მიეცეთ მოპოვებული ინფორმაცია სხვა სოციალური დახმარების დამნიშვნელ დაწესებულებებსა და ორგანიზაციებს, რაც მიმართული იქნება მათი სოციალურ-ეკონომიკური მდგომარეობის გაუმჯობესებისაკენ; <br />
                                            სოციალური დახმარების დანიშვნის ან სახელმწიფოს მიერ დადგენილი სხვა შეღავათებით სარგებლობის უფლების მოპოვების შემთხვევაში, ოჯახის მიერ სოციალური დახმარების (შეღავათის ან სხვა სახის სარგებლის) მიღების თაობაზე ინფორმაცია გახდეს საჯარო.
                                        </div>,
                                    },
                                    {
                                        title: <div className="rulesTitle2">
                                            ოჯახს უფლება
                                        </div>,
                                        description: <div className="rulesStyles">
                                            გაეცნოს მონაცემთა ბაზაში მის შესახებ არსებულ ინფორმაციას; <br />
                                            მოითხოვოს მის შესახებ არსებულ მონაცემებში ცვლილებების (შესწორებების) შეტანა;<br />
                                            მოითხოვოს ამონაწერი მონაცემთა ბაზიდან;<br />
                                            ისარგებლოს კანონმდებლობით გათვალისწინებული სხვა უფლებებით.
                                        </div>
                                    },
                                    {
                                        title: <div className="rulesTitle2">
                                            ვადასტურებ
                                        </div>,
                                        description:
                                            <div className="rulesStyles">
                                                საქართველოს მთავრობის 2010 წლის 24 აპრილის №126 დადგენილებით განსაზღვრულ პირობებს სოციალურად დაუცველი ოჯახების მონაცემთა ერთიან ბაზაში რეგისტრაციის, რეგისტრაციის გაუქმების ან განმეორებითი გადამოწმების შესახებ და ვიღებ ვალდებულებას მათ განუხრელ შესრულებაზე, აგრეთვე, განცხადებაში მითითებული ოჯახის მონაცემების სისწორეზე, რასაც ვადასტურებ ჩემი ხელმოწერით
                                            </div>
                                    }
                                ]}
                            />
                            <br />
                            <div className="rulesStyles">
                                <Row>
                                    <Col>
                                        <Checkbox
                                            className="checkBoxText"
                                            onChange={handleCheckChange1}
                                        >
                                            გავეცანი
                                        </Checkbox>
                                        <Checkbox
                                            className="checkBoxText mt14"
                                            onChange={handleCheckChange2}
                                        >
                                            ვადასტურებ
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <Row gutter={20}>
                            <Col>
                                {' '}
                                <Button className="rulesBtnBack" onClick={cancelClick}>
                                    {/* <RollbackOutlined />  */}
                                    უკან დაბრუნება{' '}
                                </Button>
                            </Col>
                            {iGotAcquaintedChecked === true &&
                                agree === true &&
                                (
                                    <Col>
                                        <Button className="rulesBtn" onClick={handleAgree}>
                                            თანხმობა{' '}
                                        </Button>
                                    </Col>
                                )}
                        </Row>
                    </div>
                </Col>
            </div>
        </div>
    )
}
