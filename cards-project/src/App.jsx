import React from 'react'
import Card from './components/Card'
const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      name: "Microsoft",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior-level",
      pay: "$45/hour",
      location: "Karachi, Pakistan"
    },
    {
      brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
      name: "Google",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$80/hour",
      location: "Lahore, Pakistan"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
      name: "Meta",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Mid-level",
      pay: "$55/hour",
      location: "Islamabad, Pakistan"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$70/hour",
      location: "Karachi, Pakistan"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      name: "IBM",
      datePosted: "3 weeks ago",
      post: "Data Analyst",
      tag1: "Part-time",
      tag2: "Junior-level",
      pay: "$40/hour",
      location: "Hyderabad, Pakistan"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
      name: "Apple",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$65/hour",
      location: "Karachi, Pakistan"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZIzGfN3U2hTGzcop3QNcgsVQHZjDtTo47Q&s",
      name: "Adobe",
      datePosted: "4 days ago",
      post: "Graphic Designer",
      tag1: "Part-time",
      tag2: "Junior-level",
      pay: "$35/hour",
      location: "Lahore, Pakistan"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      name: "Netflix",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$85/hour",
      location: "Islamabad, Pakistan"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/735/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      name: "Tesla",
      datePosted: "1 week ago",
      post: "AI Research Engineer",
      tag1: "Full-time",
      tag2: "Expert-level",
      pay: "$100/hour",
      location: "Karachi, Pakistan"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHsICl3niUWsZ9bT3JFN7hncJG572p-XLvg&s",
      name: "Intel",
      datePosted: "5 days ago",
      post: "Hardware Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$60/hour",
      location: "Lahore, Pakistan"
    }
  ];

  console.log(jobOpenings.length)


  return (
    <>
      <h1 className='main-heading' style={{textAlign:'center'}}>First React Cards Component Project</h1> 
    <div className='parent'>
      <br />
      {jobOpenings.map((element, index)=>{
        return <div key={index}>
          <Card company={element.name} logo={element.brandLogo} pay={element.pay} location={element.location}
         tag1={element.tag1} tag2={element.tag2} role={element.post} postDate={element.datePosted}/>
        </div>
      })}

      
    </div>
    </>
  )
}

export default App