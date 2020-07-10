import React, { useState } from "react";
import { Mock, Device } from "../components/Mock";
import { MockOptions } from "../components/MockOptions";
import Head from "next/head";

const UrlGeneratorPage: React.FC = () => {
  const [src, setSrc] = useState("/embed-example");
  const [device, setDevice] = useState<Device>("device-iphone-x");
  const [title, setTitle] = useState("Mobile View Mock");

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          key="raleway"
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
        <link key="normalize" href="/styles/normalize.css" rel="stylesheet" />
        <link key="skeleton" href="/styles/skeleton.css" rel="stylesheet" />
      </Head>
      <div className="row">
        <div className="six columns">
          <Mock device={device} src={src} />
        </div>
        <div className="six columns">
          <MockOptions
            {...{ src, setSrc, device, setDevice, title, setTitle }}
          />
        </div>
      </div>
    </>
  );
};

export default UrlGeneratorPage;
