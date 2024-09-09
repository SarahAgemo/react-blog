import './SideBar.css'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sideBarItem">
        <span>ABOUT ME</span>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocJ3hPzbWs7UBJTedI6bZ2YpFoQYwMqscUf3WpJ23gQDhXeh16k=s432-c-no" alt="" />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias reprehenderit sequi deleniti perferendis a cum, enim quae, quo incidunt voluptas nostrum accusamus ea rerum veniam modi porro at nesciunt provident.
      </div>

      <div className="sideBarItem">
        <span className='sideBarTitle' >CATEGORIES</span>
        <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Sport</li>
            <li className="sideBarListItem">Tech</li>
            <li className="sideBarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sideBarItem">
        <span className='sideBarTitle'>FOLLOW US</span>
        <div className="sideBarSocial">
        <i className="SideBarIcon fa-brands fa-facebook"></i>
        <i className="SideBarIcon fa-brands fa-square-x-twitter"></i>
        <i className="SideBarIcon fa-brands fa-linkedin"></i>
        <i className="SideBarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>  
    </div>
  )
}

export default SideBar
