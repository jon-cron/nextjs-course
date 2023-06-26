import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const params = router.query.homeId;
  //   NOTE rendering url query id
  return (
    <div>
      <h1>{params}</h1>
    </div>
  );
};
export default Home;
