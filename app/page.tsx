import React from 'react';
import Bt3 from './BaiTap/bt3';
import Bt4 from './BaiTap/pages';
import Bt5 from './BaiTap/bt5';
import Header from './BaiTap/Header';
import Footer from './BaiTap/Footer';
import { Roboto } from 'next/font/google'
import Bt10 from './BaiTap/bt10';
import Bt11 from './BaiTap/bt11';
import Bt12 from './BaiTap/bt12';

 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function Page() {  
  return (
    <div className={roboto.className}>
      <Header></Header>
      <Footer></Footer>
      <Bt3 />
      <Bt4></Bt4>
      <Bt5></Bt5>
      <Bt10></Bt10>
      <Bt11></Bt11>
      <Bt12></Bt12>
    </div>
  );
}
