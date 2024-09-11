// Step 1: Define the Barbarian class
class Barbarian {
    constructor(level) {
      this.name = "Barbarian"
      this.level = level;
      this.rages = this.calculateRages(level);
      this.proficiencyBonus = this.calculateProficiencyBonus(level);
      this.rageBonusDamage = this.calculateRageBonusDamage(level);
    }
  
    // Method to calculate the number of rages based on level
    calculateRages(level) {
      if (level <= 2) return 2;
      else if (level <= 5) return 3;
      else if (level <= 11) return 4;
      else if (level <= 16) return 5;
      else return 6; // Level 17 and above
    }
  
    // Method to calculate the proficiency bonus based on level
    calculateProficiencyBonus(level) {
      if (level <= 4) return 2;
      else if (level <= 8) return 3;
      else if (level <= 12) return 4;
      else if (level <= 16) return 5;
      else return 6; // Level 17 and above
    }
  
    // Method to calculate the rage bonus damage based on level
    calculateRageBonusDamage(level) {
      if (level <= 8) return 2;
      else if (level <= 15) return 3;
      else return 4; // Level 16 and above
    }
  }

  class Bard {
    constructor(level) {
      this.level = level;
      this.cantripsKnown = this.calculateCantripsKnown();
      this.spellsKnown = this.calculateSpellsKnown();
      this.spellSlots = this.calculateSpellSlots();
    }
  
    // Method to calculate the number of cantrips known by a Bard at the current level
    calculateCantripsKnown() {
      if (this.level <= 3) return 2;
      else if (this.level <= 9) return 3;
      else return 4; // Level 10 and above
    }
  
    // Method to calculate the number of spells known by a Bard at the current level
    calculateSpellsKnown() {
      if (this.level === 1) return 4;
      else if (this.level === 2) return 5;
      else if (this.level === 3) return 6;
      else if (this.level === 4) return 7;
      else if (this.level === 5) return 8;
      else if (this.level === 6) return 9;
      else if (this.level === 7) return 10;
      else if (this.level === 8) return 11;
      else if (this.level === 9) return 12;
      else if (this.level === 10) return 14;
      else if (this.level === 11) return 15;
      else if (this.level === 12) return 15;
      else if (this.level === 13) return 16;
      else if (this.level === 14) return 18;
      else if (this.level === 15) return 19;
      else if (this.level === 16) return 19;
      else if (this.level === 17) return 20;
      else if (this.level === 18) return 22;
      else if (this.level === 19) return 22;
      else return 22; // Level 20
    }
  
    // Method to calculate the spell slots available to a Bard at the current level
    calculateSpellSlots() {
      const spellSlots = {
        1: [2, 0, 0, 0, 0],
        2: [3, 0, 0, 0, 0],
        3: [4, 2, 0, 0, 0],
        4: [4, 3, 0, 0, 0],
        5: [4, 3, 2, 0, 0],
        6: [4, 3, 3, 0, 0],
        7: [4, 3, 3, 1, 0],
        8: [4, 3, 3, 2, 0],
        9: [4, 3, 3, 3, 1],
        10: [4, 3, 3, 3, 2],
        11: [4, 3, 3, 3, 2],
        12: [4, 3, 3, 3, 2],
        13: [4, 3, 3, 3, 3, 1],
        14: [4, 3, 3, 3, 3, 1],
        15: [4, 3, 3, 3, 3, 1],
        16: [4, 3, 3, 3, 3, 1],
        17: [4, 3, 3, 3, 3, 2],
        18: [4, 3, 3, 3, 3, 2],
        19: [4, 3, 3, 3, 3, 2],
        20: [4, 3, 3, 3, 3, 2]
      };
  
      return spellSlots[this.level] || [0, 0, 0, 0, 0, 0]; // Default to 0 slots if level is not found
    }
  
    // Method to display Bard's spellcasting information
    displaySpellcastingInfo() {
      console.log(`Level: ${this.level}`);
      console.log(`Cantrips Known: ${this.cantripsKnown}`);
      console.log(`Spells Known: ${this.spellsKnown}`);
      console.log(`Spell Slots: ${this.spellSlots.join(", ")}`);
    }
  }
  

  


let character = {
    name: "John Doe",
    class: Barbarian(10),
    ability_scores: {
        Strength: 16,
        Dexterity: 14,
        Constitution: 15,
        Intelligence: 12,
        Wisdom: 10,
        Charisma: 8
    },
    saving_throws: {
        Strength: 0,
        Dexterity: 0,
        Constitution: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0
    },
    skills: ["Athletics", "Perception", "Survival"],
    attacks: ["Battleaxe", "Handaxe"],
    spells: ["Rage"],
    gold: 50,
    hit_points: 35,
    max_hit_points: 35,
    ac: 14,
    speed: 30,
    background: "Soldier",
    xp: 1200,
    race: "Human",
    alignment: "Chaotic Good",
    weapon_proficiencies: ["Battleaxe", "Handaxe"],
    language_proficiencies: ["Common", "Orc"],
    ideals: ["Freedom"],
    personality: ["Brave", "Loyal"],
    flaws: ["Impulsive"],
    bonds: ["Protect my comrades"],
    inventory: ["Health Potion", "Rations"],
    abilities: ["Darkvisoin: See in the dark"]
        
    
};

function displayCharacterInfo() {
    try {
        const nameElem = document.getElementById('name');
        const classElem = document.getElementById('class');

        if (nameElem && classElem) {
            nameElem.innerText = `Name: ${character.name}`;
            classElem.innerText = `Classhole: ${character.class.name, character.class.level}`;
        }

        displayAbilityScores();
        displaySavingThrows();
        displaySkills();
        displayAttacks();
        displaySpells();
        document.getElementById('gold').innerText = `Gold: ${character.gold}`;
        document.getElementById('hit-points').innerText = `Hit Points: ${character.hit_points}/${character.max_hit_points}`;
        document.getElementById('ac').innerText = `Armor Class (AC): ${character.ac}`;
        document.getElementById('speed').innerText = `Movement Speed: ${character.speed} ft`;
        document.getElementById('background').innerText = `Background: ${character.background}`;
        document.getElementById('xp').innerText = `XP: ${character.xp}`;
        document.getElementById('race').innerText = `Race: ${character.race}`;
        document.getElementById('alignment').innerText = `Alignment: ${character.alignment}`;

        displayWeaponProficiencies();
        displayLanguageProficiencies();
        displayIdeals();
        displayPersonality();
        displayFlaws();
        displayBonds();
        updateInventory();
        updateAbilities()
    } catch (error) {
        console.error('Error displaying character info:', error);
    }
}

function displayAbilityScores() {
    const container = document.getElementById('ability-scores');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (let [score, value] of Object.entries(character.ability_scores)) {
            const bonus = Math.floor((value - 10) / 2);
            const div = document.createElement('div');
            div.innerHTML = `${score}: ${value} <span class="bonus">(${bonus >= 0 ? '+' : ''}${bonus})</span>`;
            container.appendChild(div);
        }
    }
}



function displaySavingThrows() {
    const container = document.getElementById('saving-throws');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (let [throwName, throwValue] of Object.entries(character.saving_throws)) {
            const div = document.createElement('div');
            div.innerHTML = `${throwName}: ${throwValue}`;
            container.appendChild(div);
        }
    }
}

function displaySkills() {
    const container = document.getElementById('skills');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const skill of character.skills) {
            const p = document.createElement("p");
            p.innerText = skill;
            container.appendChild(p);
        }
    }
}

function displayAttacks() {
    const container = document.getElementById('attacks');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const attack of character.attacks) {
            const p = document.createElement("p");
            p.innerText = attack;
            container.appendChild(p);
        }
    }
}

function displaySpells() {
    const container = document.getElementById('spells');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const spell of character.spells) {
            const p = document.createElement("p");
            p.innerText = spell;
            container.appendChild(p);
        }
    }
}

function displayAbilities() {
    const container = document.getElementById('abilitiesList');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const ability of character.abilities) {
            const p = document.createElement('p');
            p.innerHTML = name;
            container.appendChild(p);
        }
    }
}


function displayWeaponProficiencies() {
    const container = document.getElementById('weapon-proficiencies');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const proficiency of character.weapon_proficiencies) {
            const p = document.createElement("p");
            p.innerText = proficiency;
            container.appendChild(p);
        }
    }
}

function displayLanguageProficiencies() {
    const container = document.getElementById('language-proficiencies');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const proficiency of character.language_proficiencies) {
            const p = document.createElement("p");
            p.innerText = proficiency;
            container.appendChild(p);
        }
    }
}

function displayIdeals() {
    const container = document.getElementById('ideals');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const ideal of character.ideals) {
            const p = document.createElement("p");
            p.innerText = ideal;
            container.appendChild(p);
        }
    }
}

function displayPersonality() {
    const container = document.getElementById('personality');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const trait of character.personality) {
            const p = document.createElement("p");
            p.innerText = trait;
            container.appendChild(p);
        }
    }
}

function displayFlaws() {
    const container = document.getElementById('flaws');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const flaw of character.flaws) {
            const p = document.createElement("p");
            p.innerText = flaw;
            container.appendChild(p);
        }
    }
}

function displayBonds() {
    const container = document.getElementById('bonds');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const bond of character.bonds) {
            const p = document.createElement("p");
            p.innerText = bond;
            container.appendChild(p);
        }
    }
}

function updateInventory() {
    const container = document.getElementById('inventoryList');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const item of character.inventory) {
            const p = document.createElement("p");
            p.innerText = item;
            container.appendChild(p);
        }
    }
}

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();
    if (item) {
        character.inventory.push(item);
        updateInventory();
        itemInput.value = ""; // Clear input field
    }
}

function removeItem() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();
    if (item) {
        const index = character.inventory.indexOf(item);
        if (index > -1) {
            character.inventory.splice(index, 1);
            updateInventory();
        }
        itemInput.value = ""; // Clear input field
    }
}

function addAbility() {
    const nameInput = document.getElementById('abilityNameInput');
    const name = nameInput.value.trim();
    if (name) {
        character.abilities.push(name)
        updateAbilities();
        nameInput.value = "";
    }
    
    
    
}

function removeAbility() {
    const nameInput = document.getElementById('abilityNameInput');
    const name = nameInput.value.trim();
    if (name) {
        delete character.abilities[name];
        updateAbilities();
        nameInput.value = ""; // Clear input field
    }
}

function updateAbilities() {
    const container = document.getElementById('abilitiesList');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const [name, value] of Object.entries(character.abilities)) {
            const div = document.createElement('div');
            div.innerHTML = `${name}: ${value}`;
            container.appendChild(div);
        }
    }
}
function addGold() {
    const goldInput = document.getElementById('goldInput');
    const amount = parseInt(goldInput.value, 10);
    if (!isNaN(amount)) {
        character.gold += amount;
        document.getElementById('gold').innerText = `Gold: ${character.gold}`;
        goldInput.value = ""; // Clear input field
    }
}

function removeGold() {
    const goldInput = document.getElementById('goldInput');
    const amount = parseInt(goldInput.value, 10);
    if (!isNaN(amount)) {
        character.gold -= amount;
        document.getElementById('gold').innerText = `Gold: ${character.gold}`;
        goldInput.value = ""; // Clear input field
    }
}

function editHealth() {
    const healthInput = document.getElementById('healthInput');
    const newHealth = parseInt(healthInput.value, 10);
    if (!isNaN(newHealth)) {
        character.hit_points = newHealth;
        document.getElementById('hit-points').innerText = `Hit Points: ${character.hit_points}/${character.max_hit_points}`;
        healthInput.value = ""; // Clear input field
    }
}

function setMaxHealth() {
    const maxHealthInput = document.getElementById('maxHealthInput');
    const maxHealth = parseInt(maxHealthInput.value, 10);
    if (!isNaN(maxHealth)) {
        character.max_hit_points = maxHealth;
        document.getElementById('hit-points').innerText = `Hit Points: ${character.hit_points}/${character.max_hit_points}`;
        maxHealthInput.value = ""; // Clear input field
    }
}

function editAC() {
    const acInput = document.getElementById('acInput');
    const newAC = parseInt(acInput.value, 10);
    if (!isNaN(newAC)) {
        character.ac = newAC;
        document.getElementById('ac').innerText = `Armor Class (AC): ${character.ac}`;
        acInput.value = ""; // Clear input field
    }
}

function editSpeed() {
    const speedInput = document.getElementById('speedInput');
    const newSpeed = parseInt(speedInput.value, 10);
    if (!isNaN(newSpeed)) {
        character.speed = newSpeed;
        document.getElementById('speed').innerText = `Movement Speed: ${character.speed} ft`;
        speedInput.value = ""; // Clear input field
    }
}

function editBackground() {
    const backgroundInput = document.getElementById('backgroundInput');
    const newBackground = backgroundInput.value.trim();
    if (newBackground) {
        character.background = newBackground;
        document.getElementById('background').innerText = `Background: ${character.background}`;
        backgroundInput.value = ""; // Clear input field
    }
}

function editXP() {
    const xpInput = document.getElementById('xpInput');
    const newXP = parseInt(xpInput.value, 10);
    if (!isNaN(newXP)) {
        character.xp = newXP;
        document.getElementById('xp').innerText = `XP: ${character.xp}`;
        xpInput.value = ""; // Clear input field
    }
}


function updateAttacks() {
    const container = document.getElementById('attacks');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const item of character.attacks) {
            const p = document.createElement("p");
            p.innerText = item;
            container.appendChild(p);
        }
    }
}

function addAttack() {
    const itemInput = document.getElementById('attackInput');
    const item = itemInput.value.trim();
    if (item) {
        character.attacks.push(item);
        updateAttacks();
        itemInput.value = ""; // Clear input field
    }
}

function removeAttack() {
    const itemInput = document.getElementById('attackInput');
    const item = itemInput.value.trim();
    if (item) {
        const index = character.attacks.indexOf(item);
        if (index > -1) {
            character.attacks.splice(index, 1);
            updateAttacks();
        }
        itemInput.value = ""; // Clear input field
    }
}



function updateSpells() {
    const container = document.getElementById('spells');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const item of character.spells) {
            const p = document.createElement("p");
            p.innerText = item;
            container.appendChild(p);
        }
    }
}

function addSpell() {
    const itemInput = document.getElementById('spellInput');
    const item = itemInput.value.trim();
    if (item) {
        character.spells.push(item);
        updateSpells();
        itemInput.value = ""; // Clear input field
    }
}

function removeSpell() {
    const itemInput = document.getElementById('spellInput');
    const item = itemInput.value.trim();
    if (item) {
        const index = character.spells.indexOf(item);
        if (index > -1) {
            character.spells.splice(index, 1);
            updateSpells();
        }
        itemInput.value = ""; // Clear input field
    }
}

function updateSkills() {
    const container = document.getElementById('skills');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const item of character.skills) {
            const p = document.createElement("p");
            p.innerText = item;
            container.appendChild(p);
        }
    }
}

function addSkill() {
    const itemInput = document.getElementById('skillInput');
    const item = itemInput.value.trim();
    if (item) {
        character.skills.push(item);
        updateSkills();
        itemInput.value = ""; // Clear input field
    }
}

function removeSkill() {
    const itemInput = document.getElementById('skillInput');
    const item = itemInput.value.trim();
    if (item) {
        const index = character.skills.indexOf(item);
        if (index > -1) {
            character.skills.splice(index, 1);
            updateSkills();
        }
        itemInput.value = ""; // Clear input field
    }
}


function updateProf() {
    const container = document.getElementById('weapon-proficiencies');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const item of character.weapon_proficiencies) {
            const p = document.createElement("p");
            p.innerText = item;
            container.appendChild(p);
        }
    }
}

function addProf() {
    const itemInput = document.getElementById('profInput');
    const item = itemInput.value.trim();
    if (item) {
        character.weapon_proficiencies.push(item);
        updateProf();
        itemInput.value = ""; // Clear input field
    }
}

function removeProf() {
    const itemInput = document.getElementById('profInput');
    const item = itemInput.value.trim();
    if (item) {
        const index = character.weapon_proficiencies.indexOf(item);
        if (index > -1) {
            character.weapon_proficiencies.splice(index, 1);
            updateProf();
        }
        itemInput.value = ""; // Clear input field
    }
}

function updateLang() {
    const container = document.getElementById('language-proficiencies');
    if (container) {
        container.innerHTML = ""; // Clear previous content
        for (const item of character.language_proficiencies) {
            const p = document.createElement("p");
            p.innerText = item;
            container.appendChild(p);
        }
    }
}

function addLang() {
    const itemInput = document.getElementById('langInput');
    const item = itemInput.value.trim();
    if (item) {
        character.language_proficiencies.push(item);
        updateLang();
        itemInput.value = ""; // Clear input field
    }
}

function removeLang() {
    const itemInput = document.getElementById('langInput');
    const item = itemInput.value.trim();
    if (item) {
        const index = character.language_proficiencies.indexOf(item);
        if (index > -1) {
            character.language_proficiencies.splice(index, 1);
            updateLang();
        }
        itemInput.value = ""; // Clear input field
    }
}

let currentStep = 1;

function openModal() {
    document.getElementById('characterModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('characterModal').style.display = 'none';
}

function nextStep(step) {
    const currentStepDiv = document.getElementById(`step${currentStep}`);
    const nextStepDiv = document.getElementById(`step${step}`);
    
    if (currentStepDiv) {
        currentStepDiv.style.display = 'none';
    }
    
    if (nextStepDiv) {
        nextStepDiv.style.display = 'block';
    }

    currentStep = step;
}

function addAbility() {
    const ability = document.getElementById('abilityInput').value.trim();
    if (ability) {
        if (!character.abilities) {
            character.abilities = [];
        }
        character.abilities.push(ability);
        const p = document.createElement('p');
        p.innerText = ability;
        document.getElementById('abilitiesDiv').appendChild(p);
        document.getElementById('abilityInput').value = '';
    }
}

function createAndSaveCharacter() {
    // Collect data from the modal inputs
    character.name = document.getElementById('nameInput').value;
    character.class = document.getElementById('classInput').value;
    character.alignment = document.getElementById('alignmentInput').value;
    character.race = document.getElementById('raceInput').value;
    character.ability_scores = {
        strength: parseInt(document.getElementById('strengthInput').value, 10),
        dexterity: parseInt(document.getElementById('dexterityInput').value, 10),
        constitution: parseInt(document.getElementById('constitutionInput').value, 10),
        intelligence: parseInt(document.getElementById('intelligenceInput').value, 10),
        wisdom: parseInt(document.getElementById('wisdomInput').value, 10),
        charisma: parseInt(document.getElementById('charismaInput').value, 10)
    };
    character.skills = document.getElementById('skillsInput').value.split(',').map(item => item.trim());
    character.weapon_proficiencies = document.getElementById('proficienciesInput').value.split(',').map(item => item.trim());
    character.languages = document.getElementById('languagesInput').value.split(',').map(item => item.trim());
    character.hp = parseInt(document.getElementById('hpInput').value, 10);
    character.movement_speed = parseInt(document.getElementById('speedInput').value, 10);
    character.abilities = character.abilities || [];
    character.ideals = document.getElementById('idealsInput').value.split(',').map(item => item.trim());
    character.personality_traits = document.getElementById('personalityInput').value.split(',').map(item => item.trim());
    character.flaws = document.getElementById('flawsInput').value.split(',').map(item => item.trim());
    character.bonds = document.getElementById('bondsInput').value.split(',').map(item => item.trim());
    character.inventory = document.getElementById('inventoryInput').value.split(',').map(item => item.trim());
    character.ac = parseInt(document.getElementById('acInput').value, 10);            
    // Close the modal
    closeModal();
    character = character
    // Save the character
    saveCharacter();
}





function saveCharacter() {
    const data = JSON.stringify(character, null, 2); // Pretty print JSON
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${character.name}_character.json`; // Filename based on character name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function loadCharacter(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                character = data; // Update the character object with loaded data
                displayCharacterInfo();
            } catch (error) {
                console.error('Error parsing character file:', error);
            }
        };
        reader.readAsText(file);
    }
}

document.getElementById('loadCharacterInput').addEventListener('change', loadCharacter);

window.onload = function() {
    // Display a default character on page load
    displayCharacterInfo();
};