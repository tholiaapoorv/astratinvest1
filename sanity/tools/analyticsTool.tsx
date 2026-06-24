"use client";

import React from "react";
import { definePlugin } from "sanity";
import { BarChartIcon } from "@sanity/icons";

// Looker Studio embed link, e.g.
//   https://lookerstudio.google.com/embed/reporting/<id>/page/<page>
const LOOKER_EMBED_URL = process.env.NEXT_PUBLIC_LOOKER_EMBED_URL;

function AnalyticsView() {
  if (!LOOKER_EMBED_URL) {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          color: "#5b5e6b",
          fontFamily: "sans-serif",
          lineHeight: 1.6,
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <h2 style={{ marginBottom: 12, color: "#1b1d27" }}>Analytics not configured yet</h2>
          <p>
            Build a Google Looker Studio report on your GA4 data, choose{" "}
            <strong>Share → Embed report</strong>, and copy the embed link into the{" "}
            <code>NEXT_PUBLIC_LOOKER_EMBED_URL</code> environment variable. This tab will
            then show your live visitor dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: "100%", width: "100%", display: "flex" }}>
      <iframe
        src={LOOKER_EMBED_URL}
        title="Website Analytics"
        style={{ flex: 1, border: "none", minHeight: "calc(100vh - 56px)" }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}

// Adds an "Analytics" tab to the Studio top bar.
export const analyticsTool = definePlugin({
  name: "analytics-tool",
  tools: [
    {
      name: "analytics",
      title: "Analytics",
      icon: BarChartIcon,
      component: AnalyticsView,
    },
  ],
});
