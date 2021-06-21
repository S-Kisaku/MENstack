import Layout from '../components/templates/layout'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
    const [ session, loading ] = useSession();

    return (
        <Layout title="Welcome to pomodoro app!">
            {session
                ? <>
                    Signed in as {session.user.email} 
                    {console.log(session.user.email)}
                    <br/>
                    <button onClick={signOut}>Sign out</button>
                </>
                : <>
                    Not signed in 
                    <br/>
                    <button onClick={signIn}>Sign in</button>
                </>
            }
        </Layout>
    )
}
