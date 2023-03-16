import css from './FriendList.module.css'
import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem'
export const FriendList = ({friendlist}) =>{
    console.log(friendlist);
    return (

        <ul className={css.friends__list}>
            {friendlist.map(item=><FriendListItem key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline}/>)}
        </ul>

    )
}

FriendList.propTypes = {
    friendlist:PropTypes.array.isRequired,
};