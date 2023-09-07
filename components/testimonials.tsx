import * as React from 'react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Testimonial() {
  return (
    <div className='flex justify-items-center gap-16'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle className='pb-2'>Rebecca</CardTitle>
          <CardDescription className='text-gray-600'>
            I was also adamant the next man I&apos;d be with and commit to,
            would be the man I&apos;d spend the rest of my life with (just not
            married). I was very fussy and didn&apos;t expect to meet a man on
            Tinder. I decided to sign up anyways and just match away and see
            what happened.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle className='pb-2'>Lauren</CardTitle>
          <CardDescription className='text-gray-600'>
            For all the single people out there, especially introverted ones
            like us: do not be afraid to travel outside of your comfort zone.
            That&apos;s where you&apos;ll make a genuine connection. Tinder
            brought us together and for that, I am forever grateful. ❤
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle className='pb-2'>Alyssa</CardTitle>
          <CardDescription className='text-gray-600'>
            My college roommate and I both would stay up on Tinder, not looking
            for anything serious (also not looking for hookups though, just
            entertainment). My now husband and I matched on Tinder.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
