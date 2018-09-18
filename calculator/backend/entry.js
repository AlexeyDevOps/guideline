import express from 'express'
import routing from '../route.config.js'
import layout from './pages/server-render'

const metaInfo = {
    [routing.pages.main]: { title: 'Calculator' }    
}

const app = express()

app.use(routing.pages.main, express.static(__dirName + '/public/bundle'))
app.listen(routing.port)

app.get('*', (req, resp) => {
    let content = layout(metaInfo[req.path])
	resp.send(content)
})

console.log(`Web server is running on port ${routing.port}`)