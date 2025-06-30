import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { PatientDashboard } from '@/components/patient/patient-dashboard';

export default async function PatientDashboardPage() {

  const { userId } = await auth()

  if (!userId) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <PatientDashboard />
    </div>
  );
}