import React from "react";
import styled from "styled-components";
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// import classes from "./UploadImageForm.module.css";
import classes from "./SaySomething.module.css";

const SaySomethingInput = ({ photoText, setPhotoText }) => {

  const updateText = (e) => {
    console.log(e.target.value);
    setPhotoText(e.target.value);
    console.log(photoText);
  };


  return (

    <Wrapper>
      <Input onChange={updateText}
        placeholder="Tell us about this photo..."
        className={classes.inputText}
      />
    </Wrapper>

  );

};

export default SaySomethingInput;


const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 20px;
`;

const Input = styled.input.attrs({ type: "textarea" })`
  width: 500px;
  height: 500;
  margin: 5px;
  border: 1px solid white;
  background: white;
  color: grey;
  padding: 10px 20px;
  border-radius: 5px;
  position: relative;
  display: grid;
  justify-self: center;
  &:focus {
    border: 1px solid white;
    outline: none;
    color: black;
    border-radius: ${(props) => props.isTyping && "10px 10px 0px 0px"};
  `;