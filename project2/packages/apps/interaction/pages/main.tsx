import { 
    Footer, 
    HeaderNavigation,
    ProductDescription, 
    ProductInfo, 
    ProductLast, 
    ProductNavigation, 
    ProductSummary 
} from './components';

export default function Main() {
    return(
        <div className="header">
            <HeaderNavigation />
            <ProductNavigation />
        </div>
    );
}