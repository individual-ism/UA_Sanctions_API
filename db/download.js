import fetch from 'node-fetch'
import { promises as fsPromises} from 'fs'

await fetch("https://data.opensanctions.org/datasets/20221219/ua_sfms_blacklist/entities.ftm.json")
.then(res => res.json())
.then(data => {
    fsPromises.writeFile("../seed/entities.json", JSON.stringify(data))
})
.catch(error => console.error(error))