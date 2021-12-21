import Link from "next/link";
import { executeQuery } from "../../../lib/db";
// import getFrequencies from "../api/test1/getFrequencies"

function Frequency ({frequencies}) {
    return (
        <main>
            <section class="text-center container">
                <div class="row">
                    <div class="mx-auto">
                        <h1 class="fw-light">Frequency</h1>
                        <p class="lead text-muted">Overview</p>
                    </div>
                </div>
            </section>
            <section>
                <div class="list-group">
                    {frequencies.map(freq => (
                        <Link href={"./frequency/" + freq.idFrequency } key={freq.idFrequency}>
                            <a class="list-group-item list-group-item-action ">
                                <h5>{freq.description}</h5>
                                <small class="text-muted">{freq.expression}</small>
                            </a>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}


export async function getStaticProps() {
    
    const res = await executeQuery({query:'SELECT * FROM test1.frequency;'});
    const data = await JSON.parse(JSON.stringify(res));
    return {
        props: {
            frequencies: data,
        },
    }
}

export default Frequency