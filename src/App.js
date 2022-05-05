import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeTile from './components/RecipeTile/RecipeTile'

const App = ({config}) => {
  const dietList = [
    'select diet',
    'balanced',
    'high-fiber',
    'high-protein',
    'low-carb',
    'low-fat',
    'low-sodium',
  ]
  const healthList = [
    'select health',
    'alcohol-cocktail',
    'alcohol-free',
    'celery-free',
    'crustacean-free',
    'dairy-free',
    'DASH',
    'egg-free',
    'fish-free',
    'fodmap-free',
    'gluten-free',
    'immuno-supportive',
    'keto-friendly',
    'kidney-friendly',
    'kosher',
    'low-fat-abs',
    'low-potassium',
    'low-sugar',
    'lupine-free',
    'Mediterranean',
    'mollusk-free',
    'mustard-free',
    'no-oil-added',
    'paleo',
    'peanut-free',
    'pescatarian',
    'pork-free',
    'red-meat-free',
    'sesame-free',
    'shellfish-free',
    'soy-free',
    'sugar-conscious',
    'sulfite-free',
    'tree-nut-free',
    'vegan',
    'vegetarian',
    'wheat-free',
  ]
  const cuisineList = [
    'select cuisine',
    'balanced',
    'high-fiber',
    'high-protein',
    'low-carb',
    'low-fat',
    'low-sodium',
  ]
  const mealList = [
    'select meal',
    'balanced',
    'high-fiber',
    'high-protein',
    'low-carb',
    'low-fat',
    'low-sodium',
  ]
  const dishList = [
    'select dish',
    'balanced',
    'high-fiber',
    'high-protein',
    'low-carb',
    'low-fat',
    'low-sodium',
  ]

  const [search, setSearch] = useState('latest')
  const [recipes, setRecipes] = useState([])
  const [diet, setDiet] = useState('')
  const [health, setHealth] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [meal, setMeal] = useState('')
  const [dish, setDish] = useState('')

  const getData = async () => {
    let query = `${process.env.REACT_APP_EDAMAM_URL}`
    query += search !== '' ? '&q=' + search : '';
    query += diet.split(' ')[0] !== 'select' && diet!=='' ? '&diet=' + diet : '';
    query += health.split(' ')[0] !== 'select' && health!=='' ? '&health=' + health :'';
    query += cuisine.split(' ')[0] !== 'select' && cuisine!=='' ? '&cuisineType=' + cuisine : '';
    query += meal.split(' ')[0] !== 'select' && meal!=='' ? '&mealType=' + meal : '';
    query += dish.split(' ')[0] !== 'select' && dish!=='' ? '&dishType=' + dish : '';
    // console.log(query);
    await axios
      .get(query, config)
      .then((res) => {
        setRecipes(res.data.hits)
        console.log(res.data)
      })
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-gray-300">
      <div className="text-center font-bold text-5xl pt-6">
        Search Your Favourite Food Recipe
      </div>
      <form
        className="w-11/12 md:w-5/12 m-auto mt-8 shadow-xl rounded-xl"
        onSubmit={(e) => {
          e.preventDefault()
          getData()
        }}
      >
        <input
          type="text"
          className="ring-0 h-12 px-6 font-bold text-center outline-0 w-3/4"
          placeholder="Search here....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-orange-500 p-3 w-1/4 mt-3 h-12 text-white font-bold cursor-pointer"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      {/* Filter */}
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-2 space-y-2 md:space-y-0 items-center mt-3">
        <h1 className='md:hidden text-xl font-bold text-center'>Filter</h1>
        <select className='shadow-xl w-1/2 md:w-auto rounded-xl p-2 uppercase' onChange={(e) => setDiet(e.target.value)}>
          {dietList.map((item, id) => <option key={id} value={item}>{item}</option>)}
        </select>
        <select className='shadow-xl w-1/2 md:w-auto rounded-xl p-2 uppercase' onChange={(e) => setHealth(e.target.value)}>
          {healthList.map((item, id) => <option key={id} value={item}>{item}</option>)}
        </select>
        <select className='shadow-xl w-1/2 md:w-auto rounded-xl p-2 uppercase' onChange={(e) => setCuisine(e.target.value)}>
          {cuisineList.map((item, id) => <option key={id} value={item}>{item}</option>)}
        </select>
        <select className='shadow-xl w-1/2 md:w-auto rounded-xl p-2 uppercase' onChange={(e) => setMeal(e.target.value)}>
          {mealList.map((item, id) => <option key={id} value={item}>{item}</option>)}
        </select>
        <select className='shadow-xl w-1/2 md:w-auto rounded-xl p-2 uppercase' onChange={(e) => setDish(e.target.value)}>
          {dishList.map((item, id) => <option key={id} value={item}>{item}</option>)}
        </select>
      </div>

      {/*RecipesList*/}
      {recipes.length > 0 && (
        <div className="overflow-hidden md:w-8/12 w-full  m-auto mt-12">
          {recipes.map((item, id) => (
            <RecipeTile key={id} data={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
