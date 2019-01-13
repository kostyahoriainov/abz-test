import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user}) => 

    <div className="col-md-4 user">
        <div className="users__item">
            <div className="users__item-img">
                <img src={user.photo} alt={user.name} />
            </div>
            <div className="users__item-info">
                <h4>
                    {user.name}
                </h4>
                <p>
                    {user.position}
                </p>
                <p>
                    {user.email}
                </p>
                <p>
                    {user.phone}
                </p>
            </div>
        </div>
    </div>

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem