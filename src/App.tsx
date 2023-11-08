import './globalStyles.css';
import { Protected } from './Protected';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './hooks';
import { RouterList } from './router/Router';
import { PageFooter } from './components/footer/PageFooter';
import { Row, Col } from 'antd';
import { NewHeader } from './components/Header/NewHeader';
function App() {
  const appState = useSelector((state: any) => state.app);
  const dispatch = useAppDispatch();
  const person = useAppSelector(state => state.app.person);
  const user = useAppSelector(state => state.user.userData.user);

  if (
    window.location.href === 'http://localhost:3000/registration' ||
    window.location.href === 'http://localhost:3000/mobileUpdate' ||
    window.location.href === 'http://localhost:3000/passwordRecovery' ||
    window.location.href ===
    'https://dev-bnf-beneficiarystatement.moh.intra/registration' ||
    window.location.href ===
    'https://dev-bnf-beneficiarystatement.moh.intra/passwordRecovery' ||
    window.location.href ===
    'https://stateissuesbeneficiarytest.moh.gov.ge/registration' ||
    window.location.href ===
    'https://stateissuesbeneficiarytest.moh.gov.ge/mobileUpdate' ||
    window.location.href ===
    'https://stateissuesbeneficiarytest.moh.gov.ge/passwordRecovery'
  ) {
    return (
      <div className="App">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '80vh',
            alignItems: 'center',
          }}
        >
          <RouterList />
        </div>
      </div>
    );
  }

  return (
    <>
      <div >
        <Protected user={user}>
          <div style={{ backgroundColor: "#F7F8FC", minHeight: '92vh' }}>
            <NewHeader />
            <Row style={{ marginTop: '46px' }}>
              <Col span={1}></Col>
              <Col className="flex" span={22}>
              </Col>
            </Row>
            <Row >
              <Col span={1}></Col>
              <Col span={22}><RouterList /></Col>
              <Col span={1}></Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Protected>
        <PageFooter />
      </div>
    </>
  );
}

export default App;
