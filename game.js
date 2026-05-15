const CARD_SYMBOLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R'];
const DIFFICULTY_TIERS = [
// Easy
{
  name: "Easy",
    pairs: 6,
    previewTime: 3500,
    timeBonus: 5,
    modifiers: []
},
//Normal
{
  name: "Normal",  
    pairs: 8,
    previewTime: 3000,
    timeBonus: 4,
    modifiers: []
},
//Hard
{
  name: "Hard",
    pairs: 10,
    previewTime: 2500,
    timeBonus: 3,
    modifiers: ["shuffle"]
},
//Master
{
  name: "Master",
    pairs: 12,
    previewTime: 2000,
    timeBonus: 2,
    modifiers: ["fadingCards"]
},
//Insane
{
  name: "Insane",
    pairs: 14,
    previewTime: 1500,
    timeBonus: 1,
    modifiers: ["shuffle", "fadingCards"]
},
//Chaos
{
  name: "Chaos",
    pairs: 18,
    previewTime: 1000,
    timeBonus: 0.2,
    modifiers: ["shuffle", "fadingCards"]
}
];