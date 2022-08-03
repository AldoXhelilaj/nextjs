import { MongoClient } from "mongodb";
import MeetupList from "/components/meetups/MeetupList";
import Layout from "/components/layout/Layout";


const MEETUP_LIST = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Skanderbeg_square_tirana_2016.jpg/1920px-Skanderbeg_square_tirana_2016.jpg",
    address: "Some addres",
    description: "This is the first meet up",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Skanderbeg_square_tirana_2016.jpg/1920px-Skanderbeg_square_tirana_2016.jpg",
    address: "Some addres",
    description: "This is the second meet up",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Skanderbeg_square_tirana_2016.jpg/1920px-Skanderbeg_square_tirana_2016.jpg",
    address: "Some addres",
    description: "This is the third meet up",
  },
];
function Home(props) {


  return (

    <MeetupList meetups={props.meetups} />
  );
}



// export async function getStaticPaths() {
//   return {
//     fallback: 'blocking',
//     paths: [
//       {
//         params: {
//           meetupId: 'm1'
//         },
//         params: {
//           meetupId: 'm2'
//         },
//       },
//     ],
//   }
// }
export async function getStaticProps(context) {
  console.log(context)

  const client = await MongoClient.connect("mongodb+srv://aldo:aldo@cluster0.w2nwehf.mongodb.net/meetups?retryWrites=true&w=majority");
 
  const collection = client.db().collection("meetups");
  // perform actions on the collection object

const meetUps =  await collection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetUps.map((elem)=>({
        title:elem.title,
        image:elem.image,
        address:elem.address,
        id:elem._id.toString()
      })),
      revalidate: 1
    }
  }
}


  export default Home;