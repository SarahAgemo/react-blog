import './Post.css'

function Post() {
  return (
    <div className='post'>
      <img
      className='postImg' 
      src="https://havingtime.com/wp-content/uploads/2021/08/How-to-Overcome-Limiting-Beliefs-That-Hold-You-Back-scaled.jpeg" 
      alt="" />

      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet 
        </span>
        <hr />

       <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis autem consequuntur assumenda, perferendis, quo repellendus, voluptatum quae nisi ex aperiam enim quia voluptatibus vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis autem consequuntur assumenda, perferendis, quo repellendus, voluptatum quae nisi ex aperiam enim quia voluptatibus vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis autem consequuntur assumenda, perferendis, quo repellendus, voluptatum quae nisi ex aperiam enim quia voluptatibus vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis autem consequuntur assumenda, perferendis, quo repellendus, volupt
      </p>
    </div>
  )
}

export default Post
