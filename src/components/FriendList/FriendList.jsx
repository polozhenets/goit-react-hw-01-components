import css from './FriendList.module.css'
import PropTypes from 'prop-types'

export const FriendList = ({friendlist}) =>{
    return (

        <ul className={css.friends__list}>
            {friendlist.map(item=><li key={item.id} className={css.friends__item}>
                                    <span className={`${css.friends__status} ${css[item.isOnline]}`}></span>
                                    <img className={css.avatar} src={item.avatar} alt="User avatar" width="48" />
                                    <p className={css.name}>{item.name}</p>
                                </li>)}
        </ul>

    )
}

FriendList.propTypes = {
    friendlist:PropTypes.array.isRequired,
};