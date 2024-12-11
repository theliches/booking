import Header from "../components/common/Header";
import FilterComponent from "../components/Dashboard/FilterComponent";


const ProductsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Products' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
					<FilterComponent />
					
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
				
				</div>
			</main>
		</div>
	);
};
export default ProductsPage;
