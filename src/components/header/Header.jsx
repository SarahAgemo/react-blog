import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' 
        src="https://i.pinimg.com/originals/28/4b/de/284bdec5a55774533deb5807673cdafe.jpg" alt="" />
    </div>
  )
}

export default Header
