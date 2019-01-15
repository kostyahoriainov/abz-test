import React from 'react'
import PropTypes from 'prop-types'

const DEFAULTSTATE = {
        data: {
            name: '',
            email: '',
            phone: '',
            position_id: '',
            photo: '',
        },
        error: {}
}

class SignUp extends React.Component {

    state = {
        ...DEFAULTSTATE
    }

    componentDidMount() {
        this.props.fetchPositions()
    }

    validate = (data) => {
        const error = {};
        if((data.name.length < 2) || (data.name.length > 60)) {
            error.name = "This field must be from 2 to 60 characters"
        } 
        if((data.email.length < 2) || (data.email.length > 100)) {
            error.email = "This field must be from 2 to 100 characters"
        }
        if((!data.phone) || (data.phone.match(/[+]{0,1}380([0-9]{9})/g) === null)) {
            error.phone = 'This field was filled incorrectly'
        }
        if((!data.position_id)) {
            error.position_id = "Please, select a position from the list"
        }
        if((!data.photo)) {
            error.photo = "Please, upload your photo"
        }

        return error
    }

    handleChange = ({target}) => {
        if (target.id === 'photo') {
            if (this.img.files[0].size > parseInt(this.img.attributes[1].value, 10)) {
                this.setState(({error}) => ({
                    error: {
                        ...error,
                        [target.id]: 'Max file size is 5Mbyte'
                    }
                }))
                return
            } else if (this.img.files[0].type === "image/png") {
                this.setState(({error}) => ({
                    error: {
                        ...error,
                        [target.id]: 'Type of the file must be JPG/JPEG'
                    }
                }))
                return
            }
        } 
        this.setState(() => ({
            data: {
                ...this.state.data,
                [target.id]: target.id === 'position_id' ? parseInt(target.value, 10) : target.value
            },
            error: {
                ...this.state.error,
                [target.id]: ''
            }
        }))
    }

    handleSumbit = e => {
        e.preventDefault()
        const error = this.validate(this.state.data)
        this.setState({error})
        if(Object.keys(error).length === 0) {

            const newData = new FormData ();

            newData.append('name', this.state.data.name);
            newData.append('email', this.state.data.email);
            newData.append('phone', this.state.data.phone);
            newData.append('position_id', this.state.data.position_id);
            newData.append('photo', this.img.files[0]);

            //this.props.postUser(newData)
            this.setState(DEFAULTSTATE)

        }
    }


    render() {
        const { positions } = this.props
        return(
            <section className="sign-up" id="signUp">
            <div className="container">
                <form className="sign-up__block" 
                        encType="multipart/form-data" 
                        method="post" 
                        onSubmit={this.handleSumbit}>
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
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input 
                                        type="text" 
                                        id="name" 
                                        placeholder="Your name" 
                                        value={this.state.data.name} 
                                        onChange={this.handleChange}
                                />

                                {
                                    this.state.error.name ? <span>{this.state.error.name}</span> : ''
                                }

                            </div>
                        </div>
    
                        <div className="col-md-4">
                            <div className="sign-up__input">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input 
                                        type="text" 
                                        id="email" 
                                        placeholder="Your email" 
                                        value={this.state.data.email} 
                                        onChange={this.handleChange} 
                                />

                                {
                                    this.state.error.email ? <span>{this.state.error.email}</span> : ''
                                }

                            </div>
                        </div>
    
                        <div className="col-md-4">
                            <div className="sign-up__input">
                                <label htmlFor="phone">
                                    Phone
                                </label>
                                <input 
                                        type="text" 
                                        id="phone" 
                                        placeholder="+38 (___) ___ __ __" 
                                        value={this.state.data.phone} 
                                        onChange={this.handleChange} 
                                />

                                {
                                    this.state.error.phone ? <span>{this.state.error.phone}</span> : ''
                                }
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="sign-up__select">
                                <select 
                                        id="position_id" 
                                        value={this.state.data.position_id} 
                                        onChange={this.handleChange}>

                                    <option disabled> Choose a position </option>
                                    {
                                        positions.map(pos => <option value={pos.id} key={pos.name}>{pos.name}</option>)
                                    }
                                </select>
                                {
                                    this.state.error.position_id ? <span>{this.state.error.position_id}</span> : ''
                                }
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="sign-up__file">
                                <input 
                                        type="file" 
                                        ref={img => {this.img = img}} 
                                        data-max-size="5000000" 
                                        id="photo" 
                                        accept="image/jpg" 
                                        onChange={this.handleChange} 
                                />

                                {
                                   this.state.error.photo ? <p className='error'>{this.state.error.photo}</p> : <p>{this.state.data.photo || 'Upload your photo'}</p> 
                                }
                                
                                <label htmlFor="photo">Upload</label>
                                <span>File format jpg up to 5MB, the minimum size of 70x70px</span>
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
                </form>
            </div>
        </section>
    
        )
    }
}

SignUp.propTypes = {
    positions: PropTypes.array,
    fetchPositions: PropTypes.func.isRequired
}

SignUp.defaultProps = {
    positions: []
}



export default SignUp