import Head from 'next/head'
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
<>
<Head>
        <title>RenZer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Button variant="contained" className="login"> Button</Button>
<Button variant="outlined" className="login" > Button2</Button>

</>

  )
}
