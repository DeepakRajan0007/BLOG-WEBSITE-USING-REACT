import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } = useParams();
    const{data:blog,error,ispending} =useFetch('http://localhost:8000/blogs/' + id);
    const history =useNavigate();
const handleclick =() =>{
     fetch('http://localhost:8000/blogs/' +blog.id,{
        method: 'DELETE'
     }).then(() =>{
       history('/')
     })
}

    return ( 
        <div className="blog-details">
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleclick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;