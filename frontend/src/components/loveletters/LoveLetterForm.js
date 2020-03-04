import React from 'react'

const LoveLetterForm = ({ data, handleChange, handleSubmit }) => (
  <div className="columns">
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter card">
      <div className="field">
        <label className="label">title</label>
        <div className="control">
          <input
            className='input'
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={data ? data.title : ''}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className='input'
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={data ? data.image : ''}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Love Letter</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="how do you feel?"
            name="love_letter"
            onChange={handleChange}
            value={data ? data.love_letter : ''}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-warning is-fullwidth">spread love</button>
        </div>
      </div>
    </form>
  </div>
)

export default LoveLetterForm