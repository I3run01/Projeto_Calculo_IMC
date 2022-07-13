import * as S from './style'


type Props = {
    image: string
    title: string
    value: number
    subtittle: string

    
}

export const BMIICon = ({image, title, value, subtittle}: Props) => {

    return (
        <S.BMIIcon>
            <div><img src={image} alt="" /></div> 
            <h1>{title}</h1>
            <h2>Your BMI is {value}kg/m²</h2>
            <h3>{subtittle}</h3>
            

            
        </S.BMIIcon>
    )
}