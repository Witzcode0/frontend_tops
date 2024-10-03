import React, { useState, useEffect } from 'react';
import './style.css';

function Posts(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => setPosts(data))
       .catch(error => console.error('Error:', error))
    });

    return (
        <div className='container'>
            {posts.map(post => (
                <div className='item' key={post.id}>
                    <h2>{post.title}</h2>
                    <hr />
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;



// function TodoList() {
//   const todos = [
//     { id: 1, text: 'Learn React' },
//     { id: 2, text: 'Build a Project' },
//     { id: 3, text: 'Master React' },
//   ];
  
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.text}</li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;
