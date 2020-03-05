import React from 'react'
//import ImageUpload from '../ImageUpload'
//import Select from 'react-select'

const UserForm = ({ data, handleChange, handleDelete, handleSubmit, errors }) => {

  // const prePopulateArray = data.skills.map(skill => {
  //   return { value: skill, label: skill }
  // })

  return (
    <section className="user-section">
      <form onSubmit={handleSubmit} className="user-container">
        <div className="user-info">
          <h2 className="title">edit profile</h2>
          <div className="field">
            <label className="label">username</label>
            <div className="control">
              <input
                className={`input is-rounded ${errors.name ? 'is-danger' : ''}`}
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={data.username}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">first name</label>
            <div className="control">
              <input
                className={`input is-rounded ${errors.password ? 'is-danger' : ''}`}
                type="first_name"
                placeholder="first name"
                name="first_name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">last name</label>
            <div className="control">
              <input
                className={`input is-rounded ${errors.password ? 'is-danger' : ''}`}
                type="last_name"
                placeholder="last name"
                name="last_name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">city</label>
            <div className="control">
              <input
                placeholder="City"
                name="location_city"
                value={data.location_city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">about me</label>
            <div className="control">
              <input
                className={`input is-rounded ${errors.password ? 'is-danger' : ''}`}
                type="about_me"
                placeholder="about me"
                name="about_me"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">email</label>
            <div className="control">
              <input
                className={`input is-rounded ${errors.email ? 'is-danger' : ''}`}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">password</label>
            <div className="control">
              <input
                className={`input is-rounded ${errors.password ? 'is-danger' : ''}`}
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">password confirmation</label>
            <div className="control">
              <input
                className={`input is-rounded ${errors.passwordConfirmation ? 'is-danger' : ''}`}
                type="password"
                placeholder="password confirmation"
                name="password_confirmation"
                onChange={handleChange}
              />
            </div>
            {/* <div className="user-image">
          {
            data.image ?
              <ImageUpload
                handleChange={handleChange}
                fieldName="image"
                inputClassName="my-input-class"
              >
                <button onClick={ImageUpload} className="button is-danger">Image Upload</button>
              </ImageUpload>
              :
              <ImageUpload
                handleChange={handleChange}
                fieldName="image"
                inputClassName="my-input-class"
              >
                <button onClick={ImageUpload} className="button is-danger">Image Upload</button>
              </ImageUpload>
          } */}
          </div>
        </div>

        <button type="submit" className="button  is-rounded is-primary">save</button>
        <br />
        <button onClick={handleDelete} className="button is-rounded is-danger"> delete profile </button>
        {/* </div> */}
        <hr />
      </form>
    </section>
  )
}

export default UserForm