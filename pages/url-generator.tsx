import React, { useState, useEffect } from "react";
import { Mock, Device } from "../components/Mock";
import { MockOptions } from "../components/MockOptions";
import Head from "next/head";
import { useRouter } from "next/router";

const UrlGeneratorPage: React.FC = () => {
  const [src, setSrc] = useState("/embed-example");
  const [device, setDevice] = useState<Device>("device-iphone-x");
  const [title, setTitle] = useState("Mobile View Mock");
  const router = useRouter();

  const [base, setBase] = useState<string>();
  useEffect(() => {
    setBase(window.location.origin);
  }, [setBase]);

  const composeUrl = (route: string, withBase = false) =>
    `${withBase ? base : ""}/${route}?${[
      title && `title=${title}`,
      src && `mock_url=${src}`,
      device && `device=${device}`,
    ]
      .join("&")
      .replace(" ", "%20")}`;

  useEffect(() => {
    if (router.query.mock_url) setSrc(router.query.mock_url as string);
    if (router.query.device) setDevice(router.query.device as Device);
    if (router.query.title) setTitle(router.query.title as string);
  }, [router, setSrc, setDevice, setTitle]);

  useEffect(() => {
    router.push(composeUrl("url-generator", false), undefined, {
      shadow: true,
    });
  }, [src, device, title]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link key="normalize" href="/styles/normalize.css" rel="stylesheet" />
        <link key="skeleton" href="/styles/skeleton.css" rel="stylesheet" />
      </Head>
      <div className="row">
        <div className="six columns">
          <Mock device={device} src={src} />
        </div>
        <div className="six columns">
          <MockOptions
            {...{
              src,
              onSrcChange: src => {
                setSrc(src);
              },
              device,
              onDeviceChange: device => {
                setDevice(device);
              },
              title,
              onTitleChange: title => {
                setTitle(title);
              },
              url: composeUrl("", true),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default UrlGeneratorPage;
