import './Card.css';

function Card(props) {

    //  const classes = 'card' + props.classNameX;
    // return <div className={classes}>{props.children}</div>
    return <div className={props.classNameX}>{props.children}</div>
        // return <div className='card'>{props.children }</div>

}
export default Card;