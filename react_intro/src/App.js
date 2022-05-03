// import logo from './logo.svg';
import './App.css';

function App() {
  const mobile =[ {
      heading : "Mobile Operating System",
      items : [{name:"Android", style:"disc"},{name: "Blackberry",style:"disc"},
                {name:"iPhone",style:"disc"},{name:"Windows Phone",style:"disc"}],
    },{
    heading : "Mobile Manufactures",
    items : [{name:"Samsung",style:"square"},{name: "HTC",style:"square"},{name:"Micromax",style:"disc"},
             {name:"Apple",style:"circle"}]
    }
  ]


  return (
    <div className='App'>
      
        {mobile.map((e)=>(
          <Mobile heading={e.heading} items={e.items}/>
        ))}


    </div>
  );
}

function Mobile({heading,items})
{
  return <div>
    <h3>{heading}</h3>
    {items.map((e)=>{
      return <li className={`${e.style}`} >{e.name}</li>
    })}
  </div>
}



export default App;
