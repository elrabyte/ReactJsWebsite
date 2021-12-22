import Overview from "../../../components/Overview";
import getMoneyManagements from "../../../lib/test1/moneyManagement/getMoneyManagements";

function Frequency({ moneyManagements }) {
  return (
    <Overview
      title="Moneymanagement"
      subTitle="Overview"
      items={moneyManagements.map((mm) => {
        return {
          id: mm.idMoneyManagement,
          title: mm.title,
          subTitle: "",
        };
      })}
    />
  );
}

export async function getStaticProps() {
  const res = await getMoneyManagements();
  const data = await JSON.parse(JSON.stringify(res));
  return {
    props: {
      moneyManagements: data,
    },
  };
}

export default Frequency;
