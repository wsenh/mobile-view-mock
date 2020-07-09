import React from "react";
import { Mock, Device } from "../components/Mock";
import { useRouter } from "next/router";
import Head from "next/head";

const IndexPage: React.FC = () => {
  const router = useRouter();
  const src = (router.query.mock_url as string) || "/embed-example";
  const device = (router.query.device as Device) || "device-iphone-x";
  const title = (router.query.title as string) || "Mobile View Mock";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Mock device={device} src={src} />
    </>
  );
};

export default IndexPage;
