  import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from "../firebase/config";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) return;
    console.log('useStorage has the file now:', file.name);
    //references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        console.log('getting the url now')
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        collectionRef.add({ url, createdAt });
        console.log(url)
        setUrl(url);
        console.log('url has been set')
      }
    );
  }, [file]);


  // useEffect(() => {
  //   if (url) {
  //     console.log("url:", url)
  //     setFile(null);
  //     setStoredUrl(url);
  //     // updateDb(url, trip_id, coordinates);
  //     updateDb(url);
  //   }
  // }, [url, setFile]);


  return { progress, url, error };

  
};

export default useStorage;
