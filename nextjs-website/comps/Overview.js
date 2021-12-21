import Link from "next/link"
import { useRouter } from "next/router"

const Overview = ({title, items = [{ id, title, subTitle }], subTitle = "Overview", }) => {
  const router = useRouter()
  return (    <>
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
        {items.map(item => (
            <Link href={router.pathname + "/" + item.id.toString() } key={ item.id }>
                <a class="list-group-item list-group-item-action ">
                    <h5>{ item.title }</h5>
                    <small class="text-muted">{ item.subTitle }</small>
                </a>
            </Link>
        ))}
    </div>
</section>
</>
  )
}

export default Overview