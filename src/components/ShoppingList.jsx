import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
    //On utilise reduce et on vérifie si son accumulateur contient déjà la catégorie de la plante avec 'acc.includes(plant.category)' 
    //et si ce n'est pas le cas, on l'ajoute à l'accumulateur avec 'acc.concat(plant.category)'
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);

    //Affiche une liste des différentes catégories 
    //puis la liste des plantes avec un emoji flamme si celle ci fait partie des meilleures ventes
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList