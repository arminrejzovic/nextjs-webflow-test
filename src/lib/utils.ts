import type { Location } from "@/types/map";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The string with the first letter capitalized
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Map US states to IANA time zones (coarse defaults for multi-zone states)
 */
const stateToTimeZone: Record<string, string> = {
  // Pacific
  CA: "America/Los_Angeles",
  WA: "America/Los_Angeles",
  OR: "America/Los_Angeles",
  NV: "America/Los_Angeles",
  // Mountain
  AZ: "America/Phoenix", // no DST
  CO: "America/Denver",
  NM: "America/Denver",
  UT: "America/Denver",
  WY: "America/Denver",
  MT: "America/Denver",
  ID: "America/Denver",
  // Central
  AL: "America/Chicago",
  AR: "America/Chicago",
  IA: "America/Chicago",
  IL: "America/Chicago",
  KS: "America/Chicago",
  LA: "America/Chicago",
  MN: "America/Chicago",
  MS: "America/Chicago",
  MO: "America/Chicago",
  OK: "America/Chicago",
  NE: "America/Chicago",
  ND: "America/Chicago",
  SD: "America/Chicago",
  TX: "America/Chicago",
  WI: "America/Chicago",
  TN: "America/Chicago",
  KY: "America/Chicago",
  // Eastern
  CT: "America/New_York",
  DC: "America/New_York",
  DE: "America/New_York",
  FL: "America/New_York",
  GA: "America/New_York",
  IN: "America/Indiana/Indianapolis",
  ME: "America/New_York",
  MD: "America/New_York",
  MA: "America/New_York",
  MI: "America/Detroit",
  NH: "America/New_York",
  NJ: "America/New_York",
  NY: "America/New_York",
  NC: "America/New_York",
  OH: "America/New_York",
  PA: "America/New_York",
  RI: "America/New_York",
  SC: "America/New_York",
  VA: "America/New_York",
  VT: "America/New_York",
  WV: "America/New_York",
  // Alaska & Hawaii
  AK: "America/Anchorage",
  HI: "Pacific/Honolulu",
  // Optional territories
  PR: "America/Puerto_Rico",
};

/**
 * Fallback: approximate US time zone by longitude for CONUS
 * - Eastern:  -67.5  to  -82.5
 * - Central:  -82.5  to  -97.5
 * - Mountain: -97.5  to -112.5
 * - Pacific: -112.5  to -127.5
 */
function guessTzFromLongitude(lng: number): string | undefined {
  if (lng <= -67.5 && lng > -82.5) return "America/New_York";
  if (lng <= -82.5 && lng > -97.5) return "America/Chicago";
  if (lng <= -97.5 && lng > -112.5) return "America/Denver";
  if (lng <= -112.5 && lng > -150) return "America/Los_Angeles";
  return undefined;
}

function inferTimeZone(location: Location): string | undefined {
  const raw = (location.state || "").trim().toUpperCase();
  if (raw && stateToTimeZone[raw]) return stateToTimeZone[raw];

  const lng = parseFloat(location.longitude);
  if (!Number.isNaN(lng)) {
    const tz = guessTzFromLongitude(lng);
    if (tz) return tz;
  }

  return undefined;
}

function getNowPartsInTz(tz?: string): { minutes: number } {
  const timeZone = tz || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  const parts = dtf.formatToParts(new Date());
  const hourStr = parts.find((p) => p.type === "hour")?.value ?? "00";
  const minStr = parts.find((p) => p.type === "minute")?.value ?? "00";
  const hours = parseInt(hourStr, 10);
  const minutes = parseInt(minStr, 10);
  return { minutes: hours * 60 + minutes };
}

/**
 * Returns whether the location is currently open (8:00–17:00 local time)
 * and a short label for the next change.
 */
export function getLocationOpenState(location: Location): {
  isOpen: boolean;
  nextChangeText: string;
} {
  const tz = inferTimeZone(location);
  const { minutes } = getNowPartsInTz(tz);

  // 8:00 = 480, 17:00 = 1020
  const isOpen = minutes >= 480 && minutes < 1020;

  return {
    isOpen,
    nextChangeText: isOpen ? "Closes 5 PM" : "Opens 8 AM",
  };
}

/**
 * Build a URL using NEXT_PUBLIC_BASE_PATH_URL, NEXT_PUBLIC_BASE_PATH,
 * and the provided path. Safely joins segments to avoid double slashes.
 */
export function buildBasePathUrl(path?: string): string {
  const baseUrl =
    (process.env.NEXT_PUBLIC_BASE_PATH_URL || '').replace(/\/+$/, '')
  const basePath =
    (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/^\/+|\/+$/g, '')
  const suffix = (path || '').replace(/^\/+/, '')

  const parts = [baseUrl, basePath, suffix].filter(Boolean)
  return parts.join('/')
}

/**
 * Transforms url into a hostname with port for localhost
 * Needed for middleware to limit app access!
 */
export const getHostName = (url: string | null | undefined): string => {
  if (!url) return '';
  try {
    const parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
    let hostname = parsedUrl.hostname;
    const port = parsedUrl.port;

    // Return the full hostname with the port for localhost
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return port ? `${hostname}:${port}` : hostname;
    }

    // Otherwise, normalize the host for deployed environments
    if (hostname.startsWith('www.')) {
      hostname = hostname.slice(4);
    }
    return hostname;
  } catch (error) {
    console.error('Invalid URL passed to geHostname:', url, error);
    return '';
  }
};