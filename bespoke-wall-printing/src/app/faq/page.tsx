import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about our UV wall printing services. Can't find what you're looking for? 
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold"> Contact us</a> and we'll be happy to help.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What's direct wall printing?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Direct wall printing is a technology that allows us to print high-resolution images, designs, and murals directly onto various surfaces using UV printing technology.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What surfaces can you print on?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We can print on a wide range of surfaces including interior walls, brick, tiles, wood, glass, plastic, steel, concrete, and even ceiling tiles. The only surfaces we cannot print on are those that absorb ink, such as fabrics and upholstered furniture.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  How durable are the prints?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Our prints are extremely durable, with indoor prints lasting more than 12 years. They are scratch and abrasion-resistant, waterproof, and solvent-resistant.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Are the inks used safe?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, we use vegan, non-toxic, non-flammable inks that are safe for indoor use and environmentally friendly, contributing to a smaller carbon footprint than traditional wall graphic techniques.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Can you print on textured surfaces?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, our advanced UV printing technology allows us to print on both smooth and textured surfaces, including brick and rough plaster.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What are the benefits compared to traditional methods?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Wall printing offers seamless, high-resolution graphics without joins or seams. It is more durable, cost-effective, and environmentally friendly. It also allows for complete customisation and a quicker turnaround time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Can you help with the design process?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, we offer design consultation services to help bring your vision to life. You can provide us with your artwork, or we can assist in creating a custom design for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What sizes can you print?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We can print any size, from small detailed images to large murals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  How long does the printing process take?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  The duration depends on the size and complexity of the design, but most projects are completed within a few hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What is the cost of wall printing?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Pricing varies based on the size, complexity of the design, and surface type. Contact us for a no-obligation cost estimate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Is there a warranty on the prints?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, we offer a warranty on our prints to ensure their quality and durability. Specific terms can be discussed during your consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Can the prints be removed or changed?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  While our prints are designed to be durable and long-lasting, they can be painted over if you wish to change the design in the future.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Do you offer outdoor printing services?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, our technology allows us to print on exterior surfaces as well, ensuring weather-resistant and long-lasting prints.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  How do I book a printing service?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  You can book our services by contacting us via phone or email. We will discuss your requirements, provide a preview of the design, and schedule a convenient time for the printing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What kind of maintenance do the printed walls require?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  The prints are easy to maintain. You can simply wipe them clean with a damp cloth to keep them looking fresh and vibrant.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Do you offer any discounts or packages?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, we offer package deals for multiple surfaces or rooms, as well as promotional offers for first-time clients. Contact us for more details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-17" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What file formats do you accept for custom designs?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We accept a variety of file formats including JPEG, PNG, PDF, and TIFF. High-resolution files are preferred to ensure the best print quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-18" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What areas do you serve?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We provide services to the London, Middlesex, and Surrey areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-16 bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
              <p className="text-slate-600 mb-6">
                Our team is here to help! Get in touch with us for personalized answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:02071014671"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 020 7101 4671
                </a>
                <a
                  href="mailto:info@bespokewallprinting.co.uk"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
