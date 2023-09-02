import BlogList from "./Bloglist";
import useFetch from "./usefetch";


const Home = () => {

    const {data:blogs,ispending,error} =useFetch('http://localhost:8000/blogs');
    
    

    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {ispending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs" />} 
        </div>
     );
}
 
export default Home;