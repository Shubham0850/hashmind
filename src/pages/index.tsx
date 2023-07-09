import ConsumerLayer from "@/components/home/ConsumerLayer";
import Hero from "@/components/home/Hero";
import Innovators from "@/components/home/Innovators";
import JoinUsCard from "@/components/home/JoinUsCard";
import OurHeritage from "@/components/home/OurHeritage";
import WhoWeAre from "@/components/home/WhoWeAre";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>HashMind | Convergence of WEB3 and AI Venture Studio</title>
        <meta
          name="description"
          content="Convergence of WEB3 and AI Venture Studio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero/>
      <WhoWeAre/>
      <Innovators/>
      <OurHeritage/>
      <ConsumerLayer/>
      <JoinUsCard/>
    </>
  );
}
