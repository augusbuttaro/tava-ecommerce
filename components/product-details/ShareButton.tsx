'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { IoMdShare } from 'react-icons/io';

import {
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share';

function ShareButton ({ productId, name }: { productId:string, name:string }){
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL
    const shareLink = `${url}/products/${productId}`
    return(
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline' size='icon'>
                    <IoMdShare />
                </Button>
            </PopoverTrigger>
            <PopoverContent side='top' align='end' sideOffset={10} className='flex justify-around items-center gap-2 w-full'>
                 <WhatsappShareButton url={shareLink} title={name}>
                    <WhatsappIcon size={32} round/>
                 </WhatsappShareButton>
                 <LinkedinShareButton url={shareLink} title={name}>
                    <LinkedinIcon size={32} round/>
                 </LinkedinShareButton>
                 <EmailShareButton url={shareLink} title={name}>
                    <EmailIcon size={32} round/>
                 </EmailShareButton>
            </PopoverContent>
        </Popover>
    )
}

export default ShareButton