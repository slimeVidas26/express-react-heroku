import axios from 'axios'
import {React , useState , useEffect} from 'react'

export default function Posts() {
 
const [post, setpost] = useState(null)

useEffect(() => {
    axios.get('/posts')
    .then((response)=> setpost(response.data))
    .then((res)=> console.log(res))
}, [])


    return (
        <div>
           {JSON.stringify(post[0])}
        </div>
    )
}
