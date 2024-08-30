import EmptyList from '@/components/global/EmptyList';
import { deleteProductAction, fetchAdminProducts } from '@/utils/actions';
import Link from 'next/link';
import { formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { LuTrash2, LuPenSquare } from 'react-icons/lu';
import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';

async function AdminProducts() {
  const items = await fetchAdminProducts();
  const headClassName = 'text-left px-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground dark:text-muted-foreground border-r border-card'
  if (items.length === 0) return <EmptyList />;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Manage Products</h1>
      <Table>
        <TableCaption>Total Products: {items.length}</TableCaption>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className={headClassName}>
              Product Name
            </TableHead>
            <TableHead className={headClassName}>
              Company
            </TableHead>
            <TableHead className={headClassName}>
              Price
            </TableHead>
            <TableHead className="text-left px-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground dark:text-muted-foreground">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const { id: productId, name, company, price } = item;
            return (
              <TableRow key={productId} className='group'>
                <TableCell className="text-card-foreground px-4 dark:text-card-foreground underline">
                  <Link href={`/products/${productId}`} className='group-hover:text-primary dark:group-hover:text-secondary'>
                    {name}
                  </Link>
                </TableCell>
                <TableCell className="text-card-foreground px-4 dark:text-card-foreground">{company}</TableCell>
                <TableCell className="text-card-foreground px-4 dark:text-card-foreground">{formatCurrency(price)}</TableCell>
                <TableCell className="flex items-center gap-x-2">
                    <Link href={`/admin/products/${productId}/edit`} className='flex items-center'>
                        <IconButton actionType='edit' />
                    </Link>
                    <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

function DeleteProduct ({productId}:{productId:string}){
    const deleteProduct = deleteProductAction.bind(null, {productId})
    return (
        <FormContainer action={deleteProduct}>
            <IconButton actionType='delete' />
        </FormContainer>
    )
}

export default AdminProducts;
