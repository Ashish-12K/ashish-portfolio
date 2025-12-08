const works = [
  { id:1, title:'E-commerce FlipkartClone', img:'/flipkartcloneImg.png', description: 'A fully responsive Flipkart-inspired e-commerce UI with product listings, categories, search layout and modern card designs. Built to replicate a real online shopping experience with smooth navigation and clean components.' },
  { id:2, title:'Task Manager', img:'/taskImg.png', description: 'A simple and efficient task manager app with add, edit and delete features. Designed for productivity with a clean interface and smooth user interactions. Fully responsive and easy to use.'},
  { id:3, title:'Game of Thrones Cards', img:'/GOTImg.png', description: 'A custom Game of Thrones character card designed for a specific user, featuring personalized details, themed styling and a clean fantasy-inspired layout.' },
  { id:4, title:'Watch Website', img:'/watchImg.png', description: 'A modern and responsive watch website showcasing premium timepieces with a clean layout, smooth product sections and a minimal design. Built for a refined user experience with fast loading and elegant visuals.' },
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
              <p className="text-sm text-gray-500 mt-2">{w.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
