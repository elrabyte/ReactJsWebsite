import Link from "next/link"

const Details = ({title, subTitle = "Details", returnLink = "./", returnLinkDescription = "Return to Overview" }) => {
  return (    
    <section class="text-center container">
      <div class="row">
          <div class="mx-auto">
              <h1 class="fw-light">{title}</h1>
              <p class="lead text-muted">{subTitle} / <Link href={returnLink}><a>{returnLinkDescription}</a></Link></p>
          </div>
      </div>
    </section>
  )
}

export default Details