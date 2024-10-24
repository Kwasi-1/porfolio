import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

const Contact = () => {
  const contactLinks = [
    { id: 1, link: '#', name: 'LinkedIn' },
    { id: 2, link: '#', name: 'Dribbble' },
    { id: 3, link: '#', name: 'Twitter' },
    { id: 4, link: '#', name: 'GitHub' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex bg-dark text-accent"
    >
      <Sidebar/>

      <div className=" relative max-w-[90%] pl-[10%] pr-[5%] text-[13px] font-body font-[400] tracking-wide leading-[1.9]">
        <div className=" fixed w-[25%] h-screen flex flex-col flex-start justify-center text-left">

          <h1 className="font-custom text-[14vw] leading-[1] mb-7 font-[300]">Hello.</h1>

          <div className="flex flex-col gap-6" >
            <p>
              Need a beautiful, well-structured website that you can own and maintain
              yourself? Get in touch.
            </p>
            
            <div>
              <div>
                <label>Email:</label>
                <a href="mailto:affulnana04@gmail.com" className="hover:line-through underline ml-1">
                  affulnana04@gmail.com
                </a>
              </div>

              <div className="flex gap-1">
                <label className="w-fit">On the Internet:</label>
                <div className="space-x-2">
                  {contactLinks.map((contact, index) => (
                    <a
                      key={contact.id}
                      href={contact.link}
                      className="underline hover:line-through"
                      aria-label={contact.name}
                    >
                      {contact.name}
                      {(index < contactLinks.length-1) && ' /'}
                    </a>
                  ))}
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div>  
    </motion.section>
  );
};

export default Contact;