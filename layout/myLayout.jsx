import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const MyLayout = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    );
};

export default MyLayout;