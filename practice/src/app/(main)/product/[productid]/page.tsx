import { Metadata } from "next";
import { title } from "process";
type props ={
    params: Promise<{productid:string}>;
};
export const generateMetadata = async({
    params,
}:props):Promise<Metadata> =>{
    const id = (await params).productid;
    return{
        title: `product ${id}`,
    };
};

export default async function ProductDetails({
    params,
}:{
        params: Promise<{productid:string}>;
}){
    const productid = (await params).productid
    return <h1>Deatils about products {productid}</h1>

}