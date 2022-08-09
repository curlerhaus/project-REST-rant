const React = require('react')
const Def = require('../default')


//pasted from class page
function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
  
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
                 {comments}
                 {/* <p>No comments yet.</p> */}
             </div>
             <div>
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <label htmlFor="author">Author</label>
                    <input type="text"
                            className='form-control'
                            id='author'
                            name='author'/>
                    <label htmlFor="content">Content</label>
                    <input type="text"
                            className='form-control'
                            id='content'
                            name='content'/>
                    <div>
                      <div>
                        <label htmlFor="starRating">Star Rating</label>
                        <input type = "range" class='range' 
                              min='0' 
                              max='10' 
                              value='5' 
                              id='starRating' 
                              name='starRating' />
                      </div>
                      <div>
                      <label htmlFor="rant">Rant</label>
                        <input type="checkbox" 
                            id='rant' 
                            name='rant' />
                      </div>
                    </div>

                        <div>
                        <input type="submit"
                                className='btn btn-primary'
                                value='Submit Comment' />
                        </div>
                </form> 
             </div>
             
  </main>
    </Def>
    )
}

module.exports = show


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




