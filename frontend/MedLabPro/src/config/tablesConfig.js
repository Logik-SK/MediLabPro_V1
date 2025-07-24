// 🧾 Billing Table Configuration
export const billingTableConfig = {
  title: 'Billing Information',
  subtitle: 'Displays billing records including payment status and financial summary.',
  columns: [
    { key: 'billNumber', label: 'Bill#', sortable: true, isFilterableColumn: true },
    { key: 'name', label: 'Name', sortable: true, isFilterableColumn: true },
    { key: 'mobile', label: 'Mobile', isFilterableColumn: true },
    { key: 'refDoctor', label: 'Ref Dr.', isFilterableColumn: true },
    { key: 'payable', label: 'Payable', isFilterableColumn: true },
    { key: 'paidAmt', label: 'Paid Amt', isFilterableColumn: true },
    { key: 'due', label: 'Due', isFilterableColumn: true },
    { key: 'discount', label: 'Discount', isFilterableColumn: true },
    { key: 'billDate', label: 'Bill Date', sortable: true, isFilterableColumn: true },
    { key: 'paymentStatus', label: 'Payment', isFilterableColumn: true },
    { key: 'status', label: 'Status', isFilterableColumn: true },
    { key: 'options', label: 'Options', isAction: true }
  ],
  rows: [
    {
      billNumber: 'DUMMY001',
      name: 'John Doe',
      mobile: '9000000001',
      refDoctor: 'Dr. Sample',
      payable: 1500,
      paidAmt: 500,
      due: 1000,
      discount: 0,
      billDate: '10/07/2025',
      paymentStatus: 'Partial',
      status: 'Processing'
    },
    {
      billNumber: 'DUMMY002',
      name: 'Jane Smith',
      mobile: '9000000002',
      refDoctor: 'Dr. Test',
      payable: 2000,
      paidAmt: 2000,
      due: 0,
      discount: 100,
      billDate: '11/07/2025',
      paymentStatus: 'Paid',
      status: 'Completed'
    }
  ]
};

// 🧪 Lab Sample Management Configuration
export const manageLabSampleConfig = {
  title: 'Lab Sample Tracker',
  subtitle: 'Monitors sample details linked to patient tests and billing.',
  columns: [
    { key: 'sampleCode', label: 'Sample Code', sortable: true, isFilterableColumn: true },
    { key: 'billNumber', label: 'Bill Number', sortable: true, isFilterableColumn: true },
    { key: 'patientName', label: 'Patient Name', sortable: true, isFilterableColumn: true },
    { key: 'testName', label: 'Test Name', sortable: true, isFilterableColumn: true },
    { key: 'sampleType', label: 'Sample Type', sortable: true, isFilterableColumn: true },
    { key: 'billDate', label: 'Bill Date', sortable: true, isFilterableColumn: true },
    { key: 'collectedAt', label: 'Collected At', sortable: false, isFilterableColumn: true },
    { key: 'outsource', label: 'Outsource', sortable: false, isFilterableColumn: true }
  ],
  rows: [
    {
      sampleCode: 'D-SMP01',
      billNumber: 'DUMMY001',
      patientName: 'John Doe',
      testName: 'CBC',
      sampleType: 'Blood',
      billDate: '2025-07-10',
      collectedAt: '🧪',
      outsource: 'LabCorp'
    },
    {
      sampleCode: 'D-SMP02',
      billNumber: 'DUMMY002',
      patientName: 'Jane Smith',
      testName: 'X-Ray Chest',
      sampleType: 'Radiology',
      billDate: '2025-07-11',
      collectedAt: '🧪',
      outsource: ''
    }
  ]
};

// 🧍 Patient Information Table Configuration
export const patientTableConfig = {
  title: 'Patient Registry',
  subtitle: 'Stores patient profiles with personal and contact information.',
  columns: [
    { key: 'patientId', label: 'Patient ID', sortable: true, isFilterableColumn: true },
    { key: 'name', label: 'Name', sortable: true, isFilterableColumn: true },
    { key: 'gender', label: 'Gender', isFilterableColumn: true },
    { key: 'age', label: 'Age', sortable: true, isFilterableColumn: true },
    { key: 'mobile', label: 'Mobile', isFilterableColumn: true },
    { key: 'address', label: 'Address', isFilterableColumn: true },
    { key: 'registeredOn', label: 'Reg. Date', sortable: true, isFilterableColumn: true },
    { key: 'status', label: 'Status', isFilterableColumn: true },
    { key: 'options', label: 'Options', isAction: true }
  ],
  rows: [
    {
      patientId: 'D-PAT001',
      name: 'John Doe',
      gender: 'Male',
      age: 40,
      mobile: '9000000001',
      address: 'Newtown',
      registeredOn: '10/07/2025',
      status: 'Active'
    },
    {
      patientId: 'D-PAT002',
      name: 'Jane Smith',
      gender: 'Female',
      age: 35,
      mobile: '9000000002',
      address: 'Salt Lake',
      registeredOn: '11/07/2025',
      status: 'Active'
    }
  ]
};

// 🩺 Referral Doctor Table Configuration
export const ReferralDoctorConfig = {
  title: 'Referral Doctor Directory',
  subtitle: 'Maintains a directory of doctors who refer patients for testing.',
  columns: [
    { key: 'doctorId', label: 'Doctor ID', sortable: true, isFilterableColumn: true },
    { key: 'name', label: 'Name', sortable: true, isFilterableColumn: true },
    { key: 'specialty', label: 'Specialty', isFilterableColumn: true },
    { key: 'contactNumber', label: 'Mobile', isFilterableColumn: true },
    { key: 'email', label: 'Email', isFilterableColumn: true },
    { key: 'status', label: 'Status', isFilterableColumn: true },
    { key: 'joinedOn', label: 'Joined On', sortable: true, isFilterableColumn: true },
    { key: 'options', label: 'Options', isAction: true }
  ],
  rows: [
    {
      doctorId: 'D-DR001',
      name: 'Dr. Sample Man',
      specialty: 'General Medicine',
      contactNumber: '9000000001',
      email: 'sample.man@example.com',
      status: 'Active',
      joinedOn: '01/07/2025'
    },
    {
      doctorId: 'D-DR002',
      name: 'Dr. Test Woman',
      specialty: 'Radiology',
      contactNumber: '9000000002',
      email: 'test.woman@example.com',
      status: 'Inactive',
      joinedOn: '02/07/2025'
    }
  ]
};

//  View Agent List Configuration
export const viewAgentListConfig = {
  title: 'Agent Directory',
  subtitle: 'Displays a list of agents assigned to patient support, sample collection, or coordination.',
  columns: [
    { key: 'agentId', label: 'Agent ID', sortable: true, isFilterableColumn: true },
    { key: 'name', label: 'Name', sortable: true, isFilterableColumn: true },
    { key: 'role', label: 'Role', isFilterableColumn: true },
    { key: 'mobile', label: 'Mobile', isFilterableColumn: true },
    { key: 'email', label: 'Email', isFilterableColumn: true },
    { key: 'assignedZone', label: 'Zone', isFilterableColumn: true },
    { key: 'status', label: 'Status', isFilterableColumn: true },
    { key: 'joinedOn', label: 'Joined On', sortable: true, isFilterableColumn: true },
    { key: 'options', label: 'Options', isAction: true }
  ],
  rows: [
    {
      agentId: 'AG20250714A',
      name: 'Rahul Sengupta',
      role: 'Sample Collector',
      mobile: '9000000003',
      email: 'rahul.sen@example.com',
      assignedZone: 'South Kolkata',
      status: 'Active',
      joinedOn: '09/07/2025'
    },
    {
      agentId: 'AG20250714B',
      name: 'Priya Basu',
      role: 'Patient Support',
      mobile: '9000000004',
      email: 'priya.basu@example.com',
      assignedZone: 'Salt Lake',
      status: 'Inactive',
      joinedOn: '07/07/2025'
    }
  ]
};

// 📅 Manage Appointments Configuration
export const manageAppointmentsConfig = {
  title: 'Appointment Schedule',
  subtitle: 'Displays upcoming and past appointments with patient and doctor details.',
  columns: [
    { key: 'appointmentId', label: 'Appointment ID', sortable: true, isFilterableColumn: true },
    { key: 'patientName', label: 'Patient Name', sortable: true, isFilterableColumn: true },
    { key: 'doctorName', label: 'Doctor Name', sortable: true, isFilterableColumn: true },
    { key: 'appointmentDate', label: 'Date', sortable: true, isFilterableColumn: true },
    { key: 'appointmentTime', label: 'Time', sortable: true, isFilterableColumn: true },
    { key: 'status', label: 'Status', isFilterableColumn: true },
    { key: 'type', label: 'Type', isFilterableColumn: true },
    { key: 'notes', label: 'Notes', isFilterableColumn: true },
    { key: 'options', label: 'Options', isAction: true }
  ],
  rows: [
    {
      appointmentId: 'APT20250719A',
      patientName: 'John Doe',
      doctorName: 'Dr. Anirban Roy',
      appointmentDate: '2025-07-20',
      appointmentTime: '10:00 AM',
      status: 'Confirmed',
      type: 'In-Person',
      notes: 'Regular check-up'
    },
    {
      appointmentId: 'APT20250719B',
      patientName: 'Priya Basu',
      doctorName: 'Dr. Meera Sharma',
      appointmentDate: '2025-07-21',
      appointmentTime: '02:30 PM',
      status: 'Pending',
      type: 'Online',
      notes: 'Consultation for headache'
    }
  ]
};


export const doctorIpDirectoryConfig = {
  title: 'Doctor IP Directory',
  subtitle: 'Provides a comprehensive list of doctors, their specialties, contact information, and IP addresses.',
  columns: [
    { key: 'doctorId', label: 'Doctor ID', sortable: true, isFilterableColumn: true },
    { key: 'doctorName', label: 'Doctor Name', sortable: true, isFilterableColumn: true },
    { key: 'specialty', label: 'Specialty', sortable: true, isFilterableColumn: true },
    { key: 'contactNumber', label: 'Contact Number', sortable: false, isFilterableColumn: true }, // Not typically sortable
    { key: 'email', label: 'Email', sortable: false, isFilterableColumn: true }, // Not typically sortable
    { key: 'clinicAddress', label: 'Clinic Address', sortable: false, isFilterableColumn: true },
    { key: 'ipAddress', label: 'IP Address', sortable: true, isFilterableColumn: true },
    { key: 'status', label: 'Status', isFilterableColumn: true }, // e.g., 'Active', 'Inactive', 'On Leave'
    { key: 'lastLogin', label: 'Last Login', sortable: true, isFilterableColumn: true },
    { key: 'options', label: 'Options', isAction: true }
  ],
  rows: [
    {
      doctorId: 'DOC001',
      doctorName: 'Dr. Anirban Roy',
      specialty: 'Cardiologist',
      contactNumber: '+919876543210',
      email: 'anirban.roy@example.com',
      clinicAddress: '123, Health St, Kolkata',
      ipAddress: '192.168.1.101',
      status: 'Active',
      lastLogin: '2025-07-22 10:30 AM'
    },
    {
      doctorId: 'DOC002',
      doctorName: 'Dr. Meera Sharma',
      specialty: 'Pediatrician',
      contactNumber: '+918765432109',
      email: 'meera.sharma@example.com',
      clinicAddress: '456, Care Lane, Delhi',
      ipAddress: '192.168.1.102',
      status: 'On Leave',
      lastLogin: '2025-07-20 05:00 PM'
    },
    {
      doctorId: 'DOC003',
      doctorName: 'Dr. Suresh Kumar',
      specialty: 'Dermatologist',
      contactNumber: '+917654321098',
      email: 'suresh.kumar@example.com',
      clinicAddress: '789, Skin Clinic, Mumbai',
      ipAddress: '192.168.1.103',
      status: 'Active',
      lastLogin: '2025-07-22 09:15 AM'
    }
  ]
};

export const referralDoctorAccountChecklistConfig = {
  title: 'Referral Doctor Account Checklist',
  subtitle: 'Tracks the onboarding and setup progress for new referral doctor accounts.',
  columns: [
    { key: 'doctorId', label: 'Doctor ID', sortable: true, isFilterableColumn: true },
    { key: 'doctorName', label: 'Doctor Name', sortable: true, isFilterableColumn: true },
    { key: 'accountStatus', label: 'Account Status', sortable: true, isFilterableColumn: true }, // E.g., 'Pending', 'In Progress', 'Completed'
    { key: 'registrationForm', label: 'Registration Form', sortable: true, isFilterableColumn: true }, // E.g., 'Received', 'Pending', 'Approved'
    { key: 'credentialsVerification', label: 'Credentials Verification', sortable: true, isFilterableColumn: true }, // E.g., 'Started', 'Completed', 'Failed'
    { key: 'agreementSigned', label: 'Agreement Signed', sortable: true, isFilterableColumn: true }, // E.g., 'Yes', 'No'
    { key: 'paymentInfoSetup', label: 'Payment Info Setup', sortable: true, isFilterableColumn: true }, // E.g., 'Pending', 'Completed'
    { key: 'portalAccessGranted', label: 'Portal Access Granted', sortable: true, isFilterableColumn: true }, // E.g., 'Yes', 'No'
    { key: 'trainingCompleted', label: 'Training Completed', sortable: true, isFilterableColumn: true }, // E.g., 'Yes', 'No', 'N/A'
    { key: 'onboardingDate', label: 'Onboarding Date', sortable: true, isFilterableColumn: true },
    { key: 'lastUpdated', label: 'Last Updated', sortable: true, isFilterableColumn: true },
    { key: 'assignedTo', label: 'Assigned To', sortable: true, isFilterableColumn: true }, // Person responsible for onboarding
    { key: 'options', label: 'Options', isAction: true } // Actions like 'View Details', 'Update Status'
  ],
  rows: [
    // Example data rows
    {
      doctorId: 'REF001',
      doctorName: 'Dr. Alok Verma',
      accountStatus: 'In Progress',
      registrationForm: 'Received',
      credentialsVerification: 'Started',
      agreementSigned: 'No',
      paymentInfoSetup: 'Pending',
      portalAccessGranted: 'No',
      trainingCompleted: 'No',
      onboardingDate: '2025-07-20',
      lastUpdated: '2025-07-22 10:00 AM',
      assignedTo: 'Onboarding Team A'
    },
    {
      doctorId: 'REF002',
      doctorName: 'Dr. Kavita Singh',
      accountStatus: 'Completed',
      registrationForm: 'Approved',
      credentialsVerification: 'Completed',
      agreementSigned: 'Yes',
      paymentInfoSetup: 'Completed',
      portalAccessGranted: 'Yes',
      trainingCompleted: 'Yes',
      onboardingDate: '2025-07-15',
      lastUpdated: '2025-07-18 02:30 PM',
      assignedTo: 'Onboarding Team B'
    },
    {
      doctorId: 'REF003',
      doctorName: 'Dr. Ramesh Prasad',
      accountStatus: 'Pending',
      registrationForm: 'Pending',
      credentialsVerification: 'N/A', // Not applicable yet
      agreementSigned: 'No',
      paymentInfoSetup: 'N/A',
      portalAccessGranted: 'No',
      trainingCompleted: 'N/A',
      onboardingDate: '2025-07-22',
      lastUpdated: '2025-07-22 09:00 AM',
      assignedTo: 'Onboarding Team A'
    }
  ]
};

export const patientCheckInConfig = {
  title: 'Patient Check-In',
  subtitle: 'Manages patient arrival, confirms appointment details, and updates their check-in status.',
  columns: [
    { key: 'appointmentId', label: 'Appointment ID', sortable: true, isFilterableColumn: true },
    { key: 'patientId', label: 'Patient ID', sortable: true, isFilterableColumn: true },
    { key: 'patientName', label: 'Patient Name', sortable: true, isFilterableColumn: true },
    { key: 'appointmentTime', label: 'Scheduled Time', sortable: true, isFilterableColumn: true },
    { key: 'doctorName', label: 'Doctor', sortable: true, isFilterableColumn: true },
    { key: 'reasonForVisit', label: 'Reason for Visit', sortable: false, isFilterableColumn: true },
    { key: 'checkInTime', label: 'Check-in Time', sortable: true, isFilterableColumn: true },
    { key: 'waitingStatus', label: 'Waiting Status', sortable: true, isFilterableColumn: true }, // E.g., 'Checked In', 'In Waiting Room', 'Called'
    { key: 'paymentCollected', label: 'Payment Collected', sortable: true, isFilterableColumn: true }, // E.g., 'Yes', 'No', 'Partial'
    { key: 'insuranceVerified', label: 'Insurance Verified', sortable: true, isFilterableColumn: true }, // E.g., 'Yes', 'No', 'Pending'
    { key: 'formsCompleted', label: 'Forms Completed', sortable: true, isFilterableColumn: true }, // E.g., 'Yes', 'No'
    { key: 'options', label: 'Options', isAction: true } // Actions like 'Check In', 'Update Status', 'Print Forms'
  ],
  rows: [
    // Example data rows
    {
      appointmentId: 'APT20250723C',
      patientId: 'PAT001',
      patientName: 'Jane Smith',
      appointmentTime: '10:00 AM',
      doctorName: 'Dr. Anirban Roy',
      reasonForVisit: 'Follow-up consultation',
      checkInTime: '09:55 AM',
      waitingStatus: 'Checked In',
      paymentCollected: 'Yes',
      insuranceVerified: 'Yes',
      formsCompleted: 'Yes'
    },
    {
      appointmentId: 'APT20250723D',
      patientId: 'PAT002',
      patientName: 'Rajesh Kumar',
      appointmentTime: '10:30 AM',
      doctorName: 'Dr. Meera Sharma',
      reasonForVisit: 'New patient consultation',
      checkInTime: null, // Not yet checked in
      waitingStatus: 'Scheduled',
      paymentCollected: 'No',
      insuranceVerified: 'Pending',
      formsCompleted: 'No'
    },
    {
      appointmentId: 'APT20250723E',
      patientId: 'PAT003',
      patientName: 'Smita Patel',
      appointmentTime: '11:00 AM',
      doctorName: 'Dr. Suresh Kumar',
      reasonForVisit: 'Routine check-up',
      checkInTime: '10:45 AM',
      waitingStatus: 'In Waiting Room',
      paymentCollected: 'Partial',
      insuranceVerified: 'Yes',
      formsCompleted: 'Yes'
    }
  ]
};