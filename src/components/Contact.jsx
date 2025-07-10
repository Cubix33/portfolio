function Contact() {
  return (
    <section id="contact" className="bg-transparent py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Me</h2>
      <form
        action="https://formspree.io/f/xwpbgozl"
        method="POST"
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg space-y-6 border border-white/20"
      >
        <input type="text" name="name" placeholder="Your Name" required
          className="w-full p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300" />
        
        <input type="email" name="email" placeholder="Your Email" required
          className="w-full p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300" />
        
        <textarea name="message" rows="4" placeholder="Your Message" required
          className="w-full p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"></textarea>

        {/* Hidden Inputs */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourportfolio.com/thank-you" />

        <button type="submit"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg w-full font-medium">
          Send Message
        </button>
      </form>
    </section>
  );
}
export default Contact;
