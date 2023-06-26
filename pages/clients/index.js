import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "maximus" },
    { id: "jon", name: "johnny" },
  ];
  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((c) => (
          <li>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: c.id },
              }}
            >
              {c.name}
            </Link>
            {/* <Link href={`/clients/${c.id}`}>{c.name}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ClientsPage;
