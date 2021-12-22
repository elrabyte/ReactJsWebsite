import Overview from "../../../comps/Overview";
import getFrequencies from "../../../lib/test1/frequency/getFrequencies";

function Frequency({ frequencies }) {
  return (
    <Overview
      title="Frequency"
      subTitle="Overview"
      items={frequencies.map((freq) => {
        return {
          id: freq.idFrequency,
          title: freq.description,
          subTitle: freq.expression,
        };
      })}
    />
  );
}

export async function getStaticProps() {
  const res = await getFrequencies();
  const data = await JSON.parse(JSON.stringify(res));
  return {
    props: {
      frequencies: data,
    },
  };
}

export default Frequency;
