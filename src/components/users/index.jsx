import React from 'react'
import UserItem from './UserItem';
import PropTypes from 'prop-types'

class Users extends React.Component {

    componentDidMount( ) {
        this.props.fetchUsers()
    }

    render() {
        const { users } = this.props

        return (
            <section className="users" id="users">
            <div className="container">
                <div className="users__block">
                    <div className="row">
                        <div className="col">
                            <div className="users__header title">
                                <h3>
                                    Our cheerful users
                                </h3>
                                <p>
                                    Attention! Sorting users by registration date
                                </p>
                            </div>
                        </div>
                    </div>
    
                    <div className="row">
                        
                        {
                            users.users.map(user => <UserItem key={user.id} user={user}/> )
                        }

                        
                        
                    </div>
    
                    <div className="row">
                        <div className="col">
                            <div className={`users__button btn-secondary ${users.links.next_url ? '' : 'disabled'}`}>
                                <button onClick={() => this.props.loadMoreUsers()}>
                                    Show more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
        )
    }
};

Users.propTypes = {
    users: PropTypes.object,
    loadMoreUsers: PropTypes.func.isRequired
}

Users.defaultProps = {
    users: {}
}


export default Users