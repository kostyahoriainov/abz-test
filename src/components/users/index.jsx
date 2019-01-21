import React from 'react'
import _orderBy from 'lodash/orderBy'
import PropTypes from 'prop-types';
import UserItem from './UserItem';

class Users extends React.Component {

    componentDidMount( ) {
        this.props.fetchInitialUsers()
    }

    sortUsers = (users) => _orderBy(users, 'registration_timestamp', 'desc')

    render() {
        const { users } = this.props
        const sortedUsers = this.sortUsers(users.users)
        return (
            <section className="users" id="users">
            <div className="container no-pad">
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
                            sortedUsers.map(user => <UserItem key={user.id} user={user}/> )
                        }                        
                        
                    </div>
    
                    <div className="row">
                        <div className="col">
                            <div className={`users__button btn-secondary ${users.links.next_url ? '' : 'none'}`}>
                                <button onClick={() =>  this.props.fetchUsers()}>
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
    fetchInitialUsers: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired
}

Users.defaultProps = {
    users: {}
}


export default Users