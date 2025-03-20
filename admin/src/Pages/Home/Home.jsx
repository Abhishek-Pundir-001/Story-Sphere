import LoginPopUp from "../Login/Login"

function Home({currState,setCurrState }) {
    return (
       <div>
        {currState && <LoginPopUp setCurrState={setCurrState}/>}
       </div>
    )
}

export default Home