import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Testimonial() {
  return (
    <div className='bg- flex justify-items-center gap-12'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Rebecca</CardTitle>
          <CardDescription>
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
          <CardTitle>Lauren</CardTitle>
          <CardDescription>
            For all the single people out there, especially introverted ones
            like us: do not be afraid to travel outside of your comfort zone.
            That&apos;s where you&apos;ll make a genuine connection. Tinder
            brought us together and for that, I am forever grateful. ❤
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Alyssa</CardTitle>
          <CardDescription>
            My college roommate and I both would stay up on Tinder, not looking
            for anything serious (also not looking for hookups though, just
            entertainment). My now husband and I matched on Tinder.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
