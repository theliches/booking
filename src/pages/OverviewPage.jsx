import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import FilterComponent from "../components/Dashboard/FilterComponent";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto lg:px-8'>
			<FilterComponent />
			</main>
		</div>
	);
};
export default OverviewPage;
