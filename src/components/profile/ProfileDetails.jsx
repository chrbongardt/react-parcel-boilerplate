import React from 'react'
import style from './Profile.scss'

const Row = ({title,value}) => (
    <div className={style.row}>
        <span className={style.label}>{title}</span>
        <span className={style.value}>{value}</span>
    </div>
)

const ProfileDetails = ({profile}) => {
    if(profile.loading || profile.data == null){
        return (<div> Loading ... </div>)
    }
    return (
        <div className={style.details}>
            <Row title='Name' value={profile.data.name} />
            <Row title='Email' value={profile.data.email} />
        </div>
    )
}
export default ProfileDetails
