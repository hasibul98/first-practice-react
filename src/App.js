import logo from './logo.svg';
import React from 'react';
import './App.css';
import MenuBar from './functionComponent/menuBar';
import ClassTestio from './component/ClassTest';
import PropsComponent from './functionComponent/propsComponent';
import {Routes,Route,Navigate } from 'react-router-dom';
import {homePage,personPage}  from './allrouterpage';
import Data from './data.json';
import { Helmet } from 'react-helmet';
import InnerCowContent from './content/InnerCowContent';
import CowContent from './content/cowContent';
import ContentDesign from './content/ContentDesign';
import contentDAta from './contentData/contentData';
import BlogContent from './content/BlogContent';


// const homePage = "/";
// const personPage = "/person";
function App() {
  return (
    <div>
      <MenuBar />
     
     <Routes>
      <Route path={homePage} element={
        <>
        <Helmet>
                <title>Home Page</title>
        </Helmet>
        <h1>i am a man</h1>
        </> 
      
      } />
      
      {/* <Route path={personPage} element={
      <>
      <Helmet>
              <title>person page</title>
      </Helmet>
        <Person />
      </> 
      } /> */}

      <Route path={personPage} element={<Person />} />
      <Route path='/classtest' element={
        <>
        <Helmet>
          <title>classtest</title>
        </Helmet>
          <ClassTestio /> 
        </>
      
      } />
      {/* <Route path='/classtest' element={<ClassTestio />}>
           <Helmet>
            <title>class test</title>
          </Helmet>
      </Route> */}
      <Route path="/cowcontent" element={<InnerCowContent />} />
      <Route path="/allcontentdata" element={<AllContentData />} />
      <Route path='/allcontentdata/:title' element={<BlogContent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      
     </Routes>
     
      

    </div>
    
  );
}
function Person(){

  return(
    <div>
      <Helmet><title>person</title></Helmet>
      <DataTest />
       {/* <Routes> 
       <Route path='/' render={()=><h1>i am a man</h1>}/>      

       </Routes> */}
      
      <h1>Hello Man</h1>
      <Me />
      
      <PropsComponent name="rahim" age="25" />
      <h1>it is a personal function</h1>
      {
        contentDAta[0].des
      }
      <CowContent />
    </div>
  );
}
function Me(){
  return(
    <div>
      <h2>my name is emon</h2>
    </div>
  );
}
function NotFound(){
  let style= {
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
    height: "500px"
  };
  return(
    <div style={style}>
      this page is not found
    </div>
  );
}

function DataTest(){
  // console.log(Data);
  // console.log(Data[0].title)
  // console.log(Data[0].des)
  let DataInput = [];
 for(let x = 0; x < Data.length; x++){
   DataInput.push(<DataTrans title={Data[x].title} des={Data[x].des}  />)
 }
 console.log(DataInput);
  return(
    
    <div className='DataTrans'>
      
       {DataInput}
       {/* {DataInput} */}
       <DataTrans title= {DataInput[0].title} />
       <DataTrans title= {Data[0].title} />
       {/* {DataInput[0].title} */}
    </div>
  );
}
function DataTrans(props){
  return(
    <div className='toData'>
        <div>
          <h1>{props.title}</h1>
          <p>{props.des}</p>
      </div>
    </div>
  
  );
}
function AllContentData(){
  return(
    <div>
        <ContentDesign />
    </div>
  );
}
export default App;
