import Head from "next/head";
import Image from "next/image";
import Header from "../comps/header";
import Footer from "../comps/Footer";
import Home from "./home";

import { useRouter } from "next/router";

export default function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}
