import React, { useState } from 'react';
import AppContext from './context/app.context'
import './App.scss';
import FirstStep from './pages/FirstStep'
import SecondStep from './pages/SecondStep'
import ThirdStep from './pages/ThirdStep'
import Header from './components/Header';
import './i18n/config'

const App = () => {
    const [steps, setSteps] = useState(3);
    const value = {steps, setSteps};

    const renderSteps = () => {
        switch (steps) {
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />
            default:
                return <FirstStep />
        }
    }

    return (
        <AppContext.Provider value={value}>
            <Header />
            <div className="container">
               {steps !== 3 &&  <div><h1 style={{marginTop: '20px'}}>Test Frontend Wheel Hub</h1> <div className="title-bar" /></div> }
               
                <div className="content">
                    {renderSteps()}
                </div>
            </div>

        </AppContext.Provider>
    )

}

export default App;
