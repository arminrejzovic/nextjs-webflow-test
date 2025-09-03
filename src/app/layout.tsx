import "@/devlink/global.css";
import "./globals.css";
import "./site-settings-css.css";
import DevLinkProviderWrapper from "@/components/devlink-provider-wrapper";
import { HeaderV2 } from "@/devlink";
import FooterWrapper from "@/components/footer-wrapper";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Termly */}
        <Script
          type="text/javascript"
          src="https://app.termly.io/resource-blocker/a2e988f6-2ed8-49eb-ba0d-4251a030e398?autoBlock=on"
          async
        ></Script>
      </head>
      <body className="antialiased max-h-fit bg-white body-v2">
        <DevLinkProviderWrapper>
          <header>
            <HeaderV2 />
            <div className="header-spacer"></div>
          </header>
          {children}
          <FooterWrapper />
        </DevLinkProviderWrapper>
        {/* Accessibility Widget */}

        <Script>
          {`
            window.interdeal = {
              "sitekey": "2069a3ae54b04b9043ec7dc8befe587e",
              "Position": "Left",
              "Menulang": "EN",
              "domains": {
                "js": "https://cdn.equalweb.com/",
                "acc": "https://access.equalweb.com/"
              },
              "btnStyle": {
                "vPosition": [
                  "bottom-left",
                  "bottom-left"
                ],
                "scale": [
                  "0.5",
                  "0.5"
                ],
                "color": {
                  "main": "#e6051f",
                  "second": "#ffffff"
                },
                "icon": {
                  "type": 11,
                  "shape": "circle"
                }
              }
            };

            (function(doc, head, body){
              var coreCall             = doc.createElement('script');
              coreCall.src             = 'https://cdn.equalweb.com/core/4.6.12/accessibility.js';
              coreCall.defer           = true;
              coreCall.integrity       = 'sha512-tbmzeMlPGqU0SEFXwKxqHdaa9SnF4EjTai5LCahOcN9KSTIo9LRscxtii6TZ0MSooxl73IZg2cj6klk8wBm0hg==';
              coreCall.crossOrigin     = 'anonymous';
              coreCall.setAttribute('data-cfasync', true );
              body? body.appendChild(coreCall) : head.appendChild(coreCall);
            })(document, document.head, document.body);

            // Termly Cookie Consent
            (function initTermlyCookieConsent() {
              function onReady() {
                document.addEventListener("click", (e) => {
                  const prefLink = e.target.closest(".termly-display-preferences");
                  if (prefLink) {
                    const support = document.querySelector("#termly-code-snippet-support");
                    if (support) support.style.display = "block";
                    return;
                  }

                  const a11yBtn = e.target.closest(".accessibility-toggle");
                  if (a11yBtn) {
                    e.preventDefault();
                    if (window.interdeal && window.interdeal.a11y && typeof window.interdeal.a11y.openMenu === "function") {
                      window.interdeal.a11y.openMenu();
                    }
                  }
                }, true);
              }

              if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", onReady, { once: true });
              } else {
                onReady();
              }
            })();

          `}
        </Script>
      </body>
    </html>
  );
}
