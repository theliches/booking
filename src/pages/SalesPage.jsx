import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";


const SalesPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Sales Dashboard' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				
			

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					
				</div>
			</main>
		</div>
	);
};
export default SalesPage;
