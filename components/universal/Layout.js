import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
        
        <body>
            <Header />
                
                    <main>
                        <div className="container">
                            <div className="row">
                                
                                {children}
                                
                            </div>
                        </div>
                    </main>
                
            <Footer />
        </body>
        </>
    );
}
