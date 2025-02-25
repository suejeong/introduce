import paris1 from './../images/paris01.png'
import paris2 from './../images/paris02.png'
import paris3 from './../images/paris03.png' 

const PARIS_IMAGES = [
    paris1,
    paris2,
    paris3,
]

export const LikeImg = ( {num}) => {
    const src = PARIS_IMAGES[num-1]
    const alt = `파리 ${num}`
    return (
        <div>
            <h2>LikeImg</h2>
            <h2>내가 좋아하는 이미지들</h2>
            <img src = {src} alt = {alt} />
        </div>
    )
}