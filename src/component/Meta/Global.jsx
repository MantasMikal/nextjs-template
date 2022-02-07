import { NextSeo } from "next-seo";
import React from "react";

import config from "../../../config";

const {
  title,
  fullTitle,
  description,
  twitterHandle,
  themeColor,
  url,
  locale,
} = config.meta;

const GlobalMeta = () => {
  const optional = {
    "application-name": fullTitle,
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
    "theme-color": themeColor,
  };

  return (
    <NextSeo
      titleTemplate={`%s | ${title}`}
      twitter={{
        cardType: "summary_large_image",
        site: twitterHandle,
      }}
      locale={locale}
      themeColor={themeColor}
      title={fullTitle}
      description={description}
      twitterHandle={twitterHandle}
      canonical={url}
      openGraph={{
        type: "website",
        url: url,
        locale: locale,
        title: fullTitle,
        description: description,
        site_name: title,
        images: [
          {
            url: "/og-image.jpg",
            width: 1200,
            height: 628,
            alt: "Example",
          },
        ],
      }}
      additionalLinkTags={[
        ...[512, 192].map((size) => ({
          rel: "apple-touch-icon",
          href: `/icons/icon-${size}.png`,
          type: "image/png",
          sizes: `${size}x${size}`,
        })),
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/icons/favicon.svg",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
      ]}
      additionalMetaTags={[
        ...Object.keys(optional).map((name) => {
          if (!optional[name]) return;
          return {
            property: name,
            content: optional[name],
          };
        }),
      ]}
    />
  );
};

GlobalMeta.propTypes = {};

export default GlobalMeta;
