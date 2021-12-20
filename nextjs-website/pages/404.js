import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=> {
            router.push("/");
        }, 5000)
    },[])

    return ( 
        <main>
            <section class="text-center container">
                <div class="row">
                    <div class="mx-auto">
                        <h1 class="fw-light">You fucked up</h1>
                        <p class="lead text-muted">this page doesn't exist</p>
                        <p>you will be redirected back to the <Link href="/">homepage</Link>.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NotFound