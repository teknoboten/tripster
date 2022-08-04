# tripster

# data structures
# helpers
# html strucutre
# component structure

**App**
state: user, trips, trip, images


# application flow

# < App >
state: user, trips, trip,
  
## < AllTripsPage >
  - set trip data on initial render
  - re-renders if state.trips changes
  - passes trip data to triplist via props

  < TripList >
    < TripItem >
      - updates state.trip onClick


## < TripDetailPage >
  - sets imageData

  <Img Grid> 
    - each image item needs a click handler / link to ImageShowPage
  <Map>

## < ImageShowPage >


## < AddNewTripPage >


## < AddNewPhotoPage >



## < AddButton >
  
  - recieves trip via props
  - if !state.trips show "add new trip" form
  - if state.trips && !state.trip, show "select trip" drop down 
  - if state.trips && state.trip, show "add new image" form










**this is incomplete but i am le tired**

**Not Pictured** 
- necessary magic to re-use existing img awesomeness 






