import { redirect } from 'next/navigation';
import { AppointmentDashboard } from '@/components/dashboard/appointment-dashboard';
import { auth, currentUser } from '@clerk/nextjs/server'


export default async function DashboardPage() {

  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AppointmentDashboard />
    </div>
  );
}