import Link from "next/link";
export default function home(){
    return(
        <>
        <h1>Welcome To HomePage!</h1>
        <Link href="/articles/breaking-news-123?lang=en">
          Read in English
        </Link>
        <Link href="/articles/breaking-news-123?lang=fr">
          Read in French
        </Link>
      </>
    );
}