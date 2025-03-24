import { StyleSheet, SafeAreaView,Platform, ScrollView} from 'react-native';

import PokemonCard from './components/PokemonCard';

export default function App() {

  const charmaderData={
    name:"Chamander",
    image: require("./assets/charmander.png"),
    type: "fire",
    hp: 39,
    moves:["Scratch", "Ember","Growl","Leer"],
    weaknesses: ["water","rock"],
  };

  const bulbasaurData={
    name:"bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves:["Tackle", "Vine whip", "Growl", "Leech seed"],
    weaknesses: ["Fire","Ice","Flying","Psychic"],
  };

  const pikachuData={
    name:"pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves:["Quick Attack","Thunderbolt","Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  const squirtleData={
    name:"squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves:["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Ground"],
  };

  

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <PokemonCard
        {...charmaderData}
      /> 

      <PokemonCard
        {...bulbasaurData}
      />

      <PokemonCard
        {...pikachuData}
      />

      <PokemonCard
        {...squirtleData}
      />
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS ==='android'? 55:0,
  
  },
});


/*
  An alternative for the flatlist component for rendering section with the same styling
    is to create the component and style it and then import it into your app.js file and then spread the data inside the custom component
    
    you pass the data you are going to spread in the custom component in the app.js as parameter in the custom component file
*/