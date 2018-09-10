import { Route, Switch } from 'react-router-dom'
import Main from './web/main.jsx'
import Button from './web/button.jsx'
import Container from './web/container.jsx'
import Input from './web/input.jsx'
import TextArea from './web/textarea.jsx'
import Table from './web/table.jsx'
import Popover from './web/popover.jsx'
import Modal from './web/modal.jsx'
import DropDown from './web/dropdown.jsx'
import NotFound from './web/404.jsx'
import Layout from './web/layout.jsx'

const Router = () => (
    <Layout>
        <Switch>
            <Route exact path={routing.pages.main} component={Main}/>
            <Route exact path={routing.pages.button} component={Button}/>
			<Route exact path={routing.pages.container} component={Container}/>
			<Route exact path={routing.pages.input} component={Input}/>
			<Route exact path={routing.pages.textarea} component={TextArea}/>
			<Route exact path={routing.pages.table} component={Table}/>
			<Route exact path={routing.pages.popover} component={Popover}/>
			<Route exact path={routing.pages.modal} component={Modal}/>
			<Route exact path={routing.pages.dropdown} component={DropDown}/>
            <Route component={NotFound}/>
        </Switch>
    </Layout>
);

export default Router