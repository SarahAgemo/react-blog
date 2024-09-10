import './TopBar.css'

function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='topRight'>
        <img 
        className='topImg'
        src="https://avatars.githubusercontent.com/u/160914323?v=4" alt="" />
        <i className=" topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default TopBar
