import './style.css'
import './Artwork.ts'
import './Statue.ts'
import { Artwork } from './Artwork.ts';

function init(){



}

const titlecheck = (document.getElementById('Title') as HTMLInputElement).value;
const yearcheck = (document.getElementById('Year') as HTMLInputElement).value;
const pricecheck = (document.getElementById('Price') as HTMLInputElement).value;

const artwork1:Artwork[] =  [];

if(titlecheck.trim() == " "){
  document.getElementById('Title')!.textContent = "nem lehet üres";
}




const submittol= document.getElementById('submit');
submittol?.addEventListener('click',() => {

  
});














addEventListener("DOMContentLoaded",init)