const StatsCard = ({ icon, title,color }) => {
  return (
    <div className={`flex-1 rounded-lg p-2 ${color} shadow-xl  `}>
      <div className="flex justify-between">
        <div className="text-sm font-medium">
          <p>Yes(944-15.03%)</p>
          <p>No(4930-78.48%)</p>
          <p>NA(408-6.49%)</p>
        </div>
        <div>{icon}</div>
      </div>
      <div className="mt-2 text-center">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};
export default StatsCard;
