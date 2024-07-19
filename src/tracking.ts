import { posthog } from "posthog-js";
import { isProdMode } from "./utils";

type TrackingEvent = {
  name: string;
  properties: {
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

export function initPosthog(token: string, apiHost: string, feVersion: string) {
  posthog.init(token, {
    api_host: apiHost,
    capture_pageview: isProdMode(),
    autocapture: isProdMode(),
    debug: !isProdMode(),
    disable_session_recording: !isProdMode(),
    enable_heatmaps: isProdMode(),
  });

  posthog.register({
    frontend_version: feVersion,
    frontend_app: "gatsby-marketing-webapp",
  });

  // Do not track in dev mode
  if (!isProdMode()) {
    posthog.opt_out_capturing();
  }
}
