import React, {useState, useEffect} from 'react';
import axios from 'axios';

const getData = async () => {
    try {
      const x = await axios.get('https://www.reddit.com/r/reactjs.json');
      console.log(x);
    //   return x;
    }
    catch (error) {
      return error;
    }
  };
function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        getData()
    }, []);
    return (
        <div className="Posts">
        <h1>Subreddit</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </div>
    );
}




export default Posts;
