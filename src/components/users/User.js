import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class User extends Component {
    
    render() {
        const { avatar_url, login, repos_url, html_url } = this.props.user;
        return (
            <div>
                        <div className="card mt-1">
                        <img className="card-img-top" src={avatar_url} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{login}</h4>
                            <p className="card-text">
                                <Link to={'/users/'+login} className="btn btn-success btn-sm">Show More</Link>
                                <Link to={'/users-details/'+login} className="btn btn-primary btn-sm float-right">Show More</Link>
                            </p>
                        </div>
                        </div>
            </div>
        )
    }
}

export default User
