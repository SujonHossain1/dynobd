import { compareSync } from 'bcryptjs';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineHome, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { BsCaretRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';




const ChangePassword = (props) => {
    const { register, handleSubmit, watch, reset, errors } = useForm();
    const { user } = useSelector(state => state.auth);

    const onSubmit = async (data, event) => {
        event.preventDefault();

        const res = await fetch(`http://localhost:4000/api/users/password-update/${user._id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();

        if (res.status === 200) {
            toast.success(resData.message);
            console.log(resData);
            reset({
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
            })
        } else {
            toast.error(resData.message);
        }

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

                    <div className="col-lg-7 offset-lg-3 g-3 p-5 row shadow-sm ">
                        <div className="input__group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Old Password"
                                name="oldPassword"
                                ref={register({
                                    required: "Old Password is required",
                                })}
                            />
                            <AiOutlineUser className="input__icon" />
                            {errors.oldPasssword && <span className="bg-danger text-white px-2 rounded">{errors.oldPasssword.message}</span>}
                        </div>
                        <div className="input__group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="New Password"
                                name="newPassword"
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
                                type="password"
                                className="form-control"
                                placeholder="Confirm New Password"
                                name="confirmPassword"
                                ref={register({
                                    validate: (value) => value === watch('newPassword')
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
