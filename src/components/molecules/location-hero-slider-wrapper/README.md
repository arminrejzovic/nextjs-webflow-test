# LocationHeroSliderWrapper

A comprehensive React wrapper component that implements all the Splide slider functionality from the original Webflow script. This component supports multiple slider types with different configurations and responsive behaviors.

## Features

- **Multiple Slider Types**: Supports 13 different slider configurations
- **Responsive Design**: Automatic breakpoint handling for different screen sizes
- **Event Handling**: Comprehensive slide change and mount event handling
- **TypeScript Support**: Full TypeScript support with proper type definitions
- **Customizable**: Easy to extend with custom configurations

## Installation

The component requires the `@splidejs/react-splide` package:

```bash
npm install @splidejs/react-splide
```

## Usage

### Basic Usage

```tsx
import LocationHeroSliderWrapper from "@/components/molecules/location-hero-slider-wrapper";

const MyComponent = () => {
  const slides = [
    <div key="1">Slide 1 content</div>,
    <div key="2">Slide 2 content</div>,
    <div key="3">Slide 3 content</div>,
  ];

  return (
    <LocationHeroSliderWrapper
      slides={slides}
      sliderType="dots"
      onSlideChange={(index) => console.log("Slide changed to:", index)}
    />
  );
};
```

### Available Slider Types

#### 1. `dots` (Default)

- **Description**: Standard dots slider with autoplay
- **Features**: Autoplay, pagination, no arrows
- **Use Case**: Hero sliders, testimonials

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="dots" />
```

#### 2. `center-card`

- **Description**: Center-focused card slider
- **Features**: Fixed width/height, center focus, responsive
- **Use Case**: Product showcases, feature cards

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="center-card" />
```

#### 3. `mobile-only`

- **Description**: Mobile-only slider that destroys on desktop
- **Features**: Responsive padding, destroys at 992px
- **Use Case**: Mobile-specific content

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="mobile-only" />
```

#### 4. `mobile-full`

- **Description**: Full-width mobile slider
- **Features**: No padding, destroys on desktop
- **Use Case**: Mobile-specific content

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="mobile-full" />
```

#### 5. `mobile-dots`

- **Description**: Mobile dots slider
- **Features**: Pagination, no arrows, destroys on desktop
- **Use Case**: Mobile navigation

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="mobile-dots" />
```

#### 6. `gallery`

- **Description**: Gallery slider with multiple items
- **Features**: 5 items per page, responsive breakpoints
- **Use Case**: Image galleries, product grids

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="gallery" />
```

#### 7. `collection`

- **Description**: Collection slider
- **Features**: Single item, destroys on mobile
- **Use Case**: Collection showcases

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="collection" />
```

#### 8. `history`

- **Description**: History timeline slider
- **Features**: Smooth transitions, responsive heights
- **Use Case**: Timeline content

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="history" />
```

#### 9. `waste`

- **Description**: Waste management slider
- **Features**: Loop, pagination, arrows
- **Use Case**: Process steps

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="waste" />
```

#### 10. `recycle`

- **Description**: Recycling slider
- **Features**: Rewind, responsive padding
- **Use Case**: Recycling content

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="recycle" />
```

#### 11. `posts`

- **Description**: Blog posts slider
- **Features**: No gap, responsive arrows
- **Use Case**: Blog content

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="posts" />
```

#### 12. `finishes`

- **Description**: Finishes slider with modal support
- **Features**: Auto height, modal integration
- **Use Case**: Product finishes

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="finishes" />
```

#### 13. `form-mobile`

- **Description**: Form mobile slider with image swapping
- **Features**: Data target swapping, mobile only
- **Use Case**: Form steps with image updates

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="form-mobile" />
```

#### 14. `responsive-grid`

- **Description**: Responsive grid slider with pagination only (no arrows)
- **Features**:
  - Mobile: 1 slide per view
  - Tablet (768px+): 2 slides per view
  - Desktop (1024px+): 3 slides per view
  - Pagination positioned below content (not absolutely positioned)
  - No navigation arrows - pagination only
- **Use Case**: Product grids, service showcases, responsive galleries

```tsx
<LocationHeroSliderWrapper slides={slides} sliderType="responsive-grid" />
```

## Props

### LocationHeroSliderWrapperProps

| Prop            | Type                      | Default  | Description                  |
| --------------- | ------------------------- | -------- | ---------------------------- |
| `slides`        | `React.ReactNode[]`       | Required | Array of slide content       |
| `sliderType`    | `SliderType`              | `'dots'` | Type of slider configuration |
| `className`     | `string`                  | `''`     | Additional CSS classes       |
| `onSlideChange` | `(index: number) => void` | Optional | Callback when slide changes  |
| `onMount`       | `(splide: any) => void`   | Optional | Callback when slider mounts  |

### SliderType

```typescript
type SliderType =
  | "center-card"
  | "mobile-only"
  | "mobile-full"
  | "mobile-dots"
  | "gallery"
  | "collection"
  | "history"
  | "waste"
  | "recycle"
  | "posts"
  | "dots"
  | "finishes"
  | "form-mobile"
  | "responsive-grid";
```

## Event Handling

### Slide Change Events

The component automatically handles:

- Adding/removing `is-active` classes
- Managing `open` classes for card elements
- Special handling for mobile-only sliders
- Data target swapping for form-mobile sliders

### Custom Event Handlers

```tsx
<LocationHeroSliderWrapper
  slides={slides}
  sliderType="dots"
  onSlideChange={(index) => {
    console.log("Slide changed to:", index);
    // Your custom logic here
  }}
  onMount={(splide) => {
    console.log("Slider mounted:", splide);
    // Access splide instance
  }}
/>
```

## CSS Classes

The component automatically applies the appropriate CSS classes based on the slider type:

- `splide` - Base class
- `splide-dots` - Dots slider
- `center-slider-card` - Center card slider
- `splide-mobile-only` - Mobile only slider
- `gallery-slider` - Gallery slider
- `splide-responsive-grid` - Responsive grid slider
- And more...

## Special Features

### Center Card Slider

- Automatically adds `center-slider-card--big` class when more than 4 slides
- Handles focus center behavior
- Responsive fixed width/height

### Finishes Slider

- Integrates with finish modal triggers
- Handles refresh functionality
- Auto height support

### Form Mobile Slider

- Automatically swaps images using `data-target-swap` attributes
- Updates on slide change and mount
- Mobile-only behavior

### Mobile Only Sliders

- Automatically destroy on desktop (992px+)
- Responsive padding configurations
- Special handling for grid items and categories

## Example with Real Content

```tsx
import LocationHeroSliderWrapper from "@/components/molecules/location-hero-slider-wrapper";

const HeroSlider = () => {
  const heroSlides = [
    <div key="1" className="hero-slide">
      <img src="/image1.jpg" alt="Hero 1" />
      <h2>Welcome to Our Service</h2>
      <p>Professional installation and design services</p>
    </div>,
    <div key="2" className="hero-slide">
      <img src="/image2.jpg" alt="Hero 2" />
      <h2>Expert Design</h2>
      <p>Custom solutions for your space</p>
    </div>,
    <div key="3" className="hero-slide">
      <img src="/image3.jpg" alt="Hero 3" />
      <h2>Quality Installation</h2>
      <p>Professional installation team</p>
    </div>,
  ];

  return (
    <LocationHeroSliderWrapper
      slides={heroSlides}
      sliderType="dots"
      className="hero-slider"
      onSlideChange={(index) => {
        console.log("Hero slide changed to:", index);
      }}
    />
  );
};
```

## Migration from Webflow

This component replicates all the functionality from the original Webflow script:

### Original Webflow Functions → React Component

- `initCenterCardSlider()` → `sliderType="center-card"`
- `initMobileOnlySlider()` → `sliderType="mobile-only"`
- `initMobileDotsSlider()` → `sliderType="mobile-dots"`
- `initGallerySlider()` → `sliderType="gallery"`
- `initCollectionSlider()` → `sliderType="collection"`
- `initHistorySlider()` → `sliderType="history"`
- `initWasteSlider()` → `sliderType="waste"`
- `initRecycleSlider()` → `sliderType="recycle"`
- `initPostsSlider()` → `sliderType="posts"`
- `initDotSlider()` → `sliderType="dots"`
- `initFinishesSlider()` → `sliderType="finishes"`
- `initFormMobileOnlySlider()` → `sliderType="form-mobile"`

### Event Handling

All the original event handling is preserved:

- Slide change events with class management
- Special mobile-only behaviors
- Form mobile data swapping
- Finishes modal integration

## Browser Support

- Modern browsers with ES6+ support
- Mobile responsive design
- Touch/swipe support via Splide
- Accessibility features included

## Dependencies

- `@splidejs/react-splide` - Core slider functionality
- React 18+ - Component framework
- TypeScript - Type safety (optional but recommended)
