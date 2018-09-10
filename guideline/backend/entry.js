import express from 'express'
import routing from '../route.config.js'
import layout from './pages/server-render'

const metaInfo = {
    [routing.pages.main]: { title: 'Main sample' },
    [routing.pages.button]: { title: 'Button sample' },
	[routing.pages.container]: { title: 'Container sample' },
    [routing.pages.input]: { title: 'Input sample' },
	[routing.pages.textarea]: { title: 'TextArea sample' },
	[routing.pages.table]: { title: 'Table sample' },
	[routing.pages.popover]: { title: 'Popover sample' },
	[routing.pages.modal]: { title: 'Modal sample' },
	[routing.pages.dropdown]: { title: 'DropDown sample' }
}

const app = express()

app.use(routing.pages.main, express.static(__dirName + '/public/bundle'))
app.listen(routing.port)

app.get([routing.pages.main, routing.pages.button, routing.pages.container, routing.pages.input, routing.pages.textarea, routing.pages.table, routing.pages.popover, routing.pages.modal, routing.pages.dropdown], (req, resp) => {
    let content = layout(metaInfo[req.path])
	resp.send(content)
})

app.get('*', (req, resp) => {
    let content = layout(metaInfo[req.path])
	resp.send(content)
})

console.log(`Web server is running on port ${routing.port}`)