function allpost({ data }) {
  
 // console.log(data)

return(
  <>
  {data.map(d=>{
    return(
      <>
      <div style={{backgroundColor:"gray",margin:"36px" }}>
      <div style={{display:"flex"}} >
        <div>
        Title :-
        </div>
       <div style={{color:"white"}} >{d.title}</div>
      </div>
      <div style={{display:"flex"}} >
       <div>Body :-</div>
        <div style={{color:"white"}} >{d.body}</div>
      </div>
      
      </div>
      
      </>
    )
  })

  }
  </>
)

  }
  
 
  export async function getServerSideProps() {
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
  
   
    return { props: { data } }
  }
  
  export default allpost