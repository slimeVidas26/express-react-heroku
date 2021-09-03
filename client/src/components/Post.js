import {React , useState , useEffect} from 'react'
import axios from 'axios'
import './Posts.css'

export default function Post() {

    const [posts, setposts] = useState(null)

useEffect(() => {
    axios.get('/posts')
   //.then((response)=> console.log(response.data))
   .then((res)=> setposts(res.data))
}, [])

    return (
         <div>
            {/* {JSON.stringify(post[0])} */}
            <ul>
            {posts && posts.map((post)=>{
               return <li className = "posts" key = {post.id}>
                  <span>User Id:</span>  {post.userId}<br/> 
                  <span>Title:</span> :{post.title}<br/>
                  <span>Body:</span>{post.body}<br/><br/><br/>
                      </li>
            })}
            </ul>
            
         </div>
    )
}
