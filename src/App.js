import { Fragment } from "react";
import { MyIntro } from './components/MyIntro'
import {MyMbti} from './components/MyMbti'
import { LikeImg } from './components/LikeImg.js'
import { MyName } from './components/MyName.js'
import './css.css'


function App() {
  return ( 
  <> 
    <MyIntro  /> 
    <MyMbti mbti = "INFP"/>
    <MyName name = "황수정"/>
    <LikeImg num = {1} />
  </> 
  );
}
export default App;