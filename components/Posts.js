import React, {useState, useEffect} from 'react'
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        });
        return unsubscribe;
    }, [db])

    // const [posts, loading, error] = useCollection(
    //     db.collection('posts').orderBy('timestamp', 'desc')
    // )
        
    return (
        <div>
            {posts.map((post) => (
                <>
               { console.log(post.data().postImage)}

                <Post key={post.id}
                id={post.id}
                name={post.data().name}
                email={post.data().email}
                timestamp={post.data().timestamp}
                postImage={post.data().postImage}
                image={post.data().image}
                message={post.data().message}></Post>
                </>
            ))}
        </div>
    )
}

export default Posts
