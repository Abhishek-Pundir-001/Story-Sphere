
import CreateStory from "../../Components/CreateStory/CreateStory";
import Header from "../../Components/Header/Header"
import About from "../../Components/About/About"
import StoriesList from "../../Components/DisplayStories/StoriesList";
import Pricing from "../../Components/Pricing/Pricing";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "../../Components/LoginPopup/LoginPopup";

function Home() {
    const [currState, setCurrState] = useState(false)
    return (
        <>
            {currState && <LoginPopUp currState={currState} setCurrState={setCurrState} />}
            <Header currState={currState} setCurrState={setCurrState} />
            <CreateStory />
            <About />
            <StoriesList />
            <Pricing />
            <GetInTouch />
            <Footer />
        </>

    )
}

export default Home;