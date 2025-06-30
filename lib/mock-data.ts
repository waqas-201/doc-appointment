import { Doctor, Patient, Appointment, TimeSlot, DoctorAvailability } from './types';

export const mockDoctors: Doctor[] = [
  {
    id: 'doc-1',
    userId: 'user-doc-1',
    specialization: 'Dermatology',
    licenseNumber: 'MD-12345',
    experience: 12,
    education: 'MBBS, MD Dermatology from Aga Khan University',
    clinicAddress: 'Suite 201, Medical Complex, Main Shahrah-e-Faisal, Karachi',
    consultationFee: 3000,
    bio: 'Specialized in medical and cosmetic dermatology with over 12 years of experience.',
    profileImage: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
    isActive: true,
    user: {
      id: 'user-doc-1',
      email: 'dr.ayesha@clinic.com',
      firstName: 'Dr. Ayesha',
      lastName: 'Khan',
      phone: '+92 321 1234567',
      role: 'doctor',
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2024-01-01')
    }
  }
];

export const mockPatients: Patient[] = [
  {
    id: 'pat-1',
    userId: 'user-pat-1',
    dateOfBirth: new Date('1990-05-15'),
    gender: 'female',
    emergencyContact: '+92 321 9876543',
    medicalHistory: 'No significant medical history',
    allergies: 'None known',
    currentMedications: 'None',
    user: {
      id: 'user-pat-1',
      email: 'sarah.ahmed@email.com',
      firstName: 'Sarah',
      lastName: 'Ahmed',
      phone: '+92 321 1111111',
      role: 'patient',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01')
    }
  },
  {
    id: 'pat-2',
    userId: 'user-pat-2',
    dateOfBirth: new Date('1985-08-22'),
    gender: 'male',
    emergencyContact: '+92 321 8765432',
    medicalHistory: 'Hypertension',
    allergies: 'Penicillin',
    currentMedications: 'Lisinopril 10mg daily',
    user: {
      id: 'user-pat-2',
      email: 'hassan.m@email.com',
      firstName: 'Muhammad',
      lastName: 'Hassan',
      phone: '+92 321 2222222',
      role: 'patient',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01')
    }
  }
];

export const generateTimeSlots = (doctorId: string, date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const baseDate = new Date(date);
  
  // Morning slots (9 AM - 12 PM)
  const morningSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
  morningSlots.forEach((time, index) => {
    const endTime = morningSlots[index + 1] || '12:00';
    slots.push({
      id: `slot-${doctorId}-${date.toISOString().split('T')[0]}-${time}`,
      doctorId,
      date: baseDate,
      startTime: time,
      endTime,
      isAvailable: Math.random() > 0.3, // 70% chance of being available
      slotType: 'morning',
      maxAppointments: 1,
      currentAppointments: Math.random() > 0.7 ? 1 : 0
    });
  });

  // Afternoon slots (2 PM - 6 PM)
  const afternoonSlots = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
  afternoonSlots.forEach((time, index) => {
    const endTime = afternoonSlots[index + 1] || '18:00';
    slots.push({
      id: `slot-${doctorId}-${date.toISOString().split('T')[0]}-${time}`,
      doctorId,
      date: baseDate,
      startTime: time,
      endTime,
      isAvailable: Math.random() > 0.3,
      slotType: 'afternoon',
      maxAppointments: 1,
      currentAppointments: Math.random() > 0.7 ? 1 : 0
    });
  });

  // Evening slots (7 PM - 9 PM)
  const eveningSlots = ['19:00', '19:30', '20:00', '20:30'];
  eveningSlots.forEach((time, index) => {
    const endTime = eveningSlots[index + 1] || '21:00';
    slots.push({
      id: `slot-${doctorId}-${date.toISOString().split('T')[0]}-${time}`,
      doctorId,
      date: baseDate,
      startTime: time,
      endTime,
      isAvailable: Math.random() > 0.4,
      slotType: 'evening',
      maxAppointments: 1,
      currentAppointments: Math.random() > 0.8 ? 1 : 0
    });
  });

  return slots;
};

export const mockAppointments: Appointment[] = [
  {
    id: 'apt-1',
    patientId: 'pat-1',
    doctorId: 'doc-1',
    timeSlotId: 'slot-doc-1-2024-01-15-10:00',
    appointmentDate: new Date('2024-01-15'),
    startTime: '10:00',
    endTime: '10:30',
    status: 'confirmed',
    appointmentType: 'consultation',
    reasonForVisit: 'Acne treatment consultation',
    notes: 'First-time patient, severe acne condition',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    patient: mockPatients[0],
    doctor: mockDoctors[0],
    timeSlot: {
      id: 'slot-doc-1-2024-01-15-10:00',
      doctorId: 'doc-1',
      date: new Date('2024-01-15'),
      startTime: '10:00',
      endTime: '10:30',
      isAvailable: false,
      slotType: 'morning',
      maxAppointments: 1,
      currentAppointments: 1
    }
  },
  {
    id: 'apt-2',
    patientId: 'pat-2',
    doctorId: 'doc-1',
    timeSlotId: 'slot-doc-1-2024-01-15-14:00',
    appointmentDate: new Date('2024-01-15'),
    startTime: '14:00',
    endTime: '14:30',
    status: 'pending',
    appointmentType: 'follow-up',
    reasonForVisit: 'Follow-up for eczema treatment',
    notes: 'Check progress on topical medications',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12'),
    patient: mockPatients[1],
    doctor: mockDoctors[0],
    timeSlot: {
      id: 'slot-doc-1-2024-01-15-14:00',
      doctorId: 'doc-1',
      date: new Date('2024-01-15'),
      startTime: '14:00',
      endTime: '14:30',
      isAvailable: false,
      slotType: 'afternoon',
      maxAppointments: 1,
      currentAppointments: 1
    }
  }
];