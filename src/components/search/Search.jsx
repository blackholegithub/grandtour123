import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCalendar,
    faArrowsUpDown,
    faChevronDown,
    faChevronUp,
    faCoins
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Search.scss"

const Search = () => {
    const [showSearchBtn, setShowSearchBtn] = useState(false)

    const handleShowBtn = ()=>{
        setShowSearchBtn(pre => !pre)
    }

    return (
        <div className="search__wrapper">
            <div className="video__poster">
                <iframe
                    src="https://www.youtube.com/embed/JPe2mwq96cw?si=AEBqasw3evUkxM0l&amp;controls=0&autoplay=1&mute=1&loop=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
            <div className="search__content__wrapper">
                <h1 >Where do you want to go?</h1>
                <p className="search__des">Trips, experiences, and places. All in one service. </p>
                <form className="search__input__wrapper container">
                    <div className="input__container"> <input type="text" placeholder="Destination, city" className="input__item"/>  <span>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="input__icon"
                        />
                    </span> </div>
                    <div className="input__container"> 
                        <select id="month" name="month " className="input__item">
                            <option value="0">any month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                        </select>
                     <span>
                        <FontAwesomeIcon
                            icon={faCalendar}
                            className="input__icon"
                        />
                    </span> </div>
                    <div className="input__container"> 
                        <select id="sort" name="sort " className="input__item">
                            <option value="0">sort by date</option>
                            <option value="1">price low to high</option>
                            <option value="2">price high to low</option>
                            <option value="3">sort by name</option>
                            <option value="4">sort by popularity</option>
                        </select>
                     <span>
                        <FontAwesomeIcon
                            icon={faArrowsUpDown}
                            className="input__icon"
                            
                        />
                    </span> </div>
                    <div className="input__container btn"> 
                    <div className="input__item search__btn "> search</div>  
                    </div>
                    <div className={`input__container ${!showSearchBtn && "search__hide"} `}> 
                        <select id="categories" name="categories " className="input__item">
                            <option value="0">all categories</option>
                            <option value="1">moutain</option>
                            <option value="2">rural</option>
                            <option value="3">snow & ice</option>
                            <option value="4">wildlife</option>
                        </select>
                     <span>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="input__icon"
                            
                        />
                    </span> </div>
                    <div className={`input__container ${!showSearchBtn && "search__hide"} `}> 
                        <select id="destinations" name="destinations " className="input__item">
                            <option value="0">any destinations</option>
                            <option value="1">tokyo</option>
                            <option value="2">seoul</option>
                            <option value="3">vietnam</option>
                        </select>
                     <span>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="input__icon"
                            
                        />
                    </span> </div>
                    <div className={`input__container ${!showSearchBtn && "search__hide"} `}> 
                    <input type="text" placeholder="Max budget ex.500" className="input__item"/> 
                     <span>
                        <FontAwesomeIcon
                            icon={faCoins}
                            className="input__icon"
                            
                        />
                    </span> 
                    </div>
                    
                    
                    

                </form>
                <div className="advanced__btn container" >
                    
                    <span onClick={handleShowBtn}>
                        <FontAwesomeIcon
                            icon={!showSearchBtn ? faChevronDown : faChevronUp}
                            className="icon"
                            
                        />
                    </span>
                    <span onClick={handleShowBtn}> Advanced Search</span>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Search
