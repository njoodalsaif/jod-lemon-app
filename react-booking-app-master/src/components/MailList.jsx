const MailList = () => {
  return (
    <div className=" bg-blue-900  mt-[6rem] px-[9rem] py-8">
      <h1 className="text-2xl text-gray-100">Save time, save money!</h1>
      <span className="text-xl text-gray-300">Sign up and we'll send the best deals to you</span>
      <div className="flex items-center justify-center mt-4">
        <input type="text" placeholder="Your Email" className="w-full rounded-md text-xl p-3 outline-none" />
        <button className=" text-xl text-gray-200 bg-blue-600 p-3 rounded-md ml-2">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList