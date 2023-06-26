const { useRouter } = require("next/router");

const HomesOwnedByClientPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>all of the clients homes</h1>
    </div>
  );
};
export default HomesOwnedByClientPage;
