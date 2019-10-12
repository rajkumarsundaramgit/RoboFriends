import React from 'react';
import Card from '../components/Card'

const CardList = ({robots}) => {
	const cardArray = robots.map((user, ind) => {
		return <Card key={ind} id={robots[ind].id} name={robots[ind].name} email={robots[ind].email} />
	})
    return (
		<div>
			{cardArray}
		</div>	
  	);
}
export default CardList;
