import React ,{useState} from 'react';
import AuthContext from '../../store/auth-context';
import DemoOutput from '../DemoOutput/DemoOutput';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const authCtx = React.useContext(AuthContext);
  const [showPara , setShowPara] = useState(false);

  const toggleParagraph=()=>{
    setShowPara((prevshowPara)=>!prevshowPara);
  }
  return (
    <>
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button type="button" onClick={authCtx.onLogout}>Logout</button>
    </Card>
    <Card>
      <div>
        <h1>Hi, Hello</h1>
        {/* <DemoOutput show={showPara} /> */}
        <DemoOutput show={false} /> 
        {/* TO understand the react memo...the props are not changing but when component renders childern component also renders even if there no changes in props */}
        <Button onClick={toggleParagraph}>ToggleParagraph</Button>
      </div>
    </Card>
    </>
  );
};

export default Home;
