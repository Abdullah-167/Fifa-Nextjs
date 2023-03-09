import Image from 'next/image'
import Cup1 from '../../../../public/assets/cup1.png'
import Cup2 from '../../../../public/assets/cup2.png'
import Cup3 from '../../../../public/assets/cup3.png'


const OurAwards = () => {


    const trophy = [{
        cup: Cup1,
        title: '2015 World Cup Champion'
    },
    {
        cup: Cup2,
        title: '2016 World Cup Champion'
    }, {
        cup: Cup3,
        title: '2018 World Cup Champion'
    },];

    return (
        <div className='bg-[#F5F6F9] py-10'>
            <div className='container px-5'>
                <div>
                    <div>
                        <h1 className='text-[#000000] text-3xl sm:text-5xl font-bold'>Our Awards</h1>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center pt-5'>
                    {trophy.map((items, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <div className='flex justify-center'>
                                        <Image alt='image' src={items.cup} className='max-w-[300px]' />
                                    </div>
                                    <p className='text-xl text-center pt-3'>{items.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurAwards
