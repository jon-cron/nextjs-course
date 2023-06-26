import { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();
  console.log(router.query);

  const handleSeeHome = () => {
    // NOTE both ways work
    // router.push("/clients/max/homes");
    router.push({
      pathname: "/clients/[id]/[clientHomeId]",
      query: { id: "max", clientHomeId: "allHomes" },
    });
  };
  return (
    <div>
      <h1>single client</h1>
      <button onClick={handleSeeHome}>homes owned by client</button>
    </div>
  );
};
export default ClientPage;
