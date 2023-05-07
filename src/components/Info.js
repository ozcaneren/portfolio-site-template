import photo from '../img/photo.jpg'

function Info() {
  return (
    <div className="bg-slate-50 dark:bg-[#1d1d1d]">
      <div className="flex justify-center items-center h-[94vh] gap-[10rem]">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold font-poppins dark:text-zinc-200">
            Software Developer
          </h1>
          <p className="font-poppins font-medium pt-6 text-xl text-gray-600 dark:text-zinc-400">
            Hi, I'm Lorem Ipsum.A passionate Software Developer. <br /> Based in Arch / Linux.
          </p>
        </div>
        <img src={photo} alt='img' className="h-[250px] w-[250px] border-4 border-neutral-900 dark:border-neutral-100 bg-no-repeat bg-center bg-cover rounded-full" />
      </div>
    </div>
  )
}

export default Info