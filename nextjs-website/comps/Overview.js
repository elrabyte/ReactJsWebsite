import Link from "next/link";
import { useRouter } from "next/router";

const Overview = ({
  title,
  items = [{ id, title, subTitle }],
  subTitle = "Overview",
}) => {
  const router = useRouter();
  return (
    <>
      <section className={"text-center container"}>
        <div className={"row"}>
          <div className={"mx-auto"}>
            <h1 className={"fw-light"}>Frequency</h1>
            <p className={"lead text-muted"}>Overview</p>
          </div>
        </div>
      </section>
      <section>
        <div className={"list-group"}>
          {items.map((item) => (
            <Link
              href={router.pathname + "/" + item.id.toString()}
              key={item.id}
            >
              <a className={"list-group-item list-group-item-action"}>
                <h5>{item.title}</h5>
                <small className={"text-muted"}>{item.subTitle}</small>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Overview;
