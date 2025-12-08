const works = [
  { id:1, title:'E-commerce FlipkartClone', img:'/flipkartcloneImg.png' },
  { id:2, title:'Task Manager', img:'/taskImg.png' },
  { id:3, title:'Game of Thrones Cards', img:'/GOTImg.png' },
  { id:4, title:'Watch Website', img:'/watchImg.png' },
]

export default function Works(){
  return (
    <section id="works" className="px-6 md:px-8 py-16">
      <h3 className="text-5xl font-bold mb-6">Latest Works</h3>
      <hr className="border-gray-200 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map(w=>(
          <div key={w.id} className="bg-white rounded-2xl overflow-hidden shadow">
            <img src={w.img} alt={w.title} className="object-cover w-full h-64" />
            <div className="p-6">
              <h4 className="text-xl font-semibold">{w.title}</h4>
              <p className="text-sm text-gray-500 mt-2">Short description about this project.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
