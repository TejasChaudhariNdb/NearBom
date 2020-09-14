import BottomNav from "./components/BottomNav.js";
import Link from 'next/link'

export default function Home() {
  return (
    <>

     <h1>Home Page</h1>
  <pre>   
#Home <br/>
1) Feauture Shop <br/>
2) New Launch product<br/>
3) Categorys <br/>
4) Search Bar <br/>
</pre>
<br/><br/>
<a href="shop/">Shop By A tag</a>
<br/><br/>
<a href="/shop">Shop By A tag</a>
<br/><br/>
<Link href="/shop">
          <a>Shop by Link Tag </a>
        </Link>
      <BottomNav />
    </>
  );
}
