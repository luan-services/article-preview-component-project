import React, { useState } from 'react'
import ShareBtn from "../components/ShareBtn"
import iconFacebook from "../src/assets/images/icon-facebook.svg"
import iconPinterest from "../src/assets/images/icon-pinterest.svg"
import iconTwitter from "../src/assets/images/icon-twitter.svg"
import { motion, AnimatePresence } from "framer-motion";

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
        <div className={`bg-white flex flex-col rounded-lg max-w-88 shadow-lg md:flex-row md:max-w-158 lg:max-w-180 ${classes}`}>

            {cardImgSrc &&
                <div className="flex max-w-100 max-h-52 mb-6 md:mb-0 md:max-w-full md:max-h-full">
                    <img className="object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" src={cardImgSrc} alt="Product Image" />
                </div>
            }

            <div className="flex flex-col md:py-2">
            <div className="p-4 px-8 md:pb-0">



                {title &&
                    <div className="flex pb-2">
                        <span className="text-lg font-manrope-bold text-custom-dark-grayish-blue"> 
                            {title}
                        </span>
                    </div>
                }

                {desc &&
                    <div className="flex pb-6 md:pb-0">
                        <span className="text-sm text-custom-dark-blue"> 
                            {desc}
                        </span>
                    </div>
                }
            

            </div>

            <div className={`rounded-b-lg py-2 px-8 transition ${isOpen ? "bg-custom-dark-grayish-blue" : ""}
                md:relative md:bg-white `}>
                    {/* a posição relative em md é pro modal com posição absoluta ter a posição baseada nessa div em md
                        o bg-white em md é para a div que não sumiu continuar com o fundo branco em md */}

                {userImgSrc && userName && date &&
                    <div className={`w-full items-center min-h-14 md:flex ${isOpen ? "hidden" : "flex"}`}>

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


                
                    {isOpen && iconFacebook && iconTwitter && iconPinterest &&
                    <AnimatePresence>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} className="flex w-full items-center min-h-14 
                            md:absolute md:bg-custom-dark-grayish-blue md:bottom-18 md:w-60 md:justify-center md:rounded-lg md:shadow-lg md:-right-17">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-custom-grayish-blue text-custom-gray-500 font-manrope mr-1"> 
                                    S H A R E
                                </span>

                                <img className="flex w-5 hover:scale-110 transition hover:cursor-pointer active:scale-80" src={iconFacebook} alt="Card Image"></img>
                                <img className="flex w-5 hover:scale-110 transition hover:cursor-pointer active:scale-80" src={iconTwitter} alt="Card Image"></img>
                                <img className="flex w-5 hover:scale-110 transition hover:cursor-pointer active:scale-80" src={iconPinterest} alt="Card Image"></img>
                            </div>

                            <div className="flex ml-auto md:hidden">
                                <ShareBtn onClick={() => handleIsOpen()}></ShareBtn>
                            </div>
                            {/* triangulo */}
                                <div class="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-custom-dark-grayish-blue"></div>
                        </motion.div>
                    </AnimatePresence>
                    }
            </div>
            </div>

        </div>
    )
}

export default ArticleCard