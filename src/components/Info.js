import photo from '../img/photo.jpg'

function Info() {
  return (
    <div className="flex justify-around items-center top-0 h-auto w-full z-9999 p-[1.8rem] md:p-[1.7rem] bg-slate-50 dark:bg-[#1d1d1d]">
      <section className="flex flex-col h-[86vh] md:h-[88vh] w-full">
        <div className="flex items-center justify-center text-center max-w-[107rem] mx-auto my-0 md:px-[4rem] md:w-full md:h-full">
          <div className='flex justify-center items-center h-[70vh] md:h-[80vh]'>
            <div className='flex flex-col-reverse items-center justify-center gap-[2rem] md:flex-row md:gap-[10rem]'>
              <div className='flex flex-col max-w-[55rem]'>
                <h1 className="text-4xl font-bold font-poppins md:my-[2rem] lg:leading-5 md:leading-2 dark:text-zinc-200 md:items-center">
                  Software Developer
                </h1>
                <p className="font-poppins font-medium pt-6 leading-6 text-xl text-gray-600 dark:text-zinc-400">
                  Hi, I'm Lorem Ipsum.<br/>A passionate Software Developer. <br /> Based in Arch / Linux.
                </p>
              </div>
              <img src={photo} alt='img' className="bg-no-repeat bg-center bg-cover h-[200px] w-[200px] md:h-[300px] md:w-[300px] border-4 border-neutral-900 dark:border-neutral-100 bg-no-repeat bg-center bg-cover rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Info