
async function fetchDataAndCount(apiUrl) {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data.length; // Assuming the API returns an array
	} catch (error) {
		console.error('Fetch error:', error);
		return 0; // Return 0 in case of an error
	}
}
document.addEventListener('DOMContentLoaded', async () => {
	const totalPatientCount = await fetchDataAndCount('api/patients');
	const totalDoctorCount = await fetchDataAndCount('api/doctors');
	const totalAppointmentCount = await fetchDataAndCount('api/appointment');
	const totalBillingCount = await fetchDataAndCount('api/billing');

	document.getElementById('total-patient-count').textContent = ` ${totalPatientCount}`;
	document.getElementById('total-doctor-count').textContent = ` ${totalDoctorCount}`;
	document.getElementById('total-Appointment-count').textContent = ` ${totalAppointmentCount}`;
	// document.getElementById('total-billing-count').textContent = ` ${totalBillingCount}`;

});