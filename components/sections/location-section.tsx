'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Section as Directions } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LocationSection() {
  const clinicHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          {...{ className: "text-center mb-16" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conveniently located in the heart of the city with easy access and parking facilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 bg-slate-100">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.727010644645!2d67.0011364!3d24.8962308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f90c8133f87%3A0x3c9f5210e5e2c5b8!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Ayesha Khan Clinic Location"
                    className="rounded-lg"
                  />

                  {/* Directions overlay */}
                  <div className="absolute bottom-4 right-4">
                    <Button
                      size="sm"
                      className="bg-white hover:bg-slate-50 text-slate-900 shadow-lg"
                      onClick={() => window.open('https://maps.google.com/?q=Karachi+Pakistan', '_blank')}
                    >
                      <Directions className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Clinic Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            {...{ className: "space-y-8" }}
          >
            {/* Address */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Clinic Address</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Suite 201, Medical Complex<br />
                      Main Shahrah-e-Faisal<br />
                      Karachi, Pakistan 75400
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Contact Information</h3>
                    <div className="space-y-1 text-slate-600">
                      <p>Phone: +92 321 1234567</p>
                      <p>Fax: +92 21 1234567</p>
                      <p>Email: info@drayesha.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Clinic Hours</h3>
                    <div className="space-y-3">
                      {clinicHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-slate-600">{schedule.day}</span>
                          <span className="font-medium text-slate-900">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-cyan-50 rounded-lg">
                      <p className="text-sm text-cyan-800">
                        <strong>Emergency:</strong> For urgent skin conditions, call our emergency line at +92 300 1234567
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parking & Accessibility */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Parking & Accessibility</h3>
                <div className="space-y-2 text-slate-600">
                  <p>• Free parking available in building garage</p>
                  <p>• Wheelchair accessible entrance and elevator</p>
                  <p>• Public transport: Bus stop 50m from building</p>
                  <p>• Nearby landmarks: City Mall, Central Hospital</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}