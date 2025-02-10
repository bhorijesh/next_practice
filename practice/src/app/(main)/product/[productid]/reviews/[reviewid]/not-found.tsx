"use client";
import { usePathname } from "next/navigation";

export default function Notfound(){
    const pathname = usePathname();
    const productid = pathname.split('/')[2];
    const reviewid = pathname.split('/')[4];
    return(
        <div>
            <h1>review for {productid} Not found in {reviewid}</h1>

        </div>
    );
}
