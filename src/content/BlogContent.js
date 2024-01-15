import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import contentDAta from '../contentData/contentData';

 function BlogContent() {
    // const params = useParams();
    const {title} = useParams();
    // console.log(useParams());
    const [bodyData,setBodyData] = useState("");
    useEffect(()=>{
        const BlogDataHere = contentDAta.filter((blogs)=> blogs.title===title);
        // BlogDataHere[0].des;
         setBodyData(BlogDataHere[0].des);
        // console.log(BlogDataHere)
    },[]);
  return (
    <div>
        {bodyData}
    </div>
  );
}
export default BlogContent;
