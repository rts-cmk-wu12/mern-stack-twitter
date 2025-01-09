import { useRef } from "react"

export default function Next(){
    const theForm = useRef("")

    function subMittted(evt){
      
       evt.preventDefault()
      console.log(theForm.current)
      const theFormElement =theForm.current
      const formData = new FormData(theFormElement)
      console.log(formData.current())
    }
    return(
        <>
        <h1>Hej</h1>
        <form ref={theForm} action="" onSubmit={subMittted}>
            <input   type="text" name="headlin" placeholder="Indtats venligts dit opslag"/>
            <br />
            <input type="text" name="text" placeholder="Hvad skal der stå i dit opslag"/>
            <br />
            <input type="submit" value={"Post dit opslag"} />
             
        </form>
        </>
    )
}