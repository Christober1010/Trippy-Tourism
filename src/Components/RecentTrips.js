import React from 'react'
import './Recenttrips.css'

function RecentTrips() {
    const data = [
        {
            img: "https://images.unsplash.com/photo-1707985770057-4a56edd69666?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Duomo Di Milano",
            details: "Milano's Duomo is the largest and most elaborate Gothic building in Italy: made of pink-hued white marble from a dedicated quarry, it is 157 meters in length and 108.5 meters high at the top of the main spire, where rests the glistening golden statue of the Madonnina"
        },
        {
            img: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "New York",
            details: "New York is composed of five boroughs – Brooklyn, the Bronx, Manhattan, Queens and Staten Island - is home to 8.4 million people who speak more than 200 languages, hail from every corner of the globe, and, together, are the heart and soul of the most dynamic city in the world."
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1697729693552-40448c8042fb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Himachal pradesh",
            details: "Himachal Pradesh is the northernmost state of India and shares borders with the union territories of Jammu and Kashmir and Ladakh to the north, and the states of Punjab to the west, Haryana to the southwest, Uttarakhand to the southeast and a very narrow border with Uttar Pradesh to the south"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1697729640715-b4f8b691b9ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Chitorrah",
            details: "Chittorgarh is named after its most imposing structure, the Chittorgarh Fort which stands atop a 180 metre high hill and is spread across 700 acres. Chittorgarh Fort has had a tumultuous past. This bastion of the Rajputs has faced violent attacks thrice in its entire history."
        },
        {
            img: "https://images.unsplash.com/photo-1677759878468-9d84883f6b04?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Bogatha Falls",
            details: "A magnificent waterfall in the district of Khammam and second biggest waterfall in the State, Bogatha waterfall presents a splendid spectacle of falling waters and rich landscape and therefore, aptly gets the epithet the Niagara of Telangana. As motor able road is not available."
        },
        {
            img: "https://images.unsplash.com/photo-1708823081494-3e5bbd2ce931?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Maroc",
            details: "Breathtaking beaches, bustling souks, vast expanses of desert, imposing snow- capped mountains, wondrous medinas, and mouth-watering cuisine there's a world of wonder to discover in Morocco. Not many destinations in the world can offer you this much variety, intrigue, and cultural experiences"
        },
        {
            img: "https://images.unsplash.com/photo-1622390788046-c830e95be2ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Golkonda Fort",
            details: "Golconda Fort is located in the western part of Hyderabad city and is about 9 km from the Hussain Sagar Lake. The outer fort occupies an area of three square kilometers, which is 4.8 kilometers in length. It was originally known as Mankal, and built on a hilltop in the year 1143."
        },
        {
            img: "https://images.unsplash.com/photo-1613402900762-25b427ea5d45?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Budapest",
            details: "Budapest, the capital of Hungary, is a captivating city that straddles the Danube River in Central Europe. It is renowned for its stunning architecture, rich history, and vibrant cultural scene. The city is divided into two parts, Buda and Pest, each with its unique character and attractions."
        },
        {
            img: "https://images.unsplash.com/photo-1614103192306-f374ad6b035b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Zihnan temple",
            details: "Budapest, the capital of Hungary, is a captivating city that straddles the Danube River in Central Europe. It is renowned for its stunning architecture, rich history, and vibrant cultural scene. The city is divided into two parts, Buda and Pest, each with its unique character and attractions."
        },

    ]
    return (
        <div>
            <div className='container'>
                <div className="fw-bold fs-1 text-center d-flex align-items-center ">Our Recent Trips</div>
                <div className='row'>
                    {
                        data.map((item) => {
                            return <div className='col-sm'>
                                <div className='card'>
                                    <div className='card-wrappers'><img src={item.img}/></div>
                                    <div className='card-content'>
                                        <div className='fw-bold text-center'>{item.title}</div>
                                        <div className=''>{item.details}</div>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>



        </div>
    )
}

export default RecentTrips