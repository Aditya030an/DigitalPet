import React from "react";

export default function ReturnPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Refund Policy – Digital Pet Clinic
        </h1>
        <p className="text-gray-600 mb-4">
          At <span className="font-semibold">Digital Pet Clinic</span>, we are committed to
          delivering reliable and high-quality veterinary consultation services.
          Please review our refund policy before booking.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            <span className="font-semibold">Non-Refundable Payments:</span> All
            fees paid for consultations, telemedicine services, or any other
            services provided by Digital Pet Clinic are strictly non-refundable.
          </li>
          <li>
            <span className="font-semibold">Cancellations by Clients:</span> If
            you choose to cancel or discontinue a service after booking or
            payment, no refund will be issued.
          </li>
          <li>
            <span className="font-semibold">Rescheduling:</span> Clients may
            request to reschedule a consultation, subject to availability.
            Approval of such requests will be at the sole discretion of Digital
            Pet Clinic.
          </li>
          <li>
            <span className="font-semibold">Service Interruptions:</span> In the
            unlikely event that a service cannot be delivered due to technical
            or operational issues on our side, Digital Pet Clinic may offer an
            alternative arrangement or rescheduling. However, refunds will not
            be provided.
          </li>
        </ul>

        <p className="mt-6 text-gray-600">
          By booking any service with Digital Pet Clinic, you acknowledge and
          agree to this <span className="font-semibold">No Refund Policy</span>.
        </p>
      </div>
    </div>
  );
}
