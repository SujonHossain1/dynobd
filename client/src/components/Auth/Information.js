import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Information = () => {
    const { user } = useSelector(state => state.auth);
    const { register, handleSubmit, errors } = useForm();
    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: 'male',
        birthday: '',
        profileImage: ''
    });

    useEffect(() => {
        fetch(`http://localhost:4000/api/users/user/${user._id}`)
            .then(res => res.json())
            .then(data => {
                const { firstname, lastname, email, phone, gender, birthday, image } = data;
                setProfile((profile) => ({
                    ...profile,
                    firstname,
                    lastname,
                    email,
                    phone,
                    gender: gender && gender,
                    birthday: birthday && birthday,
                    profileImage: image && image,
                }))
            })
            .catch(err => console.log(err));
    }, [user._id]);

    console.log('profile', profile);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setProfile((profile) => ({
            ...profile,
            [name]: value
        }))
    };

    const [image, setImage] = useState(null);
    const imageHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const onSubmit = async (data, event) => {
        event.preventDefault();

        const formData = new FormData();
        if (image) formData.append('image', image);
        for (const key of Object.keys(profile)) {
            formData.append(key, profile[key]);
        };

        const res = await fetch(`http://localhost:4000/api/users/profile-update/${user._id}`, {
            method: 'PATCH',
            body: formData
        });
        const resData = await res.json();

        if (res.status === 200) {
            toast.success(resData.message);
        } else {
            toast.error(resData.message);
        }

    }


    return (
        <div className="information">
            <div className="information__title">
                <h3>Personal Information </h3>
                <button className="btn btn-secondary btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"> Update Profile </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">First Name</label>
                                        <input
                                            name="firstname"
                                            onChange={inputHandler}
                                            type="text"
                                            className="form-control"
                                            defaultValue={profile.firstname}
                                            ref={register({
                                                required: 'First Name is required'
                                            })}
                                        />
                                        {errors.firstname && <span style={{ color: 'red' }}>{errors.firstname.message}</span>}
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Last Name</label>
                                        <input
                                            name="lastname"
                                            onChange={inputHandler}
                                            type="text"
                                            className="form-control"
                                            defaultValue={profile.lastname}
                                            ref={register({
                                                required: 'Last Name is required'
                                            })}
                                        />
                                        {errors.lastname && <span style={{ color: 'red' }}>{errors.lastname.message}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Phone Number</label>
                                        <input
                                            name="phone"
                                            onChange={inputHandler}
                                            type="text"
                                            className="form-control"
                                            defaultValue={profile.phone}
                                            ref={register({
                                                required: 'Phone is required'
                                            })}
                                        />
                                        {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Email Address</label>
                                        <input
                                            name="email"
                                            onChange={inputHandler}
                                            type="email"
                                            className="form-control"
                                            defaultValue={profile.email}
                                            ref={register({
                                                required: 'Email is required'
                                            })}
                                        />
                                        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Birthday</label>
                                        <input
                                            name="birthday"
                                            onChange={inputHandler}
                                            type="date"
                                            className="form-control"
                                            defaultValue={profile.birthday}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Gender</label>
                                        <br />
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="male" value="male" onChange={inputHandler} checked={profile.gender === 'male' ? true : false} />
                                            <label class="form-check-label" for="male">Male</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="famale" value="famale" onChange={inputHandler} checked={profile.gender === 'famale' ? true : false} />
                                            <label class="form-check-label" for="famale">Famale</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="other" value="others" onChange={inputHandler} checked={profile.gender === 'others' ? true : false} />
                                            <label class="form-check-label" for="other">Others</label>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Image  </label>
                                        <input onChange={imageHandler} accept=".png, .jpeg, .jpg" name="image" className="form-control" type="file" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="information__body">
                <div className="information__body_item">
                    <p>First Name:  </p>
                    <p> {profile.firstname ? `${profile.firstname}` : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Last Name: </p>
                    <p> {profile.lastname ? `${profile.lastname}` : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Contact Number: </p>
                    <p> {profile.phone ? profile.phone : 'N/A'}</p>
                </div>
                <div className="information__body_item">
                    <p>Email Address: </p>
                    <p>  {profile.email ? profile.email : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Gender: </p>
                    <p>  {profile.gender ? profile.gender : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Date of Birth: </p>
                    <p> {profile.birthday ? moment(profile.birthday).format("DD MMM YYYY") : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Member Since: </p>
                    <p>{user.createdAt ? moment(user.createdAt).format("DD MMM YYYY") : 'N/A'} </p>
                </div>
            </div>
        </div>
    );
};

export default Information;