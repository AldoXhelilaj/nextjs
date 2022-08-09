import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import Loader from '../../components/ui/Loader'
import {useRouter} from 'next/router';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailHandler () {
    router.push('/' + props.id)

  }

  if (!props) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Loader />
    </div>;
}


  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>

          <button onClick={showDetailHandler}>Show Details</button>
        </div>
        {console.log(props.id)}
      </Card>
    </li>
  );
}

export default MeetupItem;
