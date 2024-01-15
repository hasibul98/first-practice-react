import React from "react";

function PropsComponent(props){
    return(
        <div>
            <h2>Name: {props.name} Age:{props.age}</h2>
        </div>
    );
}
export default PropsComponent;