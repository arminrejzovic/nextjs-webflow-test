import { useMap } from "@vis.gl/react-google-maps";
import React, { useEffect } from "react";

interface Props {
  place: google.maps.places.Place | null;
  handleClick: () => void;
}

const AutocompleteResult = ({ place, handleClick }: Props) => {
  const map = useMap();

  // adjust the viewport of the map when the place is changed
  useEffect(() => {
    if (!map || !place) return;
    if (place.viewport) map.fitBounds(place.viewport);
  }, [map, place]);

  if (!place) return null;

  // REMOVE: add a marker for the selected place
  return null;
};

export default React.memo(AutocompleteResult);
