import { fetchRevenue } from '@/app/lib/data';
import RevenueChart from '../ui/dashboard/revenue-chart';

export default async function Page() {
  const revenue = await fetchRevenue();
  return <RevenueChart revenue={revenue} />;
}
