import { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();
  console.log(router.query);

  const handleSeeHome = () => {
    router.push("/clients/max/homes");
  };
  return (
    <div>
      <h1>single client</h1>
      <button onClick={handleSeeHome}>homes owned by client</button>
    </div>
  );
};
export default ClientPage;
