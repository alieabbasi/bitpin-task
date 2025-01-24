import { FC } from "react";
import { useParams } from "react-router-dom";
 
const MarketDetails: FC = () => {
  const { id } = useParams(); 
  return ( 
    <div>Market: {id}</div>
   );
}
 
export default MarketDetails;