import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-[#FAFAFA]/80 backdrop-blur-[10px] shadow-md rounded-xl sticky top-[20px] z-50 w-auto m-[20px] py-5 px-10 border border-gray-200">
      <div className=" flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-primary bg-clip-text text-transparent">
          PRODUCT
        </Link>
        
        <div className="hidden md:flex items-center space-x-20">
          <Link 
            to="/"
            className={`text-md font-light transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            About
          </Link>
          <Link 
            to="/features" 
            className={`text-md font-light transition-colors hover:text-primary ${
              isActive('/features') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`text-md font-light transition-colors hover:text-primary ${
              isActive('/pricing') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Pricing
          </Link>
        </div>
        
        <Button variant="default" size="lg" className="text-md">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;