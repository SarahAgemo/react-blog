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
        src="https://lh3.googleusercontent.com/a/ACg8ocJ3hPzbWs7UBJTedI6bZ2YpFoQYwMqscUf3WpJ23gQDhXeh16k=s432-c-no" alt="" />
        <i className=" topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default TopBar
