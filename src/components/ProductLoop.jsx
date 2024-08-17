export default function ProductLoop({ products }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products && products.map((item, index) => (
                <div className="relative" key={index}>
                    <div className="p-[20px] w-[100%] md:h-[350px] bg-zinc-100 flex items-center justify-center rounded-lg">
                        <img className="mix-blend-multiply object-contain w-[100%] h-[170px] md:h-[260px] w-[auto]" src={item.image} alt={item.title} width="auto" height="200" />
                    </div>
                    <h3 className="overflow-hidden truncate font-semibold text-[15px] pt-2">{item.title}</h3>
                    <div className="text-[15px]">${item.price}</div>
                    <a className="absolute top-0 left-0 right-0 bottom-0" href={`/products/${item.id}`}>
                        <span className="sr-only">
                            View
                        </span>
                    </a>
                </div>
            ))}
        </div>
    )
}