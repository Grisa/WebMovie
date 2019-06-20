const Neode = require("neode");
const instance = new Neode('bolt://localhost:7687', 'neo4j', '111111');

export default instance;