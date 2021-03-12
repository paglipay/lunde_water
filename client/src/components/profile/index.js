import React, { useState, useEffect } from 'react'
import DynamicQuestions from '../DynamicQuestions'

function Profile(props) {

    return (
        <div>
            <DynamicQuestions {...props} />     
        </div>
    )
}

export default Profile
