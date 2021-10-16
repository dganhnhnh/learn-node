const {readFileSync,writeFileSync, readFile, writeFile}=require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    console.log('first step')
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        console.log('second step')
        writeFile(
            './content/resultofsync.txt',
            `merged in async! ${first},${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
                console.log('3rd step')
            }
        )
    })
})
console.log('3 steps done! next task on!')