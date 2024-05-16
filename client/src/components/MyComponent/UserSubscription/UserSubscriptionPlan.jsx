import '../MyCSS/UserSubscriptionPlan.css'
import image from "../../images/built.jpg";
import Plan from './Plan';
const plans=[
    {
        month:1,
        price:30.00,
    },
    {
        month:2,
        price:50.00,
    },
    {
        month:3,
        price:70.00,
    },
    {
        month:6,
        price:150.00,
    },
    {
        month:12,
        price:250.00,
    }
]
const UserSubscriptionPlan=()=>{
 return(
    <div className='UserSubscriptionPlan'>
        <div className='book-title'>
            <img src={image} className='bookImage'/>
            <h5>I Am Not Built To Break</h5>
        
        </div>
        <div className='Plan-list'>
            {plans.map((plan,index)=><Plan key={index} plan={plan}/>)}
            

        </div>

    </div>
 )
}

export default UserSubscriptionPlan;