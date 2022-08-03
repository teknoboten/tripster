




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