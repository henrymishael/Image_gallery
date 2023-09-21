import Image from "next/image";
import { useState } from "react"


function BlurImage({ image }) {

    function cn(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    const [isLoading, setLoading] = useState(false)
    return (
        <div className='group aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8   w-full overflow-hidden rounded-lg bg-gray-200'>
            <Image 
            src={image.url.regular} 
            alt="" 
            priority={false}
            layout='fill'
            objectFit='cover'
            className={cn('group-hover:opacity-75 duration-700 ease-in-out', 
            isLoading 
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setLoading(false)}
                />
        </div>
    )
}
export default BlurImage

