import ProductsContainer from "@/components/products/ProductsContainer";

function Products({ searchParams }:{ searchParams:{layout?:string; search?:string } }){
  console.log(searchParams)
  const layout = searchParams.layout || 'grid'
  const search = searchParams.search || ''
    return(
      <ProductsContainer layout={layout} search={search}/>
    )
  }
  
  export default Products