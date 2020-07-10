import React from "react";
import Head from "next/head";

export type Device =
  | "device-iphone-x"
  | "device-iphone-8"
  | "device-google-pixel-2-xl"
  | "device-google-pixel"
  | "device-galaxy-s8"
  | "device-ipad-pro"
  | "device-surface-pro"
  | "device-surface-book"
  | "device-macbook"
  | "device-macbook-pro"
  | "device-surface-studio"
  | "device-imac-pro"
  | "device-apple-watch";

export const DEVICES = [
  "device-iphone-x",
  "device-iphone-8",
  "device-google-pixel-2-xl",
  "device-google-pixel",
  "device-galaxy-s8",
  "device-ipad-pro",
  "device-surface-pro",
  "device-surface-book",
  "device-macbook",
  "device-macbook-pro",
  "device-surface-studio",
  "device-imac-pro",
  "device-apple-watch",
];

interface Props {
  device: Device;
  src: string;
}

export const Mock: React.FC<Props> = ({ src, device }) => {
  return (
    <>
      <Head>
        <link
          key="spectre"
          rel="stylesheet"
          href="https://picturepan2.github.io/devices.css/dist/spectre.min.css"
        />
        <link
          key="devices.css"
          rel="stylesheet"
          href="https://picturepan2.github.io/devices.css/dist/devices.css"
        />
        <link
          key="demo"
          rel="stylesheet"
          href="https://picturepan2.github.io/devices.css/dist/demo.css"
        />
      </Head>
      <div className="container grid-xl text-center">
        <div className="columns">
          <div className="column col-12">
            <div className={`device ${device}`}>
              <div className="device-frame">
                <iframe className="device-content" src={src} />
              </div>
              <div className="device-stripe"></div>
              <div className="device-header"></div>
              <div className="device-sensors"></div>
              <div className="device-btns"></div>
              <div className="device-power"></div>
              <div className="device-home"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
