import React from "react";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// import classes from "./UploadImageForm.module.css";

const LocationInputField = ({ coordinates, setCoordinates }) => {
  
  const location = useInput("");

    return (
      <Wrapper>
        <Input
          placeholder="Where was this photo taken?"
          {...location}
          isTyping={location.value !== ""}
        />
           {location.suggestions.length > 0 && (
        <SuggestionWrapper>
          {location.suggestions.map((suggestion, index) => {
            return (
              <Suggestion
                key={index}
                onClick={() => {
                  location.setValue(suggestion.place_name);
                  location.setSuggestions([]);
                  setCoordinates(suggestion.geometry.coordinates);
                  console.log("geometry:", suggestion.geometry);
                }}
              >
                {suggestion.place_name}
              </Suggestion>
            );
          })}
        </SuggestionWrapper>
      )}
      </Wrapper>
    );

}

export default LocationInputField;

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 400px;
  background: white;
  border: 1px solid white;
  margin: 5px
  color: grey;
  padding: 10px 20px;
  position: relative;
  display: grid;
  justify-self: center;
  &:focus {
    border: 1px solid white;
    outline: none;
  }
`;

const SuggestionWrapper = styled.div`
  background: white;
  position: absolute;
  width: 400px;
  padding: 10px 20px;
  border-radius: 0px 0px 10px 10px;
`;

const Suggestion = styled.p`
  cursor: pointer;
  max-width: 400px;
`;
