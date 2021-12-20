import Link from 'next/link'

const NotFound = () => {
    return ( 
        <main>
            <section class="text-center container">
                <div class="row">
                    <div class="mx-auto">
                        <h1 class="fw-light">You fucked up</h1>
                        <p class="lead text-muted">this page doesn't exist</p>
                        <p>go back <Link href="/">home</Link></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NotFound