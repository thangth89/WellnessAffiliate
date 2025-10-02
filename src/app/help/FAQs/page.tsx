

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Help Center",
  description: "Redirecting to FAQ Help Center...",
  robots: { index: false, follow: false }, // không index để sạch SEO
};

export default function Page() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=https://wellness-nest.gorgias.help/en-US?ref=jbjycrqj&sub_id=" />
      </head>
      <body>
        <p>
          Đang chuyển hướng tới{" "}
          <a href="https://wellness-nest.gorgias.help/en-US?ref=jbjycrqj&sub_id=">
            FAQ Help Center
          </a>
          ...
        </p>
      </body>
    </html>
  );
}
