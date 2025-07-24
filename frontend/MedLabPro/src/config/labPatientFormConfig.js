// labPatientFormConfig.js
export const basicInfoConfig = [
    {
        type: 'PhoneField', label: 'Phone Number', name: 'phone', required: false, margin: '',
        bindings: { value: 'phone', onChange: 'phone', countryCode: 'countryCode', onCountryCodeChange: 'countryCode' },
        options: { countryCodeOptions: ['+1', '+44', '+91', '+61', '+81', '+2'] }
    },
    {
        type: 'NameField', label: 'Name', name: 'name', required: true, margin: 'top',
        bindings: { value: 'name', onChange: 'name', prefix: 'prefix', onPrefixChange: 'prefix' }
    },
    {
        type: 'GenderField', label: 'Gender', name: 'gender', required: true, margin: 'top',
        bindings: { value: 'gender', onChange: 'gender' }
    },
    {
        type: 'EmailField', label: 'Email', name: 'email', required: true, margin: 'top',
        bindings: { value: 'email', onChange: 'email' }
    },
    {
        type: 'AgeDobField', label: 'Age/DOB', name: 'yearDob', required: true, margin: 'top',
        bindings: { year: 'year', onYearChange: 'year', month: 'month', onMonthChange: 'month', day: 'day', onDayChange: 'day' }
    },
    {
        type: 'TextField', label: 'Ref Doctor', name: 'refDoctor', required: false, margin: 'top',
        bindings: { value: 'refDoctor', onChange: 'refDoctor' }
    },
    {
        type: 'TimestampField', label: 'Appointment Time', name: 'appointmentTime', required: true, margin: 'top',
        bindings: { value: 'appointmentTime', onChange: 'appointmentTime' }
    }
];

export const additionalInformation = [
    {
        type: 'PhoneField', label: 'Phone Number 2', name: 'phone2', required: false, margin: '',
        bindings: { value: 'phone2', onChange: 'phone2', countryCode: 'countryCode2', onCountryCodeChange: 'countryCode2' },
        options: { countryCodeOptions: ['+1', '+44', '+91', '+61', '+81'] }
    },
    {
        type: 'TextField', label: 'Local Area', name: 'localArea', required: false, margin: 'top',
        bindings: { value: 'localArea', onChange: 'localArea' }
    },
    {
        type: 'TextField', label: 'Address', name: 'address', required: false, margin: 'top',
        bindings: { value: 'address', onChange: 'address' }
    },
    {
        type: 'NumberField', label: 'PIN Code', name: 'pinCode', required: true, margin: 'top',
        bindings: { value: 'pinCode', onChange: 'pinCode' }
    },
    {
        type: 'TextField', label: 'City', name: 'city', required: false, margin: 'top',
        bindings: { value: 'city', onChange: 'city' }
    }
];

export const allTests = [
    { name: '2D ECHOCARDIOGRAPHY', price: 1800, amount: 200 },
    { name: '2D ECHOCARDIOGRAPHY', price: 2000 },
    { name: 'AAYUSHYA HEALTH CHECKUP 2', price: 1249 },
    { name: 'ABDOMEN X-RAY AP VIEW', price: 320 },
    { name: 'ABSOLUTE EOSINOPHIL COUNT [AEC]', price: 160 },
    { name: 'ADENOIDS X-RAY LAT VIEW', price: 320 }
];

export const billingInformation = [
    {
        type: 'TimestampField', label: 'Bill Time', name: 'billTime', required: true, margin: 'top',
        bindings: { value: 'billTime', onChange: 'billTime' }
    },
    {
        type: 'SelectField', label: 'Department', name: 'department', required: true, margin: 'top',
        options: [
            { label: 'Cardiology', value: 'cardiologyyyyyyy' },
            { label: 'Neurology', value: 'neurology' },
            { label: 'Pediatrics', value: 'pediatrics' },
            { label: 'Orthopedics', value: 'orthopedics' }
        ],
        bindings: { value: 'department', onChange: 'department' }
    },
    {
        type: 'MultiSelectField', label: 'Services', name: 'services', required: false, margin: 'top',
        options: [
            { label: 'Fast Delivery', value: { service: 'fast_delivery', price: '200' } },
            { label: 'Home Collection', value: { service: 'home_collection', price: '150' } },
            { label: 'Home Coll', value: { service: 'home_coll', price: '150' } },
            { label: 'Online Consultation', value: 'online_consultation' }
        ],
        bindings: { value: 'services', onChange: 'services' }
    },
    {
        type: 'SelectField', label: 'Offer Type', name: 'offer', required: true, margin: 'top',
        options: [
            { label: 'Center Discount', value: { type: 'center_discount', amount: 200 } },
            { label: 'Poor Patient', value: { type: 'poor', amount: 100 } },
            { label: 'None', value: 100 }
        ],
        bindings: { value: 'offer', onChange: 'offer' }
    },
    {
        type: 'CurrencyField', label: 'Doctor Discount', name: 'doctorDiscount', required: false, margin: 'top',
        bindings: { value: 'doctorDiscount', onChange: 'doctorDiscount' }
    },
    {
        type: 'CurrencyField', label: 'Center Discount', name: 'centerDiscount', required: false, margin: 'top',
        bindings: { value: 'centerDiscount', onChange: 'centerDiscount' }
    },
    {
        type: 'TextField', label: 'Comment', name: 'comment', required: false, margin: 'top',
        bindings: { value: 'comment', onChange: 'comment' }
    },
    {
        type: 'TextField', label: 'Agent', name: 'agent', required: false, margin: 'top',
        bindings: { value: 'agent', onChange: 'agent' }
    }
];

export const billingSummary = [];
