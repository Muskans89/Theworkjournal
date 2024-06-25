import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import CategoryLinks from '../components/CategoryLinks';
import ServiceSection from '../components/ServiceSection';
import ContactUs from '../components/ContactUs';
import ReadMore from '../components/ReadMore';
import CollectionName from '../components/CollectionName';
import Instagram from '../components/Instagram';


function Home() {
  return (
    <>
    <div className="App">
      <Header />
      <Banner />
      <ReadMore/>
      <CategoryLinks />
      <ProductList />
      <ServiceSection />
      <CollectionName />
      <Instagram />
      <ContactUs />
    </div>
    </>
  )
}


export default Home