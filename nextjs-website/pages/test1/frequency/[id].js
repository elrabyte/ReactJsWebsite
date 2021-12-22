import getFrequencies from "../../../lib/test1/frequency/getFrequencies";
import Details from "../../../components/Details";
import getFrequency from "../../../lib/test1/frequency/getFrequency";

export const getStaticPaths = async () => {
  const res = await getFrequencies();
  const data = await JSON.parse(JSON.stringify(res));

  const paths = data.map((freq) => {
    return {
      params: { id: freq.idFrequency.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await getFrequency(id);
  const data = await JSON.parse(JSON.stringify(res[0]));

  return {
    props: { frequency: data },
  };
};

const DetailsPage = ({ frequency }) => {
  return (
    <>
      <Details title={frequency.description} />
      <section>
        <div className={"form-group row"}>
          <label htmlFor={"staticEmail"} className={"col-lg-4 col-form-label"}>
            Expression
          </label>
          <div className={"col-lg-8"}>
            <p>{frequency.expression}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
