const React = require('react')
const Def = require('../default')

//pasted from class page
function show (data) {
    return (
        <Def>
  <main>
    <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <div>
                 <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
             </div>
             <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                 <button type='submit' className='btn btn-danger'>Delete
                 </button>
           </form>
    </div>
  
    </div>
    <div>
                 <h2>Comments</h2>
                 <p>No comments yet.</p>
             </div>
             
  </main>
    </Def>
    )
}

// function show (data) {
//     return (
//         <Def>
//           <main>
//             <div class = 'row'>
//                 <div class = 'col-sm-6'>
//                     <img src={data.place.pic} alt={data.place.name} />
//                     <h3>Located in {data.place.city}, {data.place.state}
//                     </h3>
//                 </div>
//                 <div class = 'col-sm-6'>
//                     <h1>{data.place.name}</h1>
//                     <h2>Rating</h2>
//                     <h3>{data.place.showEstablished()}
//                     </h3>
//                     <h4>Serving {show.place.cuisines}</h4>
//                     <h2>Description</h2>
//                 </div>
//             </div>
//             <div>
//                 <h2>Comments</h2>
//                 <p>No comments yet.</p>
//             </div>
//             <div>
//                 <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
//             </div>
//             <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
//                 <button type='submit' className='btn btn-danger'>Delete
//                 </button>
//             </form>
//           </main>
//         </Def>
//     )
// }




module.exports = show

// function show (data) {
//     return (
//         <Def>
//   <main>
//     <div className="row">
//       <div className="col-sm-6">
//         <img src={data.place.pic} alt={data.place.name} />
//         <h3>
//           Located in {data.place.city}, {data.place.state}
//         </h3>
//       </div>
//       <div className="col-sm-6">
//         ...
//         <h2>
//           Description
//         </h2>
//         <h3>
//           {data.place.showEstablished()}
//         </h3>
//         <h4>
//           Serving {data.place.cuisines}
//         </h4>
//         ...
//     </div>
//     </div>
//   </main>
//     </Def>
//     )
// }