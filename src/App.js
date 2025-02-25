import { Fragment } from "react";
import { MyIntro } from './components/MyIntro'
import {MyMbti} from './components/MyMbti'
import './css.css'


function App() {
  return ( 
  <> 
    <MyIntro  /> 
    <MyMbti mbti = "INFP"/>
  </> 
  );
}
export default App;