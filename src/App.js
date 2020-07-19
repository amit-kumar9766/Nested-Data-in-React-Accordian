
import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import "./App.css";

const data = [
  {
    text: "Local Disk C",
    is_expanded:false,
    comments: [
      {
        text: "Program Files",
        is_expanded:false,
        comments:[
          
          {
              text:"Windows NT",
              is_expanded:false,
           },
          {
            text: "Windows Mail",
            is_expanded:false
           },
          {
            text: " Windows Photo Viewer",
            is_expanded:false
            
          }    
      ]
      },
      {
        text: "Users",
        is_expanded:false,
        comments:[
          
          {
              text:"NIshant",
              is_expanded:false
           },
          {
            text: "Siddharth",
            is_expanded:false
           }
      ]
    },
    {
      text: "Windows",
      is_expanded:false,
      comments:[
        
        {
            text:"Boot",
            is_expanded:false
         },
        {
          text: "File Manager",
          is_expanded:false
         }
    ]
  }
  ]}
    ,
    {
      text: "Local Disk D",
      is_expanded:false,
      
      comments: [
        {
          text: "MY Personals",
          is_expanded:false,
          comments:[
            
            {
                text:"Resume.pdf",
                is_expanded:false,
                
             },
            {
              text: "MyPhoto.png",
              is_expanded:false,
              
             },
        ]
        },
        {
          text: "Projects",
          is_expanded:false,
          comments:[
            
            {
                text:"Calculator Application",
                is_expanded:false,
             },
            {
              text: "Notes Application",
              is_expanded:false,
              
             }
        ]
      },
      {
        text: "Office",
        is_expanded:false,
        comments:[
          
          {
              text:"Reports.docx",
              is_expanded:false,
           },
         
      ]
    }
    ]}
      ,
      {
        text: "Local Disk (:E)",
        is_expanded:false,
        comments: [
          {
            text: "Pictures",
            is_expanded:false,
            comments:[
              
              {
                  text:"Cat.png",
                  is_expanded:false,
               },
           
          ]
          },
          {
            text: "Documents",
            is_expanded:false,
            comments:[
              
              {
                  text:"ProgressReport.docx",
                  is_expanded:false,
               },
              {
                text: "DesignDoc.pdf",
                is_expanded:false,
               }
          ]
        },
        {
          text: "Study Materials",
          is_expanded:false,
          comments:[
            
            {
                text:"HTML.html",
                is_expanded:false,
             },
            {
              text: "Css.pdf",
              is_expanded:false,
             },
             {
              text: "JS.pdf",
              is_expanded:false,
             }
        ]
      }
      ]}
 
];

function CommentItem({ item }) {
  const [isExpanded, setIsExpanded] = useState(item.is_expanded);
  item.is_expanded=isExpanded
 
  return (
    <div className="comment">
    <div className="margin">
      <p onClick={() => setIsExpanded(!isExpanded)}>{item.text}</p>

      {/* <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "-" :  "+"}
        </button>
        onClick={click} */}
      </div>
       
      {isExpanded && (
        
        <Fragment >
           {/* <p>{item.text}</p> */}
        
          {item.comments && 
            item.comments.map((comment, index) => (
              <CommentItem key={index} item={comment}  />
            ))}
           

        </Fragment>
        
      )}
        

    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div><nav className="navbar navbar-light bg-info">
    <span className="navbar-brand mb-0  text-white ml-3" ><i class="fa fa-tree" aria-hidden="true"></i> Nested Data(Accordian)</span>
    </nav>
    <div className='container2 shadow' ></div>
    </div>
      {/* <h1>ACCORDIAN</h1> */}
      {data.map((comment, index) => (
        <CommentItem key={index} item={comment} />
      ))}
    </div>
  );
}

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
