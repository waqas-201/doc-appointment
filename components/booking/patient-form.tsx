'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const patientFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['male', 'female', 'other']),
  appointmentType: z.string().min(1, 'Please select an appointment type'),
  reasonForVisit: z.string().min(10, 'Please provide more details about your visit'),
  previousTreatments: z.string().optional(),
  medications: z.string().optional(),
  allergies: z.string().optional(),
  emergencyContact: z.string().min(10, 'Emergency contact is required'),
  emergencyRelation: z.string().min(1, 'Emergency contact relationship is required'),
  consentTreatment: z.boolean().refine(val => val === true, 'Treatment consent is required'),
  consentPrivacy: z.boolean().refine(val => val === true, 'Privacy policy consent is required'),
});

type PatientFormData = z.infer<typeof patientFormSchema>;

export function PatientForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<PatientFormData>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: undefined,
      appointmentType: '',
      reasonForVisit: '',
      previousTreatments: '',
      medications: '',
      allergies: '',
      emergencyContact: '',
      emergencyRelation: '',
      consentTreatment: false,
      consentPrivacy: false,
    },
  });

  const onSubmit = async (data: PatientFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Patient form data:', data);

      setIsSubmitted(true);
      toast.success('Appointment request submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit appointment request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            Appointment Request Submitted!
          </h3>
          <p className="text-green-700 mb-4">
            Thank you for choosing Dr. Ayesha Khan. We&apos;ll confirm your appointment within 24 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-green-300 text-green-700 hover:bg-green-100"
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              {...form.register('fullName')}
              placeholder="Enter your full name"
              className="mt-1"
            />
            {form.formState.errors.fullName && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.fullName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              placeholder="your.email@example.com"
              className="mt-1"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              {...form.register('phone')}
              placeholder="+92 321 1234567"
              className="mt-1"
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <Input
              id="dateOfBirth"
              type="date"
              {...form.register('dateOfBirth')}
              className="mt-1"
            />
            {form.formState.errors.dateOfBirth && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.dateOfBirth.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label>Gender *</Label>
          <RadioGroup
            value={form.watch('gender')}
            onValueChange={(value) => form.setValue('gender', value as 'male' | 'female' | 'other')}
            className="flex gap-6 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
          {form.formState.errors.gender && (
            <p className="text-sm text-red-600 mt-1">{form.formState.errors.gender.message}</p>
          )}
        </div>
      </div>

      {/* Appointment Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Appointment Details</h3>

        <div>
          <Label htmlFor="appointmentType">Appointment Type *</Label>
          <Select
            value={form.watch('appointmentType')}
            onValueChange={(value) => form.setValue('appointmentType', value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select appointment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="initial">Initial Consultation (45 mins)</SelectItem>
              <SelectItem value="followup">Follow-up Visit (30 mins)</SelectItem>
              <SelectItem value="telemedicine">Telemedicine (30 mins)</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.appointmentType && (
            <p className="text-sm text-red-600 mt-1">{form.formState.errors.appointmentType.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="reasonForVisit">Reason for Visit *</Label>
          <Textarea
            id="reasonForVisit"
            {...form.register('reasonForVisit')}
            placeholder="Please describe your skin concern or reason for consultation..."
            className="mt-1"
            rows={3}
          />
          {form.formState.errors.reasonForVisit && (
            <p className="text-sm text-red-600 mt-1">{form.formState.errors.reasonForVisit.message}</p>
          )}
        </div>
      </div>

      {/* Medical History */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Medical History</h3>

        <div>
          <Label htmlFor="previousTreatments">Previous Dermatological Treatments</Label>
          <Textarea
            id="previousTreatments"
            {...form.register('previousTreatments')}
            placeholder="List any previous skin treatments, surgeries, or procedures..."
            className="mt-1"
            rows={2}
          />
        </div>

        <div>
          <Label htmlFor="medications">Current Medications</Label>
          <Textarea
            id="medications"
            {...form.register('medications')}
            placeholder="List all current medications, supplements, and topical treatments..."
            className="mt-1"
            rows={2}
          />
        </div>

        <div>
          <Label htmlFor="allergies">Known Allergies</Label>
          <Textarea
            id="allergies"
            {...form.register('allergies')}
            placeholder="List any known allergies to medications, foods, or substances..."
            className="mt-1"
            rows={2}
          />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Emergency Contact</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="emergencyContact">Emergency Contact Number *</Label>
            <Input
              id="emergencyContact"
              {...form.register('emergencyContact')}
              placeholder="+92 321 9876543"
              className="mt-1"
            />
            {form.formState.errors.emergencyContact && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.emergencyContact.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="emergencyRelation">Relationship *</Label>
            <Input
              id="emergencyRelation"
              {...form.register('emergencyRelation')}
              placeholder="e.g., Spouse, Parent, Sibling"
              className="mt-1"
            />
            {form.formState.errors.emergencyRelation && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.emergencyRelation.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Consent & Agreement</h3>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consentTreatment"
              checked={form.watch('consentTreatment')}
              onCheckedChange={(checked) => form.setValue('consentTreatment', !!checked)}
            />
            <Label htmlFor="consentTreatment" className="text-sm leading-relaxed">
              I consent to examination and treatment by Dr. Ayesha Khan and understand that
              no guarantee has been made regarding the outcome of treatment. *
            </Label>
          </div>
          {form.formState.errors.consentTreatment && (
            <p className="text-sm text-red-600">{form.formState.errors.consentTreatment.message}</p>
          )}

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consentPrivacy"
              checked={form.watch('consentPrivacy')}
              onCheckedChange={(checked) => form.setValue('consentPrivacy', !!checked)}
            />
            <Label htmlFor="consentPrivacy" className="text-sm leading-relaxed">
              I have read and agree to the Privacy Policy and Terms of Service.
              I consent to the collection and use of my personal health information. *
            </Label>
          </div>
          {form.formState.errors.consentPrivacy && (
            <p className="text-sm text-red-600">{form.formState.errors.consentPrivacy.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Submitting Request...
          </>
        ) : (
          'Submit Appointment Request'
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you acknowledge that you have read and understood our
        patient privacy practices and consent to the collection of your personal health information.
      </p>
    </form>
  );
}