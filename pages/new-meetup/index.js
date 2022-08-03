import NewMeetupForm from "/components/meetups/NewMeetupForm";

 function NewMeetupPage() {
     const   onAddMeetup = async(inputs) => {
      const response = await fetch('api/new-meetup/',{
          method: 'POST',
          body: JSON.stringify(inputs),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      const data= await response.json();
      console.log(data);
    };

    return (
            <NewMeetupForm onAddMeetup={onAddMeetup} />
    )
}

export default NewMeetupPage;
