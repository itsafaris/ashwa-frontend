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

export function initPosthog(token: string, apiHost: string, feVersion: string) {
  posthog.init(token, {
    api_host: apiHost,
    capture_pageview: false,
    autocapture: false,
    debug: !isProdMode(),
    disable_session_recording: !isProdMode(),
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
