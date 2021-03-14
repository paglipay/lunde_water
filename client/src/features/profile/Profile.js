import React from 'react'
import { connect } from 'react-redux'
import ProfileDisplay from '../../components/profile'
import { homeObjOne, array_of_questions_arry, questions_keys } from './Data';

function Profile(props) {
    return (
        < ProfileDisplay {...props} 
        homeObjOne={homeObjOne} 
        array_of_questions_arry={array_of_questions_arry} 
        questions_keys={questions_keys} 
        // customerId="604292b444c6f014e89326ef"
        />
    )
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
