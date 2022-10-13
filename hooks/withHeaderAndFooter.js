import Header from "../page-assets/header";
import Footer from "../page-assets/footer";

export default function withHeaderAndFooter(Component) {
    return function WithHeaderAndFooter(props) {
        return (
            <>
                <Header />
                <Component {...props} />
                <Footer />
            </>
        );
    };
}
