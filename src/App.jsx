
import './App.css'
import Newsletter from './component/newsletter'
import Routs from './routs/routs'
import Footer from './ui/footer'



function App() {


  return (
 <div className="overflow-x-hidden">

<Routs />


<div  className="md:mb-[-5.5rem] mb-[-8rem] mt-[3rem] relative">
      <Newsletter />
      </div>
   
<Footer />
 </div>
  )
}

export default App
