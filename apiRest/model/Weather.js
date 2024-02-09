
class Weather{
    constructor(data) {
      this.w = data[0] || {}; 
    }
    getId()     { return this.w.id;   }
    getMain()   { return this.w.main; }    
}

module.exports = Weather; 