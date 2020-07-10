import React, { useState, useEffect } from "react";
import { Device, DEVICES } from "./Mock";

interface Props {
  src: string;
  title: string;
  device: Device;
  setSrc: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDevice: React.Dispatch<React.SetStateAction<Device>>;
}

export const MockOptions: React.FC<Props> = ({
  src,
  title,
  device,
  setSrc,
  setTitle,
  setDevice,
}) => {
  const [base, setBase] = useState<string>();

  useEffect(() => {
    setBase(window.location.origin);
  }, [setBase]);

  return (
    <div className="container">
      <div style={{ margin: 12 }}>
        <label>Page Title</label>
        <input
          className="u-full-width"
          placeholder="Mobile View Mock"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div style={{ margin: 12 }}>
        <label>Source</label>
        <input
          className="u-full-width"
          placeholder="/embed-example"
          value={src}
          onChange={e => setSrc(e.target.value)}
        />
      </div>
      <div style={{ margin: 12 }}>
        <label>Device</label>
        <select
          value={device}
          onChange={e => setDevice(e.target.value as Device)}
        >
          {DEVICES.map(d => {
            return <option key={d}>{d}</option>;
          })}
        </select>
      </div>
      <div style={{ margin: 12 }}>
        <label>URL</label>
        <p>{`${base}/?${[
          title && `title=${title}`,
          src && `mock_url=${src}`,
          device && `device=${device}`,
        ]
          .join("&")
          .replace(" ", "%20")}`}</p>
      </div>
    </div>
  );
};
