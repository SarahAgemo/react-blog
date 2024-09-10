import './SinglePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img 
        src="https://th.bing.com/th/id/OIP._iT0FXL3k3H3ActQq6BX5gHaEK?rs=1&pid=ImgDetMain" 
        alt="" 
        className="singlePostImg" 
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit.
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i> 
              <i className="singlePostIcon fa-solid fa-trash"></i> 
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor' >Author: <b>Agemo</b> </span>
             <span className='singlePostDate'>1 hour ago </span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cumque autem reiciendis beatae cum ipsam nisi quasi facere esse laboriosam pariatur praesentium numquam temporibus mollitia. Quaerat molestias repellat sequi porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cumque autem reiciendis beatae cum ipsam nisi quasi facere esse laboriosam pariatur praesentium numquam temporibus mollitia. Quaerat molestias repellat sequi porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cumque autem reiciendis beatae cum ipsam nisi quasi facere esse laboriosam pariatur praesentium numquam temporibus mollitia. Quaerat molestias repellat sequi porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cumque autem reiciendis beatae cum ipsam nisi quasi facere esse laboriosam pariatur praesentium numquam temporibus mollitia. Quaerat molestias repellat sequi porro?
        </p>
      </div>
    </div>
  )
}
