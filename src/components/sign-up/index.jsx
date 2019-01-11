import React from 'react'

class SignUp extends React.Component {

    state = {
        name: null,
        email: null,
        phone: null,
        position: null,
        photo: null
    }

    componentDidMount() {
        this.props.fetchPositions()
    }

    handleChange = ({target}) => {
        this.setState(() => ({
            ...this.state,
            [target.name]: target.value
        }))
    }

    render() {
        const { positions } = this.props
        return(
            <section className="sign-up" id="signUp">
            <div className="container">
                <div className="sign-up__block">
                    <div className="row sign-up__header">
                        <div className="col title">
                            <h3>
                                Register to get a work
                            </h3>
                            <p>
                                Attention! After successful registration and alert,
                                update the list of users in the block from the top
                            </p>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sign-up__input">
                                <label>
                                    Name
                                </label>
                                <input type="text" name="name" placeholder="Your name" onChange={this.handleChange}/>
                            </div>
                        </div>
    
                        <div className="col-md-4">
                            <div className="sign-up__input">
                                <label>
                                    Email
                                </label>
                                <input type="text" name="email" placeholder="Your email" onChange={this.handleChange} />
                            </div>
                        </div>
    
                        <div className="col-md-4">
                            <div className="sign-up__input">
                                <label>
                                    Phone
                                </label>
                                <input type="text" name="phone" placeholder="+38 (___) ___ __ __" onChange={this.handleChange} />
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="sign-up__select">
                                <select name="position" onChange={this.handleChange}>
                                    <option disabled> Choose a position </option>
                                    {
                                        positions.map(pos => <option value={pos.id} key={pos.name}>{pos.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="sign-up__file">
                                <input type="file" name="photo" onChange={this.handleChange} />
                            </div>
                        </div>
    
                    </div>
    
                    <div className="row sign-up__submit">
                        <div className="col btn-primary disabled">
                            <button >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        )
    }
}



export default SignUp