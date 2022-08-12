import React from "react";
import styled from "styled-components";
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// import classes from "./UploadImageForm.module.css";

const SaySomethingInput = ({ photoText, setPhotoText }) => {
  
  const updateText = (e) => {
    console.log(e.target.value)
    setPhotoText(e.target.value)
    console.log(photoText)
  }


    return (
      
      <Wrapper>
        <Input onChange={updateText}
          placeholder="Say Something About this Photo"
        />
      </Wrapper>

    );

}

export default SaySomethingInput;


const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0 auto;
`;

const Input = styled.input.attrs({ type: "textarea" })`
  width: 500px;
  height: 500;
  margin: 200px;
  background: white;
  color: black;
  border: 1px solid grey;
  padding: 10px 20px;
  border-radius: 5px;
  position: relative;
  display: grid;
  justify-self: center;
  &:focus {
    outline: 2px solid pink;
    border-radius: ${(props) => props.isTyping && "10px 10px 0px 0px"};
  `;