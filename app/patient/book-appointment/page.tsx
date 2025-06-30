import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { AppointmentBooking } from '@/components/patient/appointment-booking';

export default function BookAppointmentPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Book Appointment</h1>
          <p className="text-slate-600">Schedule your consultation with our expert doctors</p>
        </div>
        <AppointmentBooking />
      </div>
    </div>
  );
}