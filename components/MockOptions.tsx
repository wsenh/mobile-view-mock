import React from "react";
import { Device, DEVICES } from "./Mock";

interface Props {
  src: string;
  title: string;
  device: Device;
  onSrcChange: (src: string) => void;
  onTitleChange: (title: string) => void;
  onDeviceChange: (device: Device) => void;
  url: string;
}

export const MockOptions: React.FC<Props> = ({
  src,
  title,
  device,
  onSrcChange,
  onTitleChange,
  onDeviceChange,
  url,
}) => {
  return (
    <div className="container">
      <div style={{ margin: 12 }}>
        <label>Page Title</label>
        <input
          className="u-full-width"
          placeholder="Mobile View Mock"
          value={title}
          onChange={e => onTitleChange(e.target.value)}
        />
      </div>
      <div style={{ margin: 12 }}>
        <label>Source</label>
        <input
          className="u-full-width"
          placeholder="/embed-example"
          value={src}
          onChange={e => onSrcChange(e.target.value)}
        />
      </div>
      <div style={{ margin: 12 }}>
        <label>Device</label>
        <select
          value={device}
          onChange={e => onDeviceChange(e.target.value as Device)}
        >
          {DEVICES.map(d => {
            return <option key={d}>{d}</option>;
          })}
        </select>
      </div>
      <div style={{ margin: 12 }}>
        <label>URL</label>
        <p>{url}</p>
      </div>
    </div>
  );
};
