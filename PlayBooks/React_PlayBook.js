let react=require('react');
//or use import react from "react";
let reactdom=require('react-dom');
//or use import reactdom from "react-dom";

reactdom.render(<h1>Here we can write one single html element</h1>,document.getElementById('root'/*here write the id name of the element in the index.html file*/));

const name="Hemanth";
const lucky=11;

ReactDOM.render(<div><h1>Hello {name}</h1><p>Your lucky number is {lucky}</p></div>, document.getElementById("root"));

const CURRENTYEAR=new Date().getFullYear();

//Inside HTML,We need to write
<body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/JSX"></script>
    
</body>

/*Classname in javascript
<li className="list1"></li>*/


//We can use inline css in react by :
const customStyle = {//makng js object of style.css
    color: ""
  };
ReactDOM.render(
    <h1 className="heading" style={customStyle}/*writing js here*/>
      {greeting}
    </h1>,
    document.getElementById("root")
  );

Components:
We make React components by maing a function ,returning the html element and writing it in a separate folder &then eexporting it into the original index.js file

<Heading />=self-closing tag
//in List.jsx
function List()
{
    return <ul>
    <li>Bacon</li>
    <li>Jamon</li>
    <li>Noodles</li>
  </ul>;
}

export default List;
export { List};
//in index.js
import List,{List} from "./List";


<List />

