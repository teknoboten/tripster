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

< Header />
  - recieves user data from app component via props
  
< Nav >
  - static link to add new trip / form
    - can we somehow combine this into a single button ???
   

< Triplist >
  - conditionally rendered if state.user && !state.trip
  - recieves trip list via props

 
< TripItem >
  - each card needs a onClick handler that will updates state.trips.id.selected === trip.id
  - when state.trip === true, App component ? re-renders to show < TripPage > instead of < Triplist >
  


< TripPage > 
  - conditionally rendered only if a trip is selected (state.trip === trip.id )
  - do we use useEffect or something to update state.images with the list of images from fireBase
  - useEffect ... can be configured to fetch images every time a component renders 
  - unless we save the URL provided on upload in our DB which is what i initially planned to do 🤷‍♀️


  < Map >
    - helper function
  < ImageGrid >
  < ImageItem >



**this is incomplete but i am le tired**






tripList component 
  trips = props.trips.map


  nav (do we need this? replace with instagram style "add" button or something?)

header/title
  - username = props.user

tripList
  trips = props.trips (array of trips)

tripItem
  trip_name
  start_date
  end_date
  map

imgList
  images = array of image items

imgItem
  url
  photo_text
  date
  long
  lat

map
  (can we reuse imageList?)
  array of image items formatted for whatever mapbox needs

mapItem
  lat
  long
  img_url
  date


```jsx
    <ul>
      
      {props.trips.map(trip => <TripItem 
      key={trip.id} 
      name={trip.name}   
      cover={trip.cover} 
      onClick={() => props.someKindaHookorHelperThatupdatesStateToThisTrip(trip.id)} /> )}
    
    </ul>
```