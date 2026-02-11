import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle } from "lucide-react"; // Optional: for icons
function ContactForm() {
  const [state, handleSubmit] = useForm("xreaeljv");

  if (state.succeeded) {
    return (
      <div className="text-center p-8">
        <p className="text-green-400 text-lg font-semibold">
          <CheckCircle className="text-green-400 w-12 h-12" />
          Thanks for contacting! I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-green/20">
      <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block mb-4">
        Get In Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            placeholder="your@email.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell me about your project..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 px-6 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl">
          {state.submitting ? "Sending..." : "Send Message"}
          <Send className="inline-block w-5 h-5 ml-2" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
