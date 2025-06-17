import { cards } from "../objects/ArticleCard"
import ArticleCard from "./ArticleCard"

const CardContainer = () => {
    return (
        <div className="w-full flex flex-col xl:flex-row justify-center min-h-screen items-center gap-6 py-16 md:py-20 px-6 md:px-10">
            
            {cards.map((props, index) => {
                return (
                    <ArticleCard
                        key={index}
                        cardImgSrc={props.cardImgSrc} 
                        userImgSrc={props.userImgSrc} 
                        userName={props.userName} 
                        date={props.date} 
                        desc={props.desc}
                        title={props.title}
                        classes=""
                    />
                )
            })}
    
        </div>
    )
}

export default CardContainer
