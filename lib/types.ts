export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'patient' | 'doctor' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Doctor {
  id: string;
  userId: string;
  specialization: string;
  licenseNumber: string;
  experience: number;
  education: string;
  clinicAddress: string;
  consultationFee: number;
  bio?: string;
  profileImage?: string;
  isActive: boolean;
  user: User;
}

export interface Patient {
  id: string;
  userId: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  emergencyContact: string;
  medicalHistory?: string;
  allergies?: string;
  currentMedications?: string;
  user: User;
}

export interface TimeSlot {
  id: string;
  doctorId: string;
  date: Date;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  slotType: 'morning' | 'afternoon' | 'evening';
  maxAppointments: number;
  currentAppointments: number;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  timeSlotId: string;
  appointmentDate: Date;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no-show';
  appointmentType: 'consultation' | 'follow-up' | 'emergency';
  reasonForVisit: string;
  notes?: string;
  prescriptions?: string;
  followUpRequired?: boolean;
  followUpDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  patient: Patient;
  doctor: Doctor;
  timeSlot: TimeSlot;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'appointment' | 'reminder' | 'cancellation' | 'system';
  isRead: boolean;
  createdAt: Date;
  appointmentId?: string;
}

export interface DoctorAvailability {
  id: string;
  doctorId: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string;
  endTime: string;
  slotDuration: number; // in minutes
  breakStartTime?: string;
  breakEndTime?: string;
  isActive: boolean;
}

export interface AppointmentStats {
  totalAppointments: number;
  todayAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  revenue: number;
  patientCount: number;
}