import Header from "../components/common/Header";
import React from "react";
import BookingComponent from "../components/Dashboard/BookingComponent";
import BookingListComponent from "../components/Dashboard/BookingListComponent";


const DashboardPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Book Lokale' />

	<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
					<BookingComponent />
							
		<div className="booking-page">
      <BookingListComponent />
    </div>
			</main>
		</div>
	);
};



export default DashboardPage;




