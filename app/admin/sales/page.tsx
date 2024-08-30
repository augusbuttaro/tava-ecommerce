import { fetchAdminOrders } from '@/utils/actions';
import { formatCurrency, formatDate } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SectionIcon } from '@radix-ui/react-icons';
import SectionTitle from '@/components/global/SectionTitle';

{/* Display all users' sales */}

async function Sales(){
  const orders = await fetchAdminOrders();
  const headClassName = 'text-left px-4 text-xs lg:text-sm font-semibold uppercase tracking-wide text-muted-foreground dark:text-muted-foreground border-r border-card';
  if (orders.length === 0) return <SectionTitle text="No sales found." />;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Sales Overview</h1>
      <Table>
        <TableCaption>Total Orders: {orders.length}</TableCaption>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className={headClassName}>Email</TableHead>
            <TableHead className={headClassName}>Products</TableHead>
            <TableHead className={headClassName}>Order Total</TableHead>
            <TableHead className={headClassName}>Tax</TableHead>
            <TableHead className={headClassName}>Shipping</TableHead>
            <TableHead className={headClassName}>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="group">
              <TableCell className="text-card-foreground text-xs lg:text-sm px-4 dark:text-card-foreground">
                {order.email}
              </TableCell>
              <TableCell className="text-card-foreground text-xs lg:text-sm px-4 dark:text-card-foreground">
                {order.products}
              </TableCell>
              <TableCell className="text-card-foreground text-xs lg:text-sm px-4 dark:text-card-foreground">
                {formatCurrency(order.orderTotal)}
              </TableCell>
              <TableCell className="text-card-foreground text-xs lg:text-sm px-4 dark:text-card-foreground">
                {formatCurrency(order.tax)}
              </TableCell>
              <TableCell className="text-card-foreground text-xs lg:text-sm px-4 dark:text-card-foreground">
                {formatCurrency(order.shipping)}
              </TableCell>
              <TableCell className="text-card-foreground px-4 dark:text-card-foreground">
                {formatDate(order.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default Sales;
