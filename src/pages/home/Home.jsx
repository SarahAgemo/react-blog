import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './Home.css'


function Home() {
  return (
  <>
    <Header />
      
    <div className='home'>
       <Posts />
       <SideBar />
    </div>
  </>  
  )
}

export default Home
