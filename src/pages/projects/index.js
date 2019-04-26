import React from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projectAction'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from "react-router-dom";

class MainNotiFication extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h3>List</h3>
                    <button onClick={() => this.props.createProject('123123')}>ตกลง</button>
                    <ul>
                        {this.props.projects && this.props.projects.map((item, idx) =>
                            <div className="card mt-1" key={idx}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.content}</p>
                                    <Link to={`/project-detail/${item.id}`}>
                                        <button className="btn btn-primary">Project Detail</button>
                                    </Link>
                                </div>
                            </div>

                        )}
                    </ul>
                </div>

                <div className="col-6">
                    <h3>Notification</h3>
                </div>
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