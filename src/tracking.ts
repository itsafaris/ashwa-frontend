import { posthog } from "posthog-js";

type TrackingEvent = {
  name: string;
  properties?: {
    [prop: string]: any;
  };
};

export function trackEvent(e: TrackingEvent) {
  posthog.capture(e.name, e.properties);
}

export function trackPixel(event: string, properties: Record<string, any>) {
  if (typeof window === "undefined") {
    return;
  }
  if (!(window as any).fbq) {
    return;
  }
  (window as any).fbq("track", event, properties);
}
