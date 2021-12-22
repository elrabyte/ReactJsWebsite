import Link from "next/link";
import { useRouter } from "next/router";

const Details = ({
  title,
  subTitle = "Details",
  returnLink = "./",
  returnLinkDescription = "Return to Overview",
}) => {
  return (
    <section className={"text-center container"}>
      <div className={"row"}>
        <div className={"mx-auto"}>
          <h1 className={"fw-light"}>{title}</h1>
          <p className={"lead text-muted"}>
            {subTitle} /{" "}
            <Link href={returnLink}>
              <a>{returnLinkDescription}</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
