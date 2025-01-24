import { FC } from "react";
import { useParams } from "react-router-dom";
 
const MarketDetailPage: FC = () => {
  const { id } = useParams(); 
  return ( 
    <div>Market: {id}</div>
   );
}
 
export default MarketDetailPage;