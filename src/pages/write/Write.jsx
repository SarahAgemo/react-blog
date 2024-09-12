import './Write.css'

 function Write() {
  return (
    <div className='write'>
      <img 
      className='writeImg'
      src="https://i.pinimg.com/474x/8f/25/83/8f25833567f6aeffdc8d23acf2f0d2ce.jpg" 
      alt="" />
      <form className="writeForm">
        <div className='writeFormGroup'>
            <label htmlFor="fileInput">
               <i className="writeIcon fa fa-plus" aria-hidden="true"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none" }}/>
            <input 
            type="text" 
            placeholder='Title' 
            className='writeInput' 
            autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea 
          placeholder='Tell your story...'
          type='text'
          className='writeInput writeText'
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write;
