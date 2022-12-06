const globalMixins = {    
  methods: {   
    brazilianCurrency: function(value) {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    },
    characterLimiter: function(text, numberOfCharacter) {
      // Limiting the number of characters 
      text = text.substring(numberOfCharacter, 0)
      return text || ""        
    },
  }
}

export default globalMixins