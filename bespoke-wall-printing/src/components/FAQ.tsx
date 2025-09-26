import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faqs" className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">Everything you need to know about our services</p>
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
                What are the benefits compared to traditional methods?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Wall printing offers seamless, high-resolution graphics without joins or seams. It is more durable, cost-effective, and environmentally friendly. It also allows for complete customisation and a quicker turnaround time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-slate-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                How long does the printing process take?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                The duration depends on the size and complexity of the design, but most projects are completed within a few hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-slate-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                What is the cost of wall printing?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Pricing varies based on the size, complexity of the design, and surface type. Contact us for a no-obligation cost estimate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-slate-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                We provide services to the London, Middlesex, and Surrey areas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Have more questions? Browse our complete FAQ section for detailed answers.</p>
            <a
              href="/faq"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              View All FAQs
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
