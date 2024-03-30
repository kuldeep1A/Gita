import gita1aw from "/gita1aw.jpg";
import gita1ab from "/gita1ab.jpg";
import "./style.css";
import { isDark } from "./isDark";

document.querySelector("#app").innerHTML = `
  <div class='gc'>
${
  isDark()
    ? `<a href="#" target=""> 
    <div  class='gc1'></div><img src="${gita1ab}" class="logo" alt="gita1a white" /></a>`
    : `<a href="#" target="">
    <div  class='gc1'></div><img src="${gita1aw}" class="logo" alt="gita1a black" /></a>`
}   
    <div class='gc2'> <h1>Hello Gita User's</h1>
    <p class="Info">
    Now Available Soon,<br>
      Gita Link Updation...
    </p> </div>
  </div>
  
  <div class='gc3'> </div>
`;

isDark();

