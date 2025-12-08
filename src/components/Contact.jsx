export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-8 py-16">
      <h3 className="text-5xl font-bold mb-6">Contact Me</h3>
      <hr className="border-gray-200 mb-8" />

      {/* One-line layout */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">

        {/* Email */}
        <div className="flex items-center gap-3">
          <p className="text-gray-600">Email: </p>
          <a href="mailto:ash@example.com" className="font-medium">
            ashish7840k@gmail.com
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-3">
          <p className="text-gray-600">WhatsApp: </p>
          <a
            href="https://wa.me/917992218094"
            className="px-4 py-2 bg-green-600 text-white rounded-full"
          >
            Message
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <p className="text-gray-600">Phone: </p>
          <span className="font-medium">+91 7992218094</span>
        </div>

      </div>
    </section>
  );
}
