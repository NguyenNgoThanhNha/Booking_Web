import ImagePost from "@/components/global/molecules/ImagePost"
import { Hotel } from "@/lib/interface/hotel.interface"

const HotelDetails = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className="flex md:w-3/5 flex-col gap-4 rounded-lg bg-slate-50/90 p-6">
      <p>HotelDetails</p>
      <ImagePost urls={hotel.model.urls} />
    </div>
  )
}

export default HotelDetails