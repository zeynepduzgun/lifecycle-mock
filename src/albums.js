import "./App.css";
import { useEffect, useState } from "react";

const Albums = () => {
  const [bands, setBands] = useState([]);

  const fetchAlbums = (abortCont) => {
    fetch("api/bands", { signal: abortCont.signal })
      .then((response) => response.json())
      .then((data) => setBands(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.log(err.message);
        }
      });
  };

  useEffect(() => {
    // associate with any fetch req to stop it
    const abortCont = new AbortController();

    console.log("The component mounted");
    fetchAlbums(abortCont);

    return () => {
      console.log("The component unmounted");
      // pause fetching
      abortCont.abort();
    };
  }, []);

  return (
    <div>
      <h1>Featured Bands</h1>
      <div className="item-container">
        {bands.map((band) => {
          return (
            <div className="card">
              <h1>{band.name}</h1>
              {band.albums.map((album) => {
                return (
                  <>
                    <p>
                      <b>Album :</b> {album.title}
                    </p>
                    <i>{album.description}</i>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
