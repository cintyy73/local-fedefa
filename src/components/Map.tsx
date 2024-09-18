import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Box } from "@chakra-ui/react";
import MapSkeleton from "../components/skeletonComponentes/MapSkeleton";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
};

const defaultCenter = {
  lat: -34.61315,
  lng: -58.37723,
};

const bsas = {
  lat: -34.59542050611255,
  lng: -58.37873056232161,
};

const rosario = {
  lat: -32.94051689154429,
  lng: -60.64979949023481,
};

const { REACT_APP_GOOGLE_MAPS_API_KEY } = import.meta.env as Record<
  string,
  string
>;

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // Muestra el centro y los marcadores dependiendo de si entran o no por props. Si no entran por props, muestra el defaultCenter
  const center = lat && lng ? { lat, lng } : defaultCenter;

  return (
    <Box maxW={1200} width="100%" h="250px" mb={4}>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Para Home */}
          {!lat && !lng && (
            <>
              <Marker position={bsas} />
              <Marker position={rosario} />
            </>
          )}
          {/* Para el Producto */}
          {lat && lng && <Marker position={{ lat, lng }} />}
        </GoogleMap>
      ) : (
        <MapSkeleton />
      )}
    </Box>
  );
};

export default Map;
