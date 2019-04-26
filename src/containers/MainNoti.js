import React from 'react'
import { connect } from 'react-redux'
import { createProject } from '../actions/projectAction'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
class MainNotiFication extends React.Component {
    render() {
        return (
            <div>
                <h1>Notification</h1>
                <button onClick={() => this.props.createProject('123123')}>ตกลง</button>

                <ul>
                    {this.props.projects && this.props.projects.map((item, idx) => <li key={idx}>{item.title}</li>)}
                </ul>

            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        createProject: (project) => dispatch(createProject(project)),
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'projects'
    }])
)(MainNotiFication);