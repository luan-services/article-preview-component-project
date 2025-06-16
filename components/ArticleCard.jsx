import React, { useState } from 'react'
import ShareBtn from "../components/ShareBtn"
import iconFacebook from "../src/assets/images/icon-facebook.svg"
import iconPinterest from "../src/assets/images/icon-pinterest.svg"
import iconTwitter from "../src/assets/images/icon-twitter.svg"

const ArticleCard = ({cardImgSrc, userImgSrc, userName, date,  title, desc, classes}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
      if (!isOpen) {
        setIsOpen(true)
        console.log("open")
      }
      else {
        setIsOpen(false)
        console.log("closed")
      }
    }


    return (
        <div className={`bg-white rounded-lg max-w-88 shadow-lg ${classes}`}>

            {cardImgSrc &&
                <div className="flex max-w-100 max-h-52 mb-6">
                    <img className="object-cover rounded-t-lg" src={cardImgSrc} alt="Product Image" />
                </div>
            }





            <div className="flex flex-col p-4 px-8">



                {title &&
                    <div className="flex pb-2">
                        <span className="text-lg font-manrope-bold text-custom-dark-grayish-blue"> 
                            {title}
                        </span>
                    </div>
                }

                {desc &&
                    <div className="flex pb-6">
                        <span className="text-sm text-custom-dark-blue"> 
                            {desc}
                        </span>
                    </div>
                }
            

            </div>

            <div className={`flex flex-col rounded-b-lg py-2 px-8 transition duration-500 ${isOpen ? "bg-custom-dark-grayish-blue" : ""}`}>

                {!isOpen && userImgSrc && userName && date &&
                    <div className="flex w-full items-center min-h-14">

                        <img className="flex w-9 rounded-full" src={userImgSrc} alt="Card Image"></img>

                        <div className="flex flex-col ml-4">
                            <span className="text-sm text-custom-gray-500 font-manrope-bold text-custom-dark-grayish-blue"> 
                                {userName}
                            </span>
                            <span className="text-sm text-custom-grayish-blue"> 
                                {date}
                            </span>
                        </div>

                        <div className="flex ml-auto">
                            <ShareBtn onClick={() => handleIsOpen()}></ShareBtn>
                        </div>
                    </div>
                }


            
                {isOpen && userImgSrc && userName && date &&
                    <div className="flex w-full items-center min-h-14">


                        <div className="flex items-center gap-4">
                            <span className="text-sm text-custom-grayish-blue text-custom-gray-500 font-manrope mr-1"> 
                                S H A R E
                            </span>

                            <img className="flex w-5 hover:scale-110 transition hover:cursor-pointer active:scale-80" src={iconFacebook} alt="Card Image"></img>
                            <img className="flex w-5 hover:scale-110 transition hover:cursor-pointer active:scale-80" src={iconTwitter} alt="Card Image"></img>
                            <img className="flex w-5 hover:scale-110 transition hover:cursor-pointer active:scale-80" src={iconPinterest} alt="Card Image"></img>
                        </div>

                        <div className="flex ml-auto">
                            <ShareBtn onClick={() => handleIsOpen()}></ShareBtn>
                        </div>
                    </div>
                }

            </div>


        </div>
    )
}

export default ArticleCard