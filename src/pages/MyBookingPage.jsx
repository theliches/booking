import React from "react";

import Header from "../components/common/Header";
import UsersTable from "../components/users/UsersTable";

const MyBookingPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Users' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				
				<UsersTable />

			</main>
		</div>
	);
};
export default MyBookingPage;
