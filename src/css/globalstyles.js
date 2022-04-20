import { createGlobalStyle } from "styled-components";
import { device, rem } from "../helpers/mixins";

//Declaring global styles for all styles in apoplication
const Globalstyles = createGlobalStyle`
:root{
    --accent-color: #01AC6C;
    --primary-font:'Montserrat', sans-serif;
    --secondary-font:'Oxygen', sans-serif;
    --text-black: #151211;
    --case-study-link-color: hsla(231, 6%, 37%, 1);

}
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family:var(---primary-font);
}
html{
  font-size: 62.5%;  //1rem = 10px
  @media ${device.tab_land}{
    font-size: 56.25%;
  }
@media ${device.tab_port}{
  font-size: 50%;
}
@media ${device.big_desktop}{
  font-size: 100%;
}
}
body{
  box-sizing: border-box; 
  font-family: var(--primary-font);
}
h1{
  font-size: ${rem(96)};
  font-family: 'Montserrat', sans-serif;
  line-height: ${rem(120)};
}
h2{
  font-size: ${rem(25)};
  font-weight: 900;
  padding: 0 0 .5rem 0;
}
h3{
  font-size: ${rem(19)};
  color: #757A9B;
  font-weight: 400;
}
h4{
  font-size: ${rem(15)};
  color: #FE4370;
  border-bottom: 2px solid #fe4370;
  padding: 0 2rem 0.5rem 0;
}
h6{
  font-family: var(--secondary-font);
  font-size: ${rem(24)};
  line-height: ${rem(32)};
  font-weight: 200;
  color: var(--text-black);
}
p{
  font-size: 1rem;
  line-height: 190%;
  font-weight: 400;
  color: var(--text-black);
  font-family: var(--secondary-font);
}
li{
  font-size: 1.3rem;
  cursor: pointer;
  list-style: none;
  font-size: 1rem;
  color: var(--text-black) !important;
  font-weight: 400;
  line-height: ${rem(32)};
}
button{
  font-size: 1rem;
  padding: 1rem 0rem;
  margin-top: 1rem;
  background: transparent;
  border: .10rem solid var(--accent-color);
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  font-family: var(--secondary-font);
  color: var(--text-black);
  &:hover{
    color: white;
    background: #00915c !important;
  }
}
.link{
  text-decoration: none;
  padding: 1rem 6rem;
&:hover{
  color: white;
}
}
`;

export default Globalstyles;
