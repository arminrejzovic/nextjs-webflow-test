import { create } from 'zustand';

// Import LocationData from the map component (move to types if needed)
import type { Location } from '@/types/map';

interface MapState {
  currentView: "map" | "list";
  setCurrentView: (view: "map" | "list") => void;
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
  selectedPlace: google.maps.places.PlaceResult | null;
  setSelectedPlace: (place: google.maps.places.PlaceResult | null) => void;
  searchInputIsFocused: boolean;
  setSearchInputIsFocused: (isFocused: boolean) => void;
  showBottomDrawer: boolean;
  setShowBottomDrawer: (show: boolean) => void;
  currentCenter: { lat: number; lng: number };
  setCurrentCenter: (center: { lat: number; lng: number }) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  zoom: number;
  setMapZoom: (zoom: number) => void;
  shouldApplyZoomOnMobile: boolean;
  setShouldApplyZoomOnMobile: (should: boolean) => void;
  showMap: boolean;
  setShowMap: (show: boolean) => void;
}

const useMapStore = create<MapState>()((set) => ({
  currentView: "map",
  setCurrentView: (view) => set({ currentView: view }),
  selectedLocation: null,
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  selectedPlace: null,
  setSelectedPlace: (place) => set({ selectedPlace: place }),
  searchInputIsFocused: false,
  setSearchInputIsFocused: (isFocused) => set({ searchInputIsFocused: isFocused }),
  showBottomDrawer: true,
  setShowBottomDrawer: (show) => set({ showBottomDrawer: show }),
  currentCenter: { lat: 34.02017812047716, lng: -118.04361514813795 },
  setCurrentCenter: (center) => set({ currentCenter: center }),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  zoom: 10,
  setMapZoom: (zoom) => set({ zoom }),
  shouldApplyZoomOnMobile: false,
  setShouldApplyZoomOnMobile: (should) => set({ shouldApplyZoomOnMobile: should }),
  showMap: false,
  setShowMap: (show) => set({ showMap: show }),
}));

export default useMapStore;
