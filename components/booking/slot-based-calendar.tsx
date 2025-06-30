'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Clock, User, Star, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generateTimeSlots, mockDoctors } from '@/lib/mock-data';
import { TimeSlot, Doctor } from '@/lib/types';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';

interface SlotBasedCalendarProps {
  doctorId: string;
  onSlotSelect: (slot: TimeSlot) => void;
  selectedSlot?: TimeSlot | null;
}

export function SlotBasedCalendar({ doctorId, onSlotSelect, selectedSlot }: SlotBasedCalendarProps) {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [doctor] = useState<Doctor>(mockDoctors[0]); // In real app, fetch by doctorId

  useEffect(() => {
    // Generate time slots for the selected date
    const slots = generateTimeSlots(doctorId, selectedDate);
    setTimeSlots(slots);
  }, [doctorId, selectedDate]);

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newWeek = addDays(currentWeek, direction === 'next' ? 7 : -7);
    setCurrentWeek(newWeek);
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const groupSlotsByType = (slots: TimeSlot[]) => {
    return {
      morning: slots.filter(slot => slot.slotType === 'morning' && slot.isAvailable),
      afternoon: slots.filter(slot => slot.slotType === 'afternoon' && slot.isAvailable),
      evening: slots.filter(slot => slot.slotType === 'evening' && slot.isAvailable)
    };
  };

  const groupedSlots = groupSlotsByType(timeSlots);

  return (
    <div className="space-y-6">
      {/* Doctor Info Header */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-cyan-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-cyan-100">
              <img 
                src={doctor.profileImage} 
                alt={`${doctor.user.firstName} ${doctor.user.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">
                {doctor.user.firstName} {doctor.user.lastName}
              </h2>
              <p className="text-cyan-600 font-medium">{doctor.specialization}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Islamabad Diagnostic Center (IDC)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 (247 reviews)</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Fee:</p>
              <p className="text-2xl font-bold text-slate-900">Rs. {doctor.consultationFee.toLocaleString()}</p>
              <Badge className="bg-blue-100 text-blue-800 mt-1">
                Pay Online & Get Upto 15% OFF
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Date Navigation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-600" />
              Select Date
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateWeek('prev')}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium px-4">
                {format(currentWeek, 'MMM yyyy')}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateWeek('next')}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day, index) => {
              const isSelected = isSameDay(day, selectedDate);
              const isToday = isSameDay(day, new Date());
              const isPast = day < new Date() && !isToday;
              
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDate(day)}
                  disabled={isPast}
                  className={`
                    p-3 rounded-lg text-center transition-all duration-200
                    ${isSelected 
                      ? 'bg-orange-500 text-white shadow-lg' 
                      : isPast
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50'
                    }
                  `}
                >
                  <div className="text-xs text-slate-500 mb-1">
                    {format(day, 'EEE')}
                  </div>
                  <div className={`text-lg font-semibold ${isSelected ? 'text-white' : isToday ? 'text-orange-600' : 'text-slate-900'}`}>
                    {format(day, 'd')}
                  </div>
                  {isToday && !isSelected && (
                    <div className="w-1 h-1 bg-orange-500 rounded-full mx-auto mt-1"></div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Time Slots */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-cyan-600" />
            Available Time Slots - {format(selectedDate, 'MMM dd, yyyy')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Morning Slots */}
          {groupedSlots.morning.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-xs">☀️</span>
                </div>
                <h3 className="font-semibold text-slate-900">Morning Slots</h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {groupedSlots.morning.map((slot) => (
                  <motion.button
                    key={slot.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSlotSelect(slot)}
                    className={`
                      p-3 rounded-lg border text-sm font-medium transition-all duration-200
                      ${selectedSlot?.id === slot.id
                        ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-orange-50'
                      }
                    `}
                  >
                    {formatTime(slot.startTime)}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Afternoon Slots */}
          {groupedSlots.afternoon.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-xs">☀️</span>
                </div>
                <h3 className="font-semibold text-slate-900">Afternoon Slots</h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {groupedSlots.afternoon.map((slot) => (
                  <motion.button
                    key={slot.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSlotSelect(slot)}
                    className={`
                      p-3 rounded-lg border text-sm font-medium transition-all duration-200
                      ${selectedSlot?.id === slot.id
                        ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-orange-50'
                      }
                    `}
                  >
                    {formatTime(slot.startTime)}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Evening Slots */}
          {groupedSlots.evening.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs">🌙</span>
                </div>
                <h3 className="font-semibold text-slate-900">Evening Slots</h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {groupedSlots.evening.map((slot) => (
                  <motion.button
                    key={slot.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSlotSelect(slot)}
                    className={`
                      p-3 rounded-lg border text-sm font-medium transition-all duration-200
                      ${selectedSlot?.id === slot.id
                        ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-orange-50'
                      }
                    `}
                  >
                    {formatTime(slot.startTime)}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* No slots available */}
          {groupedSlots.morning.length === 0 && groupedSlots.afternoon.length === 0 && groupedSlots.evening.length === 0 && (
            <div className="text-center py-8">
              <Clock className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No Available Slots</h3>
              <p className="text-slate-600">Please select a different date to see available time slots.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Satisfaction Stats */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                95% patients feel satisfied after booking appointment from oladoc
              </h3>
              <p className="text-sm text-slate-600">It takes only 30 sec to book an appointment</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}