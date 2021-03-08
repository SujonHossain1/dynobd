import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineHome, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { BsCaretRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';




const ChangePassword = (props) => {
    const { register, handleSubmit, watch, reset, errors } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
    }

    return (
        <div className="changePassword">
            <div className="container">
                <div className="page__header">
                    <AiOutlineHome />
                    <Link to="/customer/dashboard">ACCOUNT</Link>
                    <BsCaretRight />
                    <Link to="#">CHANGE PASSWORD</Link>
                </div>
              
                <form className="row  mx-1 " onSubmit={handleSubmit(onSubmit)}>

                    <div className="col-lg-6 offset-lg-3 g-3 p-5 row shadow-sm ">
                        <div className="input__group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Old Passsword"
                                name="oldPasssword"
                                ref={register({
                                    required: "Old Password is required",
                                })}
                            />
                            <AiOutlineUser className="input__icon" />
                            {errors.oldPasssword && <span className="bg-danger text-white px-2 rounded">{errors.oldPasssword.message}</span>}
                        </div>
                        <div className="input__group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="New Password"
                                name="password"
                                ref={register({
                                    required: "New Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />
                            <AiOutlineLock className="input__icon" />
                            {errors.password && <span className="bg-danger text-white px-2 rounded">{errors.password.message}</span>}
                        </div>

                        <div className="input__group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Confirm New Password"
                                name="confirmPassword"
                                ref={register({
                                    validate: (value) => value === watch('password')
                                })}
                            />
                            <AiOutlineLock className="input__icon" />
                            {errors.confirmPassword && <span className="bg-danger text-white px-2 rounded">Passwords don't match.</span>}
                        </div>
                        <button className="btn btn-danger change_password__btn  col-12 py-2" type="submit">Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
