import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlaneDeparture,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import backgroundImage from '../../../assets/introPic.png';

const SearchBar = () => {

    return (
        <div
            className="h-[80vh] bg-cover w-full flex justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="mx-auto pt-12 flex justify-center w-full container pb-24">
                <div className="flex justify-center flex-col">
                    <div className="h-fit bg-white rounded-xl p-4 justify-center grid xl:grid-cols-12 sm:grid-cols-6 grid-cols-2 w-full">
                        <div className="h-fit sm:col-span-2 col-span-1 p-5 w-full">
                            <div className="suggestion-container-airport relative">
                                <label className="text-black font-bold flex mb-2 items-center space-x-2">
                                    Từ sân bay
                                </label>
                                <div className="flex relative">
                  <span className="pl-1 absolute top-2">
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                  </span>
                                    <input
                                        className="w-full bg-slate-100 outline-none pl-8 border-black rounded-lg p-2"
                                        type="text"
                                        // value={diemSanBay}
                                        // onChange={(e) => {
                                        //     setDiemSanBay(e.target.value);
                                        //     debouncedFetchAirportSuggestions(e.target.value);
                                        //     setShowAirportSuggestions(true);
                                        // }}
                                        // onClick={handleInputClick}
                                        // placeholder="Sân bay khởi hành"
                                        // onFocus={handleAirportInputFocus}
                                    />
                                </div>
                                {/*{showAirportSuggestions && (*/}
                                {/*    <ul className="w-1/4 p-2 min-w-[239px] top-[40px] bg-gray-100 z-0 h-fit min:h-1/4 absolute overflow-auto mt-6 rounded-lg">*/}
                                {/*        {suggestions.sanBays.map((sanBay, index) => (*/}
                                {/*            <li*/}
                                {/*                className=" hover:bg-blue-100 p-2 rounded-md border-b-gray-400 border-0 border-b-2 "*/}
                                {/*                key={index}*/}
                                {/*                onClick={() => handleAirportSuggestionClick(sanBay)}*/}
                                {/*            >*/}
                                {/*                {sanBay}*/}
                                {/*            </li>*/}
                                {/*        ))}*/}
                                {/*    </ul>*/}
                                {/*)}*/}
                            </div>
                        </div>
                        <span className="w-full col-span-1 text-center pb-6 mt-11 text-3xl pr-9 translate-y-2">
              ⇌
            </span>
                        <div className="h-fit pt-5 col-span-1 sm:col-span-3 pr-5 w-full">
                            <div className="suggestion-container-tram relative">
                                <label className="text-black font-bold flex mb-2 items-center space-x-2">
                                    Đến khu vực địa chỉ{' '}
                                </label>
                                <div className="flex relative">
                  <span className="pl-1 absolute z-50 top-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                                    <input
                                        className="w-full bg-slate-100 outline-none pl-8 z-30 border-black rounded-lg p-2"
                                        type="text"
                                        // value={diemKetThuc}
                                        // onChange={(e) => {
                                        //     setDiemKetThuc(e.target.value);
                                        //     debouncedFetchTramDungSuggestions(e.target.value);
                                        //     setShowTramDungSuggestions(true);
                                        // }}
                                        // placeholder="Đến khu vực địa chỉ tòa nhà"
                                        // onFocus={handleTramDungInputFocus}
                                    />
                                </div>
                                {/*{showTramDungSuggestions && (*/}
                                {/*    <ul className="w-1/4 p-2 min-w-[280px] top-[45px] bg-gray-100 z-0 h-fit min:h-1/4 absolute overflow-auto mt-6 rounded-lg">*/}
                                {/*        {suggestions.tramDungs.map((suggestion, index) => (*/}
                                {/*            <li*/}
                                {/*                className=" hover:bg-blue-100 p-2 rounded-md border-b-gray-400 border-0 border-b-2 "*/}
                                {/*                key={index}*/}
                                {/*                onClick={() =>*/}
                                {/*                    handleTramDungSuggestionClick(suggestion)*/}
                                {/*                }*/}
                                {/*            >*/}
                                {/*                {suggestion}*/}
                                {/*            </li>*/}
                                {/*        ))}*/}
                                {/*    </ul>*/}
                                {/*)}*/}
                            </div>
                        </div>
                        <div className="mt-5 col-span-1 sm:col-span-2">
                            <label className="text-black pl-2 font-bold flex mb-2 items-center space-x-2">
                                Ngày khởi hành
                            </label>
                            <div className="items-center h-fit w-3/4 px-2 py-[6px] mx-2 bg-gray-200 shadow rounded-lg">
                                <input
                                    className="bg-transparent w-full h-fit outline-none text-center"
                                    type="date"
                                    // min={today}
                                    // value={selectedDate}
                                    // onChange={(e) => setSelectedDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-5 col-span-1 sm:col-span-2">
                            <label className="text-black pl-2 font-bold flex mb-2 items-center space-x-2">
                                Giờ khởi hành
                            </label>
                            <div className="items-center flex justify-center h-fit w-3/4 px-2 py-[6px] mx-2 bg-gray-200 shadow rounded-lg">
                                <input
                                    type="time"
                                    className="bg-transparent w-full h-fit outline-none text-center"
                                    // value={selectedHour}
                                    // onChange={(e) => setSelectedHour(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center col-span-1 sm:col-span-1 h-fit mt-[50px]">
                            <button
                                // onClick={handleSubmit}
                                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                    {/*{error && <div className="text-red-500 mt-4">{error}</div>}*/}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
