import {
    MongoClient
    , ObjectId
} from 'mongodb';
import MeetUpDetail from '../../components/meetups/MeetUpDetail'
import Loader from '../../components/ui/Loader'
const DetailMeetUp = (props) => {
    if (!props.meetupData) {
        return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Loader />
        </div>;
    }
    return (

        <MeetUpDetail
            title={props.meetupData.title}
            image={props.meetupData.image}
            address={props.meetupData.address}
            description={props.meetupData.description} />
    )

}


export async function getStaticPaths() {


    const client = await MongoClient.connect("mongodb+srv://aldo:aldo@cluster0.w2nwehf.mongodb.net/meetups?retryWrites=true&w=majority");

    const collection = client.db().collection("meetups");
    // perform actions on the collection object

    const meetUps = await collection.find({}, {
        _id: 1
    }).toArray();

    client.close();
    return {
        fallback: true,
        paths: meetUps.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString()
            },

        }))
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;


    const client = await MongoClient.connect("mongodb+srv://aldo:aldo@cluster0.w2nwehf.mongodb.net/meetups?retryWrites=true&w=majority");

    const collection = client.db().collection("meetups");
    // perform actions on the collection object

    const meetUps = await collection.findOne({
        _id: ObjectId(meetupId)
    });
    console.log(meetupId)
    return {
        props: {
            meetupData: {
                id: meetUps._id.toString(),
                title: meetUps.title,
                address: meetUps.address,
                description: meetUps.description,
                image: meetUps.image
            }
        },
        revalidate: 1
    }
}
export default DetailMeetUp;