import { Link } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';



const Navbar = () => {
  return (
      <nav className="border  shadow-2xl"  style={{
  background: 'linear-gradient(to right,#22D3EE, #111827,#2563EB, #22D3EE )',
}}> 
      <div className="flex gap-5 items-center py-3">
        {/* <Link to="/">
          {' '}
          <PrintIcon sx={{ color: '#3730a3', fontSize: '3rem' }} />
        </Link> */}

        <ul className="flex gap-8 text-white text-[24px]">
          <Link to="/" className="hover:text-[#3730a3] p-2 rounded">
            Home
          </Link>
          <Link
            to="/printeroffline"
            className="hover:text-[#3730a3] p-2 rounded"
          >
            Printer Offline
          </Link>
          <Link
            to="/printersetupissue"
            className="hover:text-[#3730a3] p-2 rounded"
          >
            Printer Setup
          </Link>
          <Link
            to="/printerscannersetup"
            className="hover:text-[#3730a3] p-2 rounded"
          >
            Scanner Setup
          </Link>
          <Link
            to="/privacypolicy"
            className="hover:text-[#3730a3] p-2 rounded"
          >
            Privacy PoLicy
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
