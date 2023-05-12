import first from 'src/assets/1.png'
import second from 'src/assets/2.png'
import third from 'src/assets/3.png'
import fourth from 'src/assets/4.png'
import fifth from 'src/assets/5.png'
import sixth from 'src/assets/6.png'

import frame1 from 'src/assets/icons/frame1.svg'
import calendar from 'src/assets/icons/calendar.svg'
import card from 'src/assets/icons/card.svg'
import form from 'src/assets/icons/form.svg'
import health from 'src/assets/icons/health.svg'
import health1 from 'src/assets/icons/health1.svg'
import health2 from 'src/assets/icons/health2.svg'
import lab from 'src/assets/icons/lab.svg'
import time from 'src/assets/icons/time.svg'
import phone from 'src/assets/icons/phone.svg'
import message from 'src/assets/icons/message.svg'
import delivery from 'src/assets/icons/delivery.svg'
import person from 'src/assets/icons/person.svg'
import list from 'src/assets/icons/list.svg'

export const membersList: IMembersList[] = [
  {
    icon: frame1,
    title: 'Join [Video] Visit with Dr. Mark Greene',
    text: 'Today at 4:00 PM ET',
    theme: 'dark'
  },
  {
    icon: frame1,
    title: 'Join [Video] Visit with Dr. Mark Greene',
    text: 'Today at 4:00 PM ET',
    theme: 'dark'
  }
]

export const actionList: IActionList[] = [
  {
    icon: time,
    title: 'Schedule a follow-up appointment',
    text: 'Your Zealthy provider requested you schedule a follow-up during your last visit.',
    theme: 'warning'
  },
  {
    icon: calendar,
    title: 'Reschedule Zealthy visit',
    text: 'We want to meet with you! Please go ahead and reschedule your visit.',
    theme: 'warning'
  },
  {
    icon: lab,
    title: 'Schedule lab work or upload recent labs',
    text: 'Zealthy ordered lab work for you. Schedule an appointment at a Quest or Labcorp location near you, or upload recent lab work that you completed.',
    theme: 'warning'
  },
  {
    icon: card,
    title: 'Please update payment method',
    text: 'Your card information is no longer valid. To continue your Zealthy membership, please update your payment method.',
    theme: 'warning'
  },
  {
    icon: health,
    title: 'Please update insurance information',
    text: 'Your insurance information appears to be inactive. If it recently changed, please update here.',
    theme: 'warning'
  },
  {
    icon: form,
    title: 'Complete your anxiety or depression check-in ',
    text: 'It’s time for your anxiety or depression check-in. Please help us stay on top of your mental health journey.',
    theme: 'warning'
  },
  {
    icon: health2,
    title: 'Schedule your next coaching session',
    text: 'Stay on top of your goals by scheduling your next 1:1 session with your [weight loss/mental health] coach.',
    theme: 'warning'
  },
  {
    icon: health1,
    title: 'Establish primary care with Zealthy',
    text: 'Did you know that we can become your primary care provider? Schedule your first video visit with a Zealthy provider to get fully onboarded. ',
    theme: 'warning'
  }
]

export const careList: ICareList[] = [
  {
    icon: phone,
    title: 'Schedule a visit or request a new prescription',
    text: 'Same/next-day appointments over video, phone or message',
    theme: 'success'
  },
  {
    icon: message,
    title: 'Messages',
    text: 'Feel free to message with our virtual care team 24/7 and get answers',
    theme: 'success'
  },
  {
    icon: delivery,
    title: 'Medication, prescription renewals & delivery',
    text: 'Manage prescriptions, request renewals, and track the delivery of medications',
    theme: 'success'
  },
  {
    icon: list,
    title: 'My health',
    text: 'View lab results, past appointments, vitals, and request records',
    theme: 'success'
  },
  {
    icon: person,
    title: 'Personal information',
    text: 'Update insurance, billing, password, and more',
    theme: 'success'
  }
]

export const sliderData: ISlideData[] = [
  {
    image: first,
    text: 'Try Zealthy’s weight loss program. We predict you’ll lose at least [30] lbs to achieve a weight of [170] lbs. '
  },
  {
    image: second,
    text: 'Achieve better long-term outcomes through our mental health program (with coaching + medication options). '
  },
  {
    image: third,
    text: 'Our Zealthy primary care providers offer exceptional,  individualized care for general health concerns.'
  },
  {
    image: fourth,
    text: 'Achieve better long-term outcomes through our mental health program (with coaching + medication options). '
  },
  {
    image: fifth,
    text: 'Find an effective hair loss treatment plan through Zealthy and regrow your hair in as little as 3 to 6 months.'
  },
  {
    image: sixth,
    text: 'Improve your sexual health through FDA-approved erectile dysfunction medication. '
  }
]
