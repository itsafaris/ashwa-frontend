import posthog from "posthog-js";
import { isProdMode } from "./utils";

type TrackingEvent = {
  name: string;
  properties?: {
    [prop: string]: any;
  };
};

export function trackEvent(e: TrackingEvent) {
  posthog.capture(e.name, e.properties);
}

export function trackPixelEvent(e: TrackingEvent) {
  if (typeof window === "undefined") {
    return;
  }
  if (!(window as any).fbq) {
    return;
  }
  (window as any).fbq("track", e.name, e.properties);
}

export function trackGtagEvent(e: TrackingEvent) {
  if (typeof window === "undefined") {
    return;
  }

  if (!(window as any).gtag) {
    return;
  }

  if (!isProdMode()) {
    return;
  }

  (window as any).gtag("event", e.name, e.properties);
}
