
const Card = ({items}) => {
  return (
    <div className="p-10 px-5 sm:px-15 md:px-30 lg:px-40 min-h-screen">
        <h1 style={{color:'#002f34'}} className="text-2xl">Fresh Recommendations</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-5">
            {items.map((item)=>(
                <div key={item.id} 
                style={{borderWidth:'1px',borderColor:'lightgray'}}
                className="relative w-full h-72 rounded-md border-solid bg-gray-50 overflow-hidden cursor-pointer">

                    <div className="w-full flex justify-center p-2 overflow-hidden">
                        <img className="h-36 object-contain" src={item.imageUrl || 'https://via.placeholder.com/150'} alt={item.title} />

                    </div>

                    <div className="details p-1 pl-4 pr-4">
                        <h1 style={{color:'#002f34'}} className="font-bold text-xl">₹ {item.price}</h1>
                
                        <p className="pt-1">{item.title}</p>
                        <p className="pt-1 text-sm">{item.description}</p>
                    </div>


                </div>

            ))}

        </div>
      
    </div>
  )
}

export default Card
