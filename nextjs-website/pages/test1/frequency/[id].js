import { executeQuery } from "../../../lib/db";
import Link from "next/link";
import Details from "../../../comps/Details";

export const getStaticPaths = async () => {
    const res = await executeQuery({query:'SELECT * FROM test1.frequency;'});
    const data = await JSON.parse(JSON.stringify(res));

    const paths = data.map(freq => {
        return { 
            params: { id: freq.idFrequency.toString() }
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await executeQuery({query:'SELECT * FROM test1.frequency where idFrequency = ' + id});
    const data = await JSON.parse(JSON.stringify(res[0]));
    
    return {
        props: { frequency: data }
    }
}

const DetailsPage = ({frequency}) => { 
    return (
        <>
        <Details title={frequency.description}/>
            <section>
                <div class="form-group row">
                    <label for="staticEmail" class="col-lg-4 col-form-label">Expression</label>
                    <div class="col-lg-8">
                    <p>{frequency.expression}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsPage;