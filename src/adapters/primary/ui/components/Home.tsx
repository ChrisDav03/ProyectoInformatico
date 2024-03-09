import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { logout } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>

          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </>
      ) : (
        <p>
          El usuario no se ha logueado ¿Deseas{" "}
          <a
            href="/signin"
            style={{ color: "red", textDecoration: "underline" }}
          >
            loguearte
          </a>
          ?
        </p>
      )}
    </div>
  );
}

export default Home;
