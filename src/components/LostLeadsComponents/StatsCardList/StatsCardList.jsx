import StatsCard from "@/components/common/StatsCard/Graphs/LineBarGraph/StatsCard/StatsCard";
import { FaCarAlt, FaDatabase } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosRefresh } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";


const StatsCardList = () => {

    return <div className="flex flex-wrap justify-between gap-2 pt-4 mx-2">
        <StatsCard
          icon={<GiSteeringWheel size={60} />}
          title="Test Drive Given"
          color="bg-blue-500 text-white"
        />
        <StatsCard
          icon={<FaCarAlt size={60} />}
          title="First Time Buyer"
          color="bg-yellow-400 text-white"
        />
        <StatsCard
          icon={<IoIosRefresh size={60} />}
          title="Repeat Brand Buyer"
          color="bg-red-500 text-white"
        />
        <StatsCard
          icon={<FaArrowRightArrowLeft size={60} />}
          title="Exchange Buyer"
          color="bg-purple-500 text-white"
        />
        <StatsCard
          icon={<FaDatabase size={60} />}
          title="Interested in Competition"
          color="bg-blue-400 text-white"
        />
      </div>;
}

export default StatsCardList;