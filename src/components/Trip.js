import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/Bali.jpg";
import Trip2 from "../assets/Maldives.jpg";
import Trip3 from "../assets/Iceland.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>you can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia,is a country in Southeast Asia and Oceania between
          the Indian and Pacific oceans. It consists of over 17,000 islands, 
          including Sumatra, Java, Sulawesi, and parts of Borneo and 
          New Guinea.In the early 21st century Indonesia was the most populous 
          country in Southeast Asia and the fourth most populous in the world."
        />

        <TripData
          image={Trip2}
          heading="Trip in Maldives"
          text="The Maldives, officially the Republic of Maldives, is
          an archipelagic state and country in South Asia, situated in 
          the Indian Ocean. It lies southwest of Sri Lanka and India, 
          about 750 kilometres from the Asian continent's mainland.
          The Maldives has one of the most delicate environments anywhere on the planet. 
          Coral reefs are the foundation of the islands."
        />

        <TripData
          image={Trip3}
          heading="Trip in Iceland"
          text="Iceland,a Nordic island nation,is defined by its dramatic landscape 
          with volcanoes,geysers,hot springs and lava fields.Massive glaciers
          are protected in Vatnajökull and Snæfellsjökull 
          national parks. Most of the population lives in the capital, 
          Reykjavik, which runs on geothermal power and is home to the
          National and Saga museums,tracing Iceland’s Viking history."
        />
      </div>
    </div>
  );
}

export default Trip;
