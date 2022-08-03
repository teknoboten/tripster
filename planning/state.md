
```jsx

//state when a user first logs in
state = {
  user: {userObj}, 
  trips: [arrOfTrips], 
  trip: null //<- this gets set when a trip is 'selected',
  images: null //<- is set when a trip is selected
}

//state when a user clicks on a trip 
state = {
  user: {userObj}, 
  trips: [arrOfTripObjs], 
  trip: id 
  images: [arrOfImgs]
}

//state when a user adds a photo 
state = {
  user: {userObj}, 
  trips: [arrOfTripObjs], 
  trip: id 
  images: [arrOfImgs],
  image: null,
  mode: 'addNewPost'
}

//state after a user clicks on an images 'edit' button
state = {
  user: {userObj}, 
  trips: [arrOfTripObjs], 
  trip: id 
  images: [arrOfImgs],
  image: id, 
  mode: 'edit'
}


//state when a user clicks on an image
state = {
  user: {userObj}, 
  trips: [arrOfTripObjs], 
  trip: id 
  images: [arrOfImgs],
  image: id,
  mode: 'showImage'
}


```
