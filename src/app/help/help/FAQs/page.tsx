

import type { Metadata } from &quot;next&quot;;

export const metadata: Metadata = {
  title: &quot;FAQ - Help Center&quot;,
  description: &quot;Redirecting to FAQ Help Center...&quot;,
  robots: { index: false, follow: false }, // không index để sạch SEO
};

export default function Page() {
  return (
    <html>
      <head>
        <meta httpEquiv=&quot;refresh&quot; content=&quot;0; url=https://wellness-nest.gorgias.help/en-US?ref=jbjycrqj&sub_id=&quot; />
      </head>
      <body>
        <p>
          Đang chuyển hướng tới{&quot; "}
          <a href=&quot;https://wellness-nest.gorgias.help/en-US?ref=jbjycrqj&sub_id=&quot;>
            FAQ Help Center
          </a>
          ...
        </p>
      </body>
    </html>
  );
}
