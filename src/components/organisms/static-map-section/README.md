# StaticMapSection Component

A React organism component that generates Google Static Maps with circle polygons from ZIP codes. This component automatically geocodes ZIP codes, calculates the optimal center and radius, and displays a static map image with a circle overlay representing the service area.

## Features

- **Automatic Geocoding**: Converts ZIP codes to coordinates using Google Geocoding API
- **Dynamic Circle Generation**: Calculates optimal center and radius to encompass all locations
- **Haversine Distance Calculation**: Uses accurate distance calculations for radius determination
- **Loading States**: Shows loading spinner while generating the map
- **Error Handling**: Displays error messages if geocoding or map generation fails
- **Responsive Design**: Fully responsive with Tailwind CSS styling
- **Accessibility**: Includes proper alt text and loading attributes

## Usage

```tsx
import StaticMapSection from "@/components/organisms/static-map-section";

const MyComponent = () => {
  const zipCodes = ["2000", "2314", "1000", "1500"];
  const apiKey = "your-google-maps-api-key";
  const mapId = "your-google-maps-map-id";

  return (
    <StaticMapSection
      zipCodes={zipCodes}
      apiKey={apiKey}
      mapId={mapId}
      className="my-8"
      alt="Our service area map"
    />
  );
};
```

## Props

| Prop        | Type       | Required | Default              | Description                                                   |
| ----------- | ---------- | -------- | -------------------- | ------------------------------------------------------------- |
| `zipCodes`  | `string[]` | Yes      | -                    | Array of ZIP codes to geocode and include in the service area |
| `apiKey`    | `string`   | Yes      | -                    | Google Maps Platform API Key                                  |
| `mapId`     | `string`   | Yes      | -                    | Google Cloud Map ID for styling                               |
| `className` | `string`   | No       | `""`                 | Additional CSS classes for styling                            |
| `alt`       | `string`   | No       | `"Service area map"` | Alt text for the map image                                    |

## Requirements

### Google Maps Platform Setup

1. **API Key**: You need a Google Maps Platform API Key with the following APIs enabled:

   - Static Maps API
   - Geocoding API

2. **Map ID**: Create a Map ID in Google Cloud Console for custom styling

### Environment Variables

It's recommended to store your API credentials in environment variables:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your-map-id
```

Then use them in your component:

```tsx
<StaticMapSection
  zipCodes={zipCodes}
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
  mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!}
/>
```

## Technical Details

### Map Generation Process

1. **Geocoding**: All ZIP codes are geocoded to get their coordinates
2. **Center Calculation**: Geometric center of all points is calculated
3. **Radius Calculation**: Maximum distance from center to any point is found
4. **Circle Generation**: A circle polygon is generated with 10% buffer
5. **Static Map URL**: Google Static Maps API URL is constructed
6. **Image Display**: Map is displayed as an optimized image

### Customization

The component uses the `useStaticMap` hook which can be customized with additional options:

- Map size and scale
- Circle styling (colors, stroke weight)
- Number of circle segments
- Map type (roadmap, satellite, etc.)

## Error Handling

The component handles various error scenarios:

- **Geocoding Failures**: Individual ZIP codes that fail to geocode are skipped
- **API Errors**: Network or API errors are caught and displayed
- **Empty Results**: If no ZIP codes can be geocoded, an error is shown
- **Missing Credentials**: Validation ensures API key and Map ID are provided

## Performance Considerations

- **Lazy Loading**: Map image uses `loading="lazy"` for better performance
- **Caching**: Google Static Maps API responses are cached by default
- **Optimized Images**: Uses scale=2 for high-DPI displays
- **Error Boundaries**: Consider wrapping in error boundary for production

## Browser Support

- Modern browsers with ES6+ support
- Requires fetch API (polyfill available for older browsers)
- Responsive design works on all screen sizes
