import SideBar from '../../components/sidebar/SideBar'
import './Settings.css'

function Settings() {
  return (
    <div className='settings'>
       <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
            src="https://avatars.githubusercontent.com/u/160914323?v=4" 
            alt="" 
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa fa-user-circle" aria-hidden="true"></i>
            </label>
            <input type="file" id='fileInput' style={{display:'none'}} />  
          </div>
          <label>Username</label>
          <input type="text" placeholder='Sarah' />
          <label>Email</label>
          <input type="email" placeholder='sarah@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
       </div>
       <SideBar />
    </div>

  )
}

export default Settings
