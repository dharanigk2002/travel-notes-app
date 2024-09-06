import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking city on map" />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((c) => c.country).includes(city.country))
      return [
        ...arr,
        {
          id: city.id,
          country: city.country,
          emoji: city.emoji,
        },
      ];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
