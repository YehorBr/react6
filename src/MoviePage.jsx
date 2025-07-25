import { useLoaderData, useParams } from "react-router-dom";

export const Movie = () => {
   const details = useLoaderData()
   const params = useParams();
   console.log(details);
   console.log(params);
  return (
    <>
      <h1>{details.name}</h1>
      <p>Here you can display the details of the movie.</p>
    </>
  );
};