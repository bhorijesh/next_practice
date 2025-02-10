export default async function ProductDetails({
    params,
}:{
        params: Promise<{productid:string}>;
}){
    const productid = (await params).productid
    return <h1>Deatils about products {productid}</h1>

}