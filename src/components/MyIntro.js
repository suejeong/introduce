import { LikeImg } from './LikeImg.js'
import { MyName } from './MyName.js'

export const MyIntro = () => {
    return (
        <div>
            <h2>MyIntroduce</h2>
            <h3>저를 소개합니다</h3>
            <MyName name = "황수정"/>
            <LikeImg num = {1} />
        </div>
    )
}