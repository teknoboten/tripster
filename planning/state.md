
```jsx

//state when a user first logs in
state = {
  user: {userObj}, 
  trips: [arrOfTrips], 
  trip: null //<- this gets set when a trip is 'selected',
  images: null //<- is set when a trip is selected
  mode: 'home'
}

//state when a user clicks on a trip 
state = {
  user: {userObj}, 
  trips: [arrOfTripObjs], 
  trip: id //<- this gets set when a trip is 'selected',
  images: [arrOfImgs] //<- is set when a trip is selected
  mode: 'viewTrip'
}

//state when a user adds a photo
state = {
  user: {userObj}, 
  trips: [arrOfTripObjs], 
  trip: id 
  images: [arrOfImgs]
  mode: 'addNewPost'
}

//state when a edits adds a photo
state = {
  user: {userObj}, 
  trips: [arrOfTripObjs], 
  trip: id 
  images: [arrOfImgs] //<- is set when a trip is selected
  mode: 'edit'
}


//state when a user adds a photo
state = {
  user: {userObj}, 
  trips: [arrOfTripObjs], 
  trip: id 
  images: [arrOfImgs] //<- is set when a trip is selected
  mode: 'edit'
}


```
