import React from "react";
import Header from "../components/common/Header";
import RoomList from "../components/dashboard/Roomlist";



const SalesPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title={"Lokale oversigt"} />
<RoomList/>
		</div>
	);
};
export default SalesPage;
