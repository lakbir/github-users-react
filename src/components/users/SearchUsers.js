import React, { Component } from 'react'

export class SearchUsers extends Component {
    state = {
        search: ''
    }
    handleForm = (e) =>{
        this.setState({
            search: e.target.value
        })
    }

    searchUsers = (e) =>{
        e.preventDefault();
        this.props.getUserSearch(this.state.search);
    }
    render() {
        const {search} = this.state;
        return (
            <div>
                <form onSubmit={this.searchUsers}>
                <div className="form-row my-2 mx-2">
                    <div className="col-9">
                      <input type="text" onChange={this.handleForm} value={search} id="search" className="form-control" placeholder="Search..." />
                    </div>
                    <div className="col-3">
                    <button type="submit" className="btn btn-success btn-block">Search</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default SearchUsers
