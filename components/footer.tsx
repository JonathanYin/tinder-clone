import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Footer() {
  return (
    <Accordion type='single' collapsible className='w-full text-white'>
      <AccordionItem value='item-1' className='text-neutral-100'>
        <AccordionTrigger className='text-neutral-100'>
          What is this site?
        </AccordionTrigger>
        <AccordionContent className='text-neutral-100'>
          A dating site based on Tinder, built using Next.js.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2' className='text-neutral-100'>
        <AccordionTrigger className='text-neutral-100'>
          How does it work?
        </AccordionTrigger>
        <AccordionContent className='text-neutral-100'>
          This wesite uses NextAuth for user authentication, and WebSockets for
          real-time messaging.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3' className='text-neutral-100'>
        <AccordionTrigger className='text-neutral-100'>
          Who built this?
        </AccordionTrigger>
        <AccordionContent className='text-neutral-100'>
          It was built by{' '}
          <a className='underline' href='https://github.com/JonathanYin'>
            Jonathan Yin
          </a>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
