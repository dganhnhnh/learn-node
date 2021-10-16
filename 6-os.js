const os = require('os')

const currentOS ={
    name: os.type(),
    release: os.release(),
    uptime:os.uptime(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    freeMemPercentage:(os.freemem() / os.totalmem())*100
}

console.log(currentOS)