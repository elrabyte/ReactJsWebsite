import getMoneyManagement from "../../../lib/test1/moneyManagement/getMoneyManagement";
import getMoneyManagementEntries from "../../../lib/test1/moneyManagement/getMoneyManagementEntries";
import Details from "../../../components/Details";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const moneyManagement = await getMoneyManagement(id);
  const data = await JSON.parse(JSON.stringify(moneyManagement[0]));
  const moneyManagementEntries = await getMoneyManagementEntries(id);
  const entries = await JSON.parse(JSON.stringify(moneyManagementEntries));
  

  return {
    props: { moneyManagement: data, entries: entries },
  };
};

const DetailsPage = ({ moneyManagement, entries }) => {
  return (
    <>
      <Details title={moneyManagement.title} />
      <section>
        <div className={"form-group row"}>
          <label htmlFor={"staticEmail"} className={"col-lg-4 col-form-label"}>
            Expression
          </label>
          <div className={"col-lg-8"}>
            <p>{moneyManagement.title}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
