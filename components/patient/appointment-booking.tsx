'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SlotBasedCalendar } from '@/components/booking/slot-based-calendar';
import { TimeSlot } from '@/lib/types';
import { format } from 'date-fns';
import { toast } from 'sonner';

export function AppointmentBooking() {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<'calendar' | 'details' | 'confirmation'>('calendar');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    appointmentType: '',
    reasonForVisit: '',
    symptoms: '',
    previousTreatments: '',
    urgency: 'normal'
  });

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  const handleContinueToDetails = () => {
    if (!selectedSlot) {
      toast.error('Please select a time slot');
      return;
    }
    setStep('details');
  };

  const handleSubmitAppointment = async () => {
    if (!selectedSlot || !appointmentData.appointmentType || !appointmentData.reasonForVisit) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStep('confirmation');
      toast.success('Appointment booked successfully!');
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (step === 'confirmation') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Appointment Confirmed!
            </h2>
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-slate-900 mb-4">Appointment Details</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-slate-600">Date:</span>
                  <span className="font-medium">{selectedSlot && format(selectedSlot.date, 'MMMM dd, yyyy')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Time:</span>
                  <span className="font-medium">{selectedSlot && formatTime(selectedSlot.startTime)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Type:</span>
                  <span className="font-medium">{appointmentData.appointmentType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Status:</span>
                  <span className="text-green-600 font-medium">Confirmed</span>
                </div>
              </div>
            </div>
            <p className="text-green-700 mb-6">
              You will receive a confirmation email and SMS with appointment details.
              Please arrive 15 minutes early for your appointment.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => {
                  setStep('calendar');
                  setSelectedSlot(null);
                  setAppointmentData({
                    appointmentType: '',
                    reasonForVisit: '',
                    symptoms: '',
                    previousTreatments: '',
                    urgency: 'normal'
                  });
                }}
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-100"
              >
                Book Another Appointment
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                View My Appointments
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Progress Steps */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-8">
            <div className={`flex items-center gap-2 ${step === 'calendar' ? 'text-orange-600' : step === 'details' || step === 'confirmation' ? 'text-green-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'calendar' ? 'bg-orange-100' : step === 'details' || step === 'confirmation' ? 'bg-green-100' : 'bg-slate-100'}`}>
                <Calendar className="h-4 w-4" />
              </div>
              <span className="font-medium">Select Time</span>
            </div>
            <div className={`w-16 h-0.5 ${step === 'details' || step === 'confirmation' ? 'bg-green-600' : 'bg-slate-200'}`}></div>
            <div className={`flex items-center gap-2 ${step === 'details' ? 'text-orange-600' : step === 'confirmation' ? 'text-green-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'details' ? 'bg-orange-100' : step === 'confirmation' ? 'bg-green-100' : 'bg-slate-100'}`}>
                <FileText className="h-4 w-4" />
              </div>
              <span className="font-medium">Details</span>
            </div>
            <div className={`w-16 h-0.5 ${step === 'confirmation' ? 'bg-green-600' : 'bg-slate-200'}`}></div>
            <div className={`flex items-center gap-2 ${step === 'confirmation' ? 'text-green-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'confirmation' ? 'bg-green-100' : 'bg-slate-100'}`}>
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="font-medium">Confirmation</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {step === 'calendar' && (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SlotBasedCalendar
              doctorId="doc-1"
              onSlotSelect={handleSlotSelect}
              selectedSlot={selectedSlot}
            />
          </div>
          <div className="space-y-6">
            {selectedSlot && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Selected Slot</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Date:</span>
                        <span className="font-medium">{format(selectedSlot.date, 'MMM dd, yyyy')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Time:</span>
                        <span className="font-medium">{formatTime(selectedSlot.startTime)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Duration:</span>
                        <span className="font-medium">30 minutes</span>
                      </div>
                    </div>
                    <Button 
                      onClick={handleContinueToDetails}
                      className="w-full mt-4 bg-orange-600 hover:bg-orange-700"
                    >
                      Continue to Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {step === 'details' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="appointmentType">Appointment Type *</Label>
                  <Select
                    value={appointmentData.appointmentType}
                    onValueChange={(value) => setAppointmentData(prev => ({ ...prev, appointmentType: value }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Initial Consultation</SelectItem>
                      <SelectItem value="follow-up">Follow-up Visit</SelectItem>
                      <SelectItem value="emergency">Emergency Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="reasonForVisit">Reason for Visit *</Label>
                  <Textarea
                    id="reasonForVisit"
                    value={appointmentData.reasonForVisit}
                    onChange={(e) => setAppointmentData(prev => ({ ...prev, reasonForVisit: e.target.value }))}
                    placeholder="Please describe your main concern or reason for this appointment..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="symptoms">Current Symptoms</Label>
                  <Textarea
                    id="symptoms"
                    value={appointmentData.symptoms}
                    onChange={(e) => setAppointmentData(prev => ({ ...prev, symptoms: e.target.value }))}
                    placeholder="Describe any symptoms you're experiencing..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="previousTreatments">Previous Treatments</Label>
                  <Textarea
                    id="previousTreatments"
                    value={appointmentData.previousTreatments}
                    onChange={(e) => setAppointmentData(prev => ({ ...prev, previousTreatments: e.target.value }))}
                    placeholder="Any previous treatments or medications for this condition..."
                    className="mt-1"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select
                    value={appointmentData.urgency}
                    onValueChange={(value) => setAppointmentData(prev => ({ ...prev, urgency: value }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep('calendar')}
                    className="flex-1"
                  >
                    Back to Calendar
                  </Button>
                  <Button
                    onClick={handleSubmitAppointment}
                    disabled={isSubmitting}
                    className="flex-1 bg-orange-600 hover:bg-orange-700"
                  >
                    {isSubmitting ? 'Booking...' : 'Book Appointment'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900">Appointment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Date:</span>
                    <span className="font-medium">{selectedSlot && format(selectedSlot.date, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time:</span>
                    <span className="font-medium">{selectedSlot && formatTime(selectedSlot.startTime)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Type:</span>
                    <span className="font-medium">{appointmentData.appointmentType || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Fee:</span>
                    <span className="font-medium">Rs. 3,000</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>Rs. 3,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </div>
  );
}