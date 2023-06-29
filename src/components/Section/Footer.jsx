import { footer } from "../../constants/strings/fa";

const Footer = () => {
    return ( <footer className="container h-20 mt-auto mx-auto text-xs text-center font-IRANSansWeb">
       <p className="mb-2">{footer.text}</p>
       <span>{footer.version}</span>
    </footer> );
}
 
export default Footer;