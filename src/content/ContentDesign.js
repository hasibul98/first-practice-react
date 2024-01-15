import React,{ useState } from 'react';
import contentDAta from '../contentData/contentData';
import '../App.css';
import { Link } from 'react-router-dom';
 function ContentDesign() {
  const [blogs,setBlogs] = useState(contentDAta);

  // console.log(blogs);
  // function abc(str,num){
  //   if(str.length>num){
  //     return str.slice(0, num)+ "..." ;
  //   }
  //   else{
  //     return str;
  //   }
  // }
  return (
    <div className='dataDesign'>
  
   {
        blogs.map(blog=>{
          const{imge,id,title,des} = blog;        
          return (
            <div className='innerData'>

          <div className='linkData'>
            <div>
             {imge}
            </div>
            <h2> <Link to={title}>{title}</Link> </h2>
            {/* <h2> <Link to={}>{title}</Link> </h2> */}
          </div>
            
        </div>
            );
        })
      }
   
      
        {/* <h1>it is content design</h1> */}
        {/* {contentDAta[1].title} */}
    </div>
  );
}
export default ContentDesign;
