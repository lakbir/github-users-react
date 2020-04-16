import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

export class UserDetails extends Component {
    state = {
        user:{},
        repos:[]
    }

    componentWillMount(){
        const login = this.props.match.params.login;
        Axios.get(`https://api.github.com/users/${login}`)
             .then(rsp =>{
                 this.setState({
                     user:rsp.data
                 })
             })
        Axios.get(`https://api.github.com/users/${login}/repos`)
             .then(resp => {
                this.setState({
                    repos:resp.data
                })
             })
        
    }
    render() {
        const {user} = this.state;
        return (
            <div className="row">
                <div className="col-md-3">
                <div className="card mt-1">
                        <img className="card-img-top" src={user.avatar_url} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{user.name}</h4>
                            <p className="card-text">{user.login}</p>
                            <p className="card-text"><i className="fa fa-user mx-2"></i>{user.company}</p>
                            <p className="card-text"><i className="fa fa-map-marker mx-2"></i>{user.location}</p>
                        </div>
                        </div>
                </div>
                <div className="col-md-9">


                <section id="tabs" className="project-tab">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Overview</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Repositories</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                       
                            <div className="row">
                               <div className="col-lg-6 my-3">
                                    <div className="card bg-success">
                                        <div className="card-body">
                                            <div className="d-flex no-block">
                                                <div className="m-r-20 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/admin-templates/admin-pro/assets/images/icon/income-w.png"></img>
                                                </div>
                                                <div className="align-self-center mx-4">
                                                    <h6 className="text-white m-t-10 m-b-0">Followers</h6>
                                                    <h2 className="m-t-0 text-white">{user.followers}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-lg-6 my-3">
                                    <div className="card bg-warning">
                                        <div className="card-body">
                                            <div className="d-flex no-block">
                                                <div className="m-r-20 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/admin-templates/admin-pro/assets/images/icon/income-w.png"></img>
                                                </div>
                                                <div className="align-self-center mx-4">
                                                    <h6 className="text-white m-t-10 m-b-0">Repositories</h6>
                                                    <h2 className="m-t-0 text-white">{user.public_repos}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-lg-6 my-3">
                                    <div className="card bg-primary">
                                        <div className="card-body">
                                            <div className="d-flex no-block">
                                                <div className="m-r-20 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/admin-templates/admin-pro/assets/images/icon/income-w.png"></img>
                                                </div>
                                                <div className="align-self-center mx-4">
                                                    <h6 className="text-white m-t-10 m-b-0">Following</h6>
                                                    <h2 className="m-t-0 text-white">{user.following}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-lg-6 my-3">
                                    <div className="card bg-info">
                                        <div className="card-body">
                                            <div className="d-flex no-block">
                                                <div className="m-r-20 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/admin-templates/admin-pro/assets/images/icon/income-w.png"></img>
                                                </div>
                                                <div className="align-self-center mx-4">
                                                    <h6 className="text-white m-t-10 m-b-0">Public Gists</h6>
                                                    <h2 className="m-t-0 text-white">{user.public_gists}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </div>


                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        
                            <div class="row">
                                {this.state.repos.map(repo=>(
                                    <div class="col-sm-12 my-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{repo.name}</h5>
                                            <p class="card-text">{repo.description}</p>
                                            <a href={repo.html_url} target='_blank' class="btn btn-primary btn-sm float-right">Show in github</a>
                                            <span class="badge badge-primary mx-2" title="Language">{repo.language}</span>
                                            <span class="badge badge-success mx-2" title="Created">{repo.created_at.substring(0, 10)}</span>
                                            <span class="badge badge-warning mx-2" title="Updated">{repo.updated_at.substring(0, 10)}</span>
                                        </div>
                                    </div>
                                    </div>
                                    ))}
                            </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


                </div>
            </div>
        )
    }
}

export default UserDetails
