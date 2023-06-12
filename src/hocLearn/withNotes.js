
export default function withNotes(WrapperComponent) {
  
  function WithNotes(){
    const animal="Dog";
    const name='Baw';
    return <WrapperComponent animal={animal} name={name}/>
  }
    return (
    WithNotes
  )
}
