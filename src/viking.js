// Soldier
class Soldier {
   constructor(health, strength) {
      this.health = health;
      this.strength = strength
   }
   attack() {
      return this.strength
   }

   receiveDamage(damage) {
      this.health = this.health - damage
   }
}

// Viking
class Viking extends Soldier{
   constructor(name,health,strength) {
      super(health,strength)
      this.name = name
   }
   receiveDamage(damage) {
      this.health = this.health - damage
      if(this.health > 0 ) {return `${this.name} has received ${damage} points of damage` }
      else {return `${this.name} has died in act of combat`}
   }
   battleCry(){
      return "Odin Owns You All!"
   }
}

// Saxon
class Saxon extends Soldier {
   receiveDamage(damage){
      this.health = this.health - damage
      if(this.health > 0 ) {return `A Saxon has received ${damage} points of damage` }
      else {return `A Saxon has died in combat`}
   }
}

// War
class War {
   constructor(){  
      this.saxonArmy = []
      this.vikingArmy = []
   }
   addViking(newViking){
      this.vikingArmy.push(newViking)
   };
   
   addSaxon(newSaxon){
      this.saxonArmy.push(newSaxon)
   };
   vikingAttack(){
      let indexVikingHasard = Math.floor(Math.random() * this.vikingArmy.length)
      let indexSaxonHasard = Math.floor(Math.random() * this.saxonArmy.length)
     let dommageRecu = this.saxonArmy[indexSaxonHasard].receiveDamage(this.vikingArmy[indexVikingHasard].attack())

      if(dommageRecu.includes("died")){this.saxonArmy.splice([indexSaxonHasard],1)}

      return dommageRecu
      
   };
   saxonAttack(){
      let indexVikingHasard = Math.floor(Math.random() * this.vikingArmy.length)
      let indexSaxonHasard = Math.floor(Math.random() * this.saxonArmy.length)
     let dommageRecu = this.vikingArmy[indexVikingHasard].receiveDamage(this.saxonArmy[indexSaxonHasard].attack())

      if(dommageRecu.includes("died")){this.vikingArmy.splice([indexVikingHasard],1)}

      return dommageRecu

   };

   showStatus(){
      if(this.saxonArmy.length === 0){return "Vikings have won the war of the century!"}
      else if (this.vikingArmy.length === 0){return "Saxons have fought for their lives and survived another day..."}
      else {return "Vikings and Saxons are still in the thick of battle."}
   };
}


 