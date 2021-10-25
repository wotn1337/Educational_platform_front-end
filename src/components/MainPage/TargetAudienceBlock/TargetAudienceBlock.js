import React from "react";
import s from './TargetAudienceBlock.module.css'
import Audience from "./Audience/Audience";
import teacher from '../../../assets/img/mainPage/targetAudience/teacher.png'
import parent from '../../../assets/img/mainPage/targetAudience/parent.png'
import child from '../../../assets/img/mainPage/targetAudience/child.png'

const TargetAudienceBlock = () => {
    return (
        <div className={s.targetBlock}>
            <div className={s.audience}>
                <Audience
                    image={child}
                    title={'для детей:'}
                    text={'Занимательные уроки, яркие иллюстрации и качественная озвучка'}
                />
                <Audience
                    image={parent}
                    title={'для родителей:'}
                    text={'Уверенность в качестве и соответствии стандартам всех материалов'}
                />
                <Audience
                    image={teacher}
                    title={'для учителей:'}
                    text={'Удобный и понятный интерфейс для создания урока'}
                />
            </div>
        </div>
    )
}


export default TargetAudienceBlock;