import "../styles/pages/next.scss"
import { useRef } from "react"
import { FaImage } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";





export default function Next(){
    const theForm = useRef("")

    function subMittted(evt){
      
       evt.preventDefault()
      console.log(theForm.current)
      const theFormElement =theForm.current
      const formData = new FormData(theFormElement)
      const formdataObject = JSON.stringify(Object.fromEntries(formData.entries()))
      console.log(formdataObject)
      fetch("/api/send", {

        method: 'POST', 
        headers:{
            "content-type": "application/json"
        },
        
        body: formdataObject
      })
    }
    return(
        <>
      <main>
        <h1>Skriv et nyt opslag</h1>
        <form className="form" ref={theForm} action="" onSubmit={subMittted}>
            
            <div className="form__group">
           
            <input className="form__input"   type="text" name="headline" placeholder="Skriv en overskrift"/>
            </div>
            <div className="form__group">
            
            
            <textarea className="form__textarea" name="content" id="" placeholder="Har du noget på hjertet?"></textarea>
            
            </div>
            <div className="form__extras">
                <div className="form__extrasDiv">
                <FaImage className="form__extrasIcon"></FaImage>
                <button className="form__extrasButton">Indsæt billede</button>
                </div>
                <div className="form__extrasDiv">
                <CiHashtag className="form__extrasIcon" ></CiHashtag>
                <button className="form__extrasButton">Tilføj et tag </button>
                </div>
                <div className="form__extrasDiv">
                <IoPerson className="form__extrasIcon" ></IoPerson>
                <button className="form__extrasButton">Tag en person </button>
                </div>
                <div className="form__extrasDiv">
                <CiClock1 className="form__extrasIcon" ></CiClock1>
                <button className="form__extrasButton">Tilføj tid </button>
                </div>
                
            </div>
            
            <input className="form__input" type="submit" value={"Post dit opslag"} />
             
        </form>
        </main>
        </>
    )
}