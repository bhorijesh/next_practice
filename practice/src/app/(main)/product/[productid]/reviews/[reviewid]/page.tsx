import { notFound } from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random()* count);
}

export default async function ProductReview({
    params,
}:{
    params :Promise<{productid : string; reviewid : string}>;
}){
    const random = getRandomInt(2);
    if(random==1){
        throw new Error("Error Loading Review")
    }
    const {productid , reviewid} = await params
    if (parseInt(reviewid)>100){
        notFound();
    }
    return (
        <h1>
            Product {productid} Reviewd By {reviewid}
        </h1>
    )
}