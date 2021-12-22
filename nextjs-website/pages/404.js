import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <main>
      <section className={"text-center container"}>
        <div className={"row"}>
          <div className={"mx-auto"}>
            <h1 className={"fw-light"}>You fucked up</h1>
            <p className={"lead text-muted"}>this page doesn't exist</p>
            <p>
              you will be redirected back to the <Link href="/">homepage</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
