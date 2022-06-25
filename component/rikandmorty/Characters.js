import React, {useState} from "react";
import styles from "./style.module.css";
import { useQuery } from "react-query";
import Character from "./character/Character";
const Characters = () => {
  const [page, setPage] = useState(1);
  const fetchCharacters = async ({queryKey}) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
    return response.json();
  };

  const { data, status, isPreviousData, isError, isLoading } = useQuery(["CHARACTERS", page], fetchCharacters, {
    retry: false,
    keepPreviousData: true
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>error</div>;
  }
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>Rick and Morty</h1>{" "}
        <div className={styles.characters}>
          {data.results.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </div>
        <div>
          <button className={styles.x} onClick={() => setPage((old) => Math.max(old -1 , 1))}
          disabled={page === 1}>Previous</button>
          <button className={styles.x} onClick={() => setPage((old) => old+1)}
          disabled={!data.info.next}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Characters;
