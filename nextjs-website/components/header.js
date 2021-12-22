import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
      <div className={"container-fluid"}>
        <Link href="/">
          <a className={"navbar-brand"}>Home</a>
        </Link>
        <button
          className={"navbar-toggler"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={"navbar-toggler-icon"}></span>
        </button>
        <div className={"collapse navbar-collapse"} id="navbarNavAltMarkup">
          <div className={"navbar-nav"}>
            <a className={"nav-item nav-link disabled"}>Test1</a>
            <Link href={"/test1/frequency"}>
              <a
                className={
                  "nav-item nav-link" +
                  (router.pathname == "/test1/frequency" ? " active" : "")
                }
              >
                Frequency
              </a>
            </Link>
            <Link href={"/test1/moneyManagement"}>
              <a
                className={
                  "nav-item nav-link" +
                  (router.pathname == "/test1/moneyManagement" ? " active" : "")
                }
              >
                MoneyManagement
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
