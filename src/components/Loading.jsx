import React from 'react'
import '../style/loading.css'
function Loading() {
    return (
        <div className="loading-screen">
            <div className="loader"></div>
            <p>Loading...</p>
        </div>
    );
}

export default Loading;