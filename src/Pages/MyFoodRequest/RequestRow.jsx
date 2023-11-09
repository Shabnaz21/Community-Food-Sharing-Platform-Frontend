import { formatExpiredTime } from "../../Utilies/TimeFormate";


const RequestRow = ({ foodRequest, handleDelete, handleRequestConfirm }) => {
    const { _id, foodImage, foodName, donatorName, pickupLocation, expiredTime, date, donatedMoney, status
 } = foodRequest;
    
    return (
        <>
            <tr className=" bg-white border-b
                          hover:bg-gray-50
                        ">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100
                                     border-gray-300 rounded" />
                        <label className="sr-only">checkbox</label>
                    </div>
                </td>
                
                <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded-xl w-20 h-20">
                                <img src={foodImage} alt={foodName} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{foodName}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    {donatorName}
                </td>
                <td className="px-6 py-4">
                    {pickupLocation}
                </td>
                <td className="px-6 py-4">
                    {formatExpiredTime(expiredTime)}
                </td>
                <td className="px-6 py-4">
                    {date}
                </td>
                <td className="px-6 py-4 text-center">
                    {donatedMoney}
                </td>
                <td className="px-6 py-4">
                    {
                        status === 'available' ? <span className="font-bold text-primary">Delivered</span> :
                            <button onClick={() => handleRequestConfirm(_id)} className="btn btn-ghost btn-xs">Available</button>}
                </td>
                <td className="flex items-center px-6 py-10 ">
                    <btn onClick={() => handleDelete(_id)} className="font-medium btn btn-sm text-red-600 hover:underline">Cancel Request </btn>
                </td>
            </tr>

        </>
    );
};

export default RequestRow;