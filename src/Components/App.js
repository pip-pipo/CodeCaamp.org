import React from 'react'
import './Static/App.css'
import Navbar from './Navbar'
// import ImageUploade from './Uploade'
import Sidebar from './Sidebar'
import PhotoUpload from './PhotoUpload'
const App = () => {
    return (
        <div>
            <Navbar />
            <div className="App__midddle">
                <Sidebar />
                <div className="App__middle__box">
                    <PhotoUpload />
                    <PhotoUpload />
                    <PhotoUpload />
                    <PhotoUpload />

                </div>

            </div>
        </div>
    )
}

export default App
