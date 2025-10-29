import Landing from "../components/Landing";
import Statistics from "../components/Statistics";
import LandingCard from "../components/LandingCard";
import Famous from "../components/Famous";
import News from "../components/News.jsx";
import Footer from "../components/Footer.jsx";
import Categories from "../components/Categories.jsx";
import JobOffers from "../components/JobOffers.jsx";
import RecentEvents from "../components/RecentEvents.jsx";

export default function Home() {
  return (
    <>
      <Landing />
      <Statistics />
      <LandingCard />
      <Categories />
      <Famous />
      <JobOffers />
      <News />
      <RecentEvents />
    </>
  );
}
