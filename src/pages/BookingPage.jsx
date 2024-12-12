import Header from "../components/common/Header";
import FilterComponent from "../components/Dashboard/FilterComponent";


const BookingPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Booking' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
					<FilterComponent />
			
			</main>
		</div>
	);
};
export default BookingPage;
