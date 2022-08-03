# tripster

# data structures
# helpers
# html strucutre
# component structure

**App**
state: user, trips, trip, images


# application flow

## < App >
  - on initial render, set state with useEffect

similar to: https://github.com/teknoboten/scheduler/blob/main/src/hooks/useApplicationData.js
state: user, trips, trip, images ???

## < Header />
  - recieves user data from app component via props
  
## < Nav >
  - static link to add new trip / form
    - can we somehow combine this into a single button ???
   

## < Triplist >
  - conditionally rendered if state.user && !state.trip
  - recieves trip list via props

 
## < TripItem >
  - each card needs a onClick handler that will updates state.trips.id.selected === trip.id
  - when state.trip === true, App component ? re-renders to show < TripPage > instead of < Triplist >
  

## < TripPage > 
  - conditionally rendered only if a trip is selected (state.trip === trip.id )
  - do we use useEffect or something to update state.images with the list of images from fireBase
  - useEffect ... can be configured to fetch images every time a component renders 
  - unless we save the URL provided on upload in our DB which is what i initially planned to do 🤷‍♀️


  ### < Map >
    - recieves state.images via props
    - helper function to make the map points

  ### < ImageGrid >
   - recieves state.images via props

  ### < ImageItem >
    - maps 

**this is incomplete but i am le tired**

**Not Pictured** 
- necessary magic to re-use existing img awesomeness 


